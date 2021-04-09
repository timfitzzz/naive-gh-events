import { EntityProps, EventPropSet } from './types';
import EventTypes, { GHEvent, GHEventPayloadIteree } from './eventTypes';
import {
  EntityPaths,
  GithubEventType,
  IndexedResultDef,
  resultDef,
} from './eventTypes';
const _ = require('lodash');

// fixUrl: utility function that lets us correct API urls returnd by the GH API
//         so that they match intended web URLs that can be used to produce
//         clickable links.
export function fixUrl(url: string): string | null {
  if (url.indexOf('[bot]') !== -1) {
    url = url.replace('[bot]', '').replace('/users', '/apps');
  }

  return url
    ? url
        .replace('api.', '')
        .replace('www.', '')
        .replace('/repos', '')
        .replace('/users', '')
    : null;
}

// lookupActionTypes: find the variations (action types) an EventType can be expected to have,
//                    based on how they're defined in /eventTypes
export function lookupActionTypes(
  event: GHEvent,
  itereeIdx?: number
): string[] | null {
  if (event.type) {
    const { actionPropPath, actionTypes, iterator } = EventTypes[
      event.type
    ].config;

    if (iterator && actionTypes) {
      if (itereeIdx) {
        let iteree = _.get(event, iterator)[itereeIdx];
        let output = [_.get(iteree, actionPropPath[1])];
        return output;
      } else {
        let types: string[] = _.get(event, iterator).map((iteree) =>
          _.get(iteree, actionPropPath[1])
        );
        return types;
      }
    } else if (actionPropPath) {
      return [_.get(event, actionPropPath)];
    } else {
      return null;
    }
  } else {
    return null;
  }
}

// getVerbs: get the correct verbs for the Event type depending on action type
//           and whether the payload contains multiple event subjects
export function getVerbs(event: GHEvent): string[] {
  if (event.type) {
    const typeMetadata: GithubEventType = EventTypes[event.type];
    const {
      config: { iterator },
      paths,
    } = typeMetadata;

    // if the verb for this event type is a string, it won't vary,
    // and we just need to return one copy for each event subject
    // coming from this event.
    if (typeof paths.verb === 'string') {
      if (iterator) {
        const iterations = _.get(event, iterator);
        return iterations.map(() => paths.verb);
      } else {
        return [paths.verb];
      }
    } else {
      // if verb isn't a string, it's an object indexed by action type,
      // so we need to the appropriate verb for each event subject coming
      // from this event.
      let actionTypes = lookupActionTypes(event);

      if (actionTypes) {
        return actionTypes.map((type) =>
          paths.verb ? paths.verb[type] : 'did'
        );
      } else {
        return ['did'];
      }
    }
  } else {
    return ['did'];
  }
}

// getResultTexts: look up result verbiage based on event type and/or action type
export function getResultTexts(
  eventType: string,
  actionType?: string | null
): [string, string] {
  const resultSet: resultDef | IndexedResultDef =
    EventTypes[eventType].paths.result;
  if (Array.isArray(resultSet)) {
    return resultSet;
  } else if (actionType && resultSet[actionType]) {
    return resultSet[actionType];
  } else {
    return ['item', 'item'];
  }
}

// getActorProps: get the actor props for an event
export function getActorProps(event: GHEvent): { id: string; url: string } {
  const actorPaths: GithubEventType['paths']['actor'] =
    EventTypes[event.type].paths.actor;

  if (actorPaths) {
    return {
      id: _.get(event, actorPaths.id),
      url: _.get(event, actorPaths.url).replace(
        'api.github.com/users',
        'github.com'
      ),
    };
  } else {
    return {
      id: 'unknown actor',
      url: 'https://github.com',
    };
  }
}

// pathsToProps: get the props for an entity based on the provided paths
function pathsToProps(obj: object, paths: EntityPaths): EntityProps {
  let url: string | undefined | null = paths.url
    ? fixUrl(_.get(obj, paths.url))
    : undefined;

  return {
    preposition: paths.preposition,
    id: _.get(obj, paths.id) || paths.id,
    url: url ? url : undefined,
    title: _.get(obj, paths.title),
    desc: _.get(obj, paths.desc) || paths.desc,
    content: _.get(obj, paths.content),
  };
}

// getSubjectPropSets: get the subject prop sets from an Event, depending on action types
export function getSubjectPropSets(event: GHEvent): EntityProps[] {
  const subjectPaths: EntityPaths | { [key: string]: EntityPaths } =
    EventTypes[event.type].paths.subject;
  const { iterator, actionTypes } = EventTypes[event.type].config;

  let output: EntityProps[] = [];

  if (subjectPaths) {
    if (iterator) {
      let subjects: GHEventPayloadIteree[] = _.get(event, iterator);
      output = subjects.map((subject, i) => {
        return actionTypes && !subjectPaths.id
          ? pathsToProps(
              subject as object,
              subjectPaths[(lookupActionTypes(event, i) as string[])[0]]
            )
          : pathsToProps(subject as object, subjectPaths as EntityPaths);
      });
    } else {
      // in this case, there are not multiple subjects.
      // so lookupActionTypes' response array [0] is the only action type.
      let eventActionType =
        event && lookupActionTypes(event)
          ? (lookupActionTypes(event) as string[])[0]
          : null;
      output = [
        actionTypes && eventActionType && !subjectPaths.id
          ? pathsToProps(event, subjectPaths[eventActionType] as EntityPaths)
          : pathsToProps(event, subjectPaths as EntityPaths),
      ];
    }
  }
  return output;
}

// getEntityProps: get the props for a specific entity from an event
export function getEntityProps(
  event: GHEvent,
  entityType: string,
  actionType?: string
): EntityProps | undefined {
  const entityPaths: EntityPaths | { [key: string]: EntityPaths } =
    EventTypes[event.type].paths[entityType];
  let output: EntityProps | undefined;

  if (entityPaths) {
    if (typeof entityPaths.id === 'undefined') {
      if (actionType && entityPaths[actionType]) {
        // for entities with multiple action types:
        // entityPaths = { [key: string]: EntityPaths }
        output = pathsToProps(event, entityPaths[actionType]);
      } else {
        output = undefined;
      }
    } else {
      output = pathsToProps(event, entityPaths as EntityPaths);
    }
  }

  return output;
}

// getEventPropSets: primary interface for getting prop sets for an event.
//                   accepts a GHEvent and returns the normalized collection of EventPropSets,
//                   one per event subject.
export function getEventPropSets(event: GHEvent): EventPropSet[] {
  let subjectPropSets = getSubjectPropSets(event);
  let subjectActionTypes = lookupActionTypes(event);
  let verbs = getVerbs(event);

  return subjectPropSets.map((subject, i) => {
    return {
      //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      date: new Date(event.created_at!),
      private: !event.public,
      verb: verbs[i],
      type: event.type,
      result: getResultTexts(
        event.type,
        subjectActionTypes ? subjectActionTypes[i] : undefined
      ),
      actionType: subjectActionTypes ? subjectActionTypes[i] : undefined,
      subject,
      actor: getActorProps(event),
      target: getEntityProps(
        event,
        'target',
        subjectActionTypes ? subjectActionTypes[i] : undefined
      ) as EntityProps,
      parent: getEntityProps(
        event,
        'parent',
        subjectActionTypes ? subjectActionTypes[i] : undefined
      ) as EntityProps,
    };
  });
}

// getEventsPropSets: primary interface for getting prop sets for an event, pluralized.
export function getEventsPropSets(events: GHEvent[]): EventPropSet[] {
  return events.reduce(
    (acc, event) => acc.concat(getEventPropSets(event)),
    [] as EventPropSet[]
  );
}

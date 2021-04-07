import { EntityProps, EventPropSet } from './types';
import EventTypes, { GHEvent, GHEventPayloadIteree } from './eventTypes';
import {
  EntityPaths,
  GithubEventType,
  IndexedResultDef,
  resultDef,
} from './eventTypes';
const _ = require('lodash');

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
        // console.log(`got itereeIdx`)
        let iteree = _.get(event, iterator)[itereeIdx];
        // console.log(`got iteree: ${iteree}`)
        // console.log("getting path ", actionPropPath[1])
        // console.log(_.get(iteree, actionPropPath[1]))
        let output = [_.get(iteree, actionPropPath[1])];
        return output;
      } else {
        let types: string[] = _.get(event, iterator).map((iteree) =>
          _.get(iteree, actionPropPath[1])
        );
        // console.log(types)
        // .reduce((acc, i) => (acc.indexOf(i) ? acc + i : acc), [])
        return types;
      }
    } else if (actionPropPath) {
      // console.log(_.get(event, actionPropPath))
      return [_.get(event, actionPropPath)];
    } else {
      // console.log("actionTypes === null")
      return null;
    }
  } else {
    return null;
  }
}

export function getVerbs<K extends GHEvent>(
  event: K
  // eventType: EventTypeRequirement<K> = undefined,
  // iterantIndex: IterantIndexRequirement<K> = undefined
): string[] {
  if (event.type) {
    const typeMetadata: GithubEventType = EventTypes[event.type];
    const {
      config: { iterator },
      paths,
    } = typeMetadata;

    if (typeof paths.verb === 'string') {
      if (iterator) {
        const iterations = _.get(event, iterator);
        return iterations.map(() => paths.verb);
      } else {
        return [paths.verb];
      }
    } else {
      // if verb isn't a string, it's an object indexed by action type
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

export function getResultTexts(
  eventType: string,
  actionType?: string | null
): [string, string] {
  const resultSet: resultDef | IndexedResultDef =
    EventTypes[eventType].paths.result;

  // console.log(resultSet)
  // console.log(EventTypes[eventType])
  if (Array.isArray(resultSet)) {
    return resultSet;
  } else if (actionType && resultSet[actionType]) {
    return resultSet[actionType];
  } else {
    return ['item', 'item'];
  }
}

export function getActorProps(event: GHEvent): { id: string; url: string } {
  // console.log("getting actor for ", event.type)
  // console.log(EventTypes[event.type])
  const actorPaths: GithubEventType['paths']['actor'] =
    EventTypes[event.type].paths.actor;
  // console.log(actorPaths)

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

function pathsToProps(obj: object, paths: EntityPaths): EntityProps {
  // console.log(paths)
  // paths.id === "page_name" && console.log("processing obj: ", obj)
  // paths.id === "page_name" && console.log("getting paths ", paths)

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

// goal: produce property sets for each subject within an event
export function getSubjectPropSets(event: GHEvent): EntityProps[] {
  // console.log(event.type)
  // console.log(EventTypes[event.type])
  const subjectPaths: EntityPaths | { [key: string]: EntityPaths } =
    EventTypes[event.type].paths.subject;
  const { iterator, actionTypes } = EventTypes[event.type].config;

  let output: EntityProps[] = [];

  if (subjectPaths) {
    if (iterator) {
      let subjects: GHEventPayloadIteree[] = _.get(event, iterator);
      // console.log(subjects)
      output = subjects.map((subject, i) => {
        // console.log(lookupActionTypes(event, i))
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

export function getEntityProps(
  event: GHEvent,
  entityType: string,
  actionType?: string
): EntityProps | undefined {
  // console.dir(event.type + " " + entityType + " " + actionType)
  const entityPaths: EntityPaths | { [key: string]: EntityPaths } =
    EventTypes[event.type].paths[entityType];

  // const { iterator } = EventTypes[event.type].config

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

export function getEventsPropSets(events: GHEvent[]): EventPropSet[] {
  return events.reduce(
    (acc, event) => acc.concat(getEventPropSets(event)),
    [] as EventPropSet[]
  );
}

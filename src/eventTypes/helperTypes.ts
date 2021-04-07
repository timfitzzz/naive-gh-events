// GithubEventType describes how naive-gh-event should handle a specific type of Github event.
export interface GithubEventType {
  // paths: describes where linguistically-important information exists within this type of event object.
  //        see EventPathSet, below.
  paths: EventPathSet;
  //
  // config describes variations in the linguistically- important content within the event object
  config: {
    //
    // config.actionPropPath: if this event type has multiple action (sub)types, where can naive-gh-events look
    //                        to distinguish between them?
    //                        - for non-iterative events, this can be a simple path string.
    //                        - for events with iterators (multiple payloads), define this as an array:
    //                            array[0] = iterator prop
    //                            array[1] = action indicator prop name
    actionPropPath?: string | [string, string];
    //
    // config.actionTypes: a list of possible values for the action iterator prop
    actionTypes?: string[];
    //
    // config.iterator: the iterator path, if there are multiple subjects per event
    //                  (this needs to be defined even if actionPropPath is an array, per above)
    iterator?: string;
  };
}

// EventPathSet is a map of the linguistically-relevant aspects of a GithubEventType.
export interface EventPathSet {
  //
  // actor: github user or bot
  actor?: {
    id: string;
    url: string;
  };
  //
  // verb: the action performed by the actor, in English.
  //       - if there is only one action type for this event, this is just a string.
  //       - if there are multiple action types, it's an object literal with a key for each type.
  verb?: string | { [key: string]: string };
  //
  // result: the result of the actor verbing, in English.
  //       - if there is only one action type for this event, this is an array with two strings: single + plural
  //       - if there are multiple action types, it's an object literal with a key for each arrayed pair
  result?: [string, string] | { [key: string]: [string, string] };
  //
  // subject: the specific output/outcome described by the result. see EntityPaths.
  subject?: EntityPaths | { [key: string]: EntityPaths };
  //
  // target: the location, such as an issue or pull request, that the outcome is applied to. see EntityPaths.
  target?: EntityPaths | { [key: string]: EntityPaths };
  //
  // parent: the context -- usually a repo -- in which this all occurs. see EntityPaths.
  parent?: EntityPaths | { [key: string]: EntityPaths };
}

// EntityPaths: path strings OR literal English for subject, target, or parent
//              - if a provided string is not valid as a path, it will be inserted literally into the rendered text.
//
export interface EntityPaths {
  id: string;
  url?: string;
  // 'preposition' and 'desc' seldom apply to subject, since they may need to be pluralized via result
  preposition?: string;
  desc?: string;
  title?: string;
  // 'content' only ever applies to subject. this is the comment body, commit note, etc
  content?: string;
}

// defaultActorPaths: a convenience; across events, actor paths are generally the same
export const defaultActorPaths = {
  id: 'actor.login',
  url: 'actor.url',
};

// repoParentPaths: a convenience; across events, if parent is a repo, paths are generally the same
export const repoParentPaths = {
  id: 'repo.name',
  url: 'repo.url',
  preposition: 'in',
  title: 'repo.name',
};

// exported result path types (described literally in EntityPaths for legibility)
export type resultDef = [string, string];
export interface IndexedResultDef {
  [key: string]: resultDef;
}

export const defaultActorPaths = {
  id: "actor.login",
  url: "actor.url",
}

export const repoParentPaths = {
  id: "repo.name",
  url: "repo.url",
  preposition: "in",
  title: "repo.name",
}

export type singleWithPlural = [string, string]
export type resultDef = string | singleWithPlural

// indexed single and plural = [<prop path to test>, { value: [single, plural]}
export interface IndexedResultDef {
  [key: string]: string | resultDef
}

export type propValResult = [string, any, string]
export type iteratorMap = [string, { [key: string]: string }]

export interface EntityRef {
  id: string
  url?: string
  preposition?: string
  desc?: string
  title?: string
  content?: string
}

export interface EventPathSet {
  actor?: {
    id: string
    url: string
  }
  verb?: string | { [key: string]: string }
  result?: resultDef | IndexedResultDef
  parent?: EntityRef | { [key: string]: EntityRef }
  target?: EntityRef | { [key: string]: EntityRef }
  subject?: EntityRef | { [key: string]: EntityRef }
}

export interface GithubEventType {
  config: {
    // actionPropPath: if one subject per event, use a string.
    //                 if multiple subjects per event, use an array:
    //                  array[0] = iterator prop
    //                  array[1] = action indicator prop name
    actionPropPath?: string | [string, string]
    // actionTypes: list possible values of action iterator prop
    actionTypes?: string[]
    // iterator: path to array to iterate if multiple subjects per event
    iterator?: string
  }
  paths: EventPathSet
}

import { GithubEvent } from "../types"
import {
  defaultActorPaths,
  GithubEventType,
  repoParentPaths,
} from "./helperTypes"

const GollumEvent: GithubEventType = {
  config: {
    actionPropPath: ["payload.pages", "action"],
    actionTypes: ["created", "edited"],
    iterator: "payload.pages",
  },
  paths: {
    actor: defaultActorPaths,
    verb: {
      created: "created",
      edited: "edited",
    },
    result: ["wiki page", "wiki pages"],
    subject: {
      id: "page_name",
      url: "html_url",
      title: "title",
    },
    parent: repoParentPaths,
  },
}

export default GollumEvent

export interface GollumEventPayload {
  pages: GithubEvent["payload"]["pages"]
}

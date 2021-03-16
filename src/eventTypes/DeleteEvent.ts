import { GithubEventType } from "./helperTypes"

const DeleteEvent: GithubEventType = {
  config: {
    actionPropPath: "payload.ref_type",
    actionTypes: ["branch", "tag", "repository"],
  },
  paths: {
    actor: {
      id: "actor.login",
      url: "actor.url",
    },
    verb: "deleted",
    result: {
      branch: ["a branch", "branches"],
      tag: ["a tag", "tags"],
      repository: ["a repository", "repositories"],
    },
    subject: {
      id: "payload.ref",
    },
    parent: {
      id: "repo.name",
      url: "repo.url",
      preposition: "in",
      title: "repo.name",
    },
  },
}

export default DeleteEvent

export interface DeleteEventPayload {
  ref: string
  ref_type: string
  pusher_type: string
}

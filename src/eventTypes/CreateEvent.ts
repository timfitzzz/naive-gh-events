import {
  defaultActorPaths,
  GithubEventType,
  repoParentPaths,
} from "./helperTypes"

const CreateEvent: GithubEventType = {
  config: {
    actionPropPath: "payload.ref_type",
    actionTypes: ["branch", "tag", "repository"],
  },
  paths: {
    actor: defaultActorPaths,
    verb: "created",
    result: {
      branch: ["a branch", "branches"],
      tag: ["a tag", "tags"],
      repository: ["a repository", "repositories"],
    },
    subject: {
      id: "payload.ref",
    },
    parent: repoParentPaths,
  },
}

export default CreateEvent

export interface CreateEventPayload {
  ref: string
  ref_type: string
  master_branch: string
  description: string
  pusher_type: string
}

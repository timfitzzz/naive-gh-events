import {
  defaultActorPaths,
  GithubEventType,
  repoParentPaths,
} from "./helperTypes"

const SponsorshipEvent: GithubEventType = {
  config: {
    actionPropPath: "payload.action",
    actionTypes: ["added", "removed"],
  },
  paths: {
    actor: defaultActorPaths,
    verb: {
      created: "added",
      removed: "removed",
    },
    result: ["a sponsorship tier", "sponsorship tiers"],
    target: repoParentPaths,
  },
}

export default SponsorshipEvent

export interface SponsorshipEventPayload {
  action: string
}

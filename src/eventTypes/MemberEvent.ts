import { GithubUser } from "../types"
import { defaultActorPaths, GithubEventType } from "./helperTypes"

const MemberEvent: GithubEventType = {
  config: {
    actionPropPath: "payload.action",
    actionTypes: ["added", "edited", "removed"],
  },
  paths: {
    actor: defaultActorPaths,
    verb: {
      added: "granted",
      edited: "modified",
      removed: "revoked",
    },
    result: ["access", "access"],
    subject: {
      preposition: "for",
      desc: "user",
      id: "payload.member.id",
      title: "payload.member.login",
      url: "payload.member.html_url",
    },
    target: {
      preposition: "to",
      id: "repo.name",
      url: "repo.url",
    },
  },
}

export default MemberEvent

export interface MemberEventPayload {
  member: GithubUser
  action: string
}

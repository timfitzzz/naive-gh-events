import { GithubIssue } from "../types"
import {
  defaultActorPaths,
  GithubEventType,
  repoParentPaths,
} from "./helperTypes"
const IssuesEvent: GithubEventType = {
  config: {
    actionPropPath: "payload.action",
    actionTypes: [
      "opened",
      "closed",
      "reopened",
      "assigned",
      "unassigned",
      "labeled",
      "unlabeled",
    ],
  },
  paths: {
    actor: defaultActorPaths,
    verb: {
      opened: "opened",
      closed: "closed",
      reopened: "reopened",
      assigned: "assigned",
      unassigned: "unassigned",
      labeled: "applied",
      unlabeled: "removed",
    },
    result: {
      opened: ["issue", "issues"],
      closed: ["issue", "issues"],
      reopened: ["issue", "issues"],
      assigned: ["issue", "issues"],
      unassigned: ["issue", "issues"],
      labeled: ["label", "labels"],
      unlabeled: ["label", "labels"],
    },
    subject: {
      opened: {
        id: "payload.issue.number",
        url: "payload.issue.html_url",
        title: "payload.issue.title",
        content: "payload.issue.body",
      },
      reopened: {
        id: "payload.issue.number",
        url: "payload.issue.html_url",
        title: "payload.issue.title",
        content: "payload.issue.body",
      },
      closed: {
        id: "payload.issue.number",
        url: "payload.issue.html_url",
        title: "payload.issue.title",
      },
      assigned: {
        id: "payload.issue.number",
        url: "payload.issue.html_url",
        title: "payload.issue.title",
      },
      unassigned: {
        id: "payload.issue.number",
        url: "payload.issue.html_url",
        title: "payload.issue.title",
      },
      labeled: {
        id: "payload.label.name",
        url: "payload.label.html_url",
      },
      unlabeled: {
        id: "payload.label.name",
        url: "payload.label.html_url",
      },
    },
    target: {
      assigned: {
        preposition: "to user",
        id: "payload.assignee.login",
        url: "payload.assignee.html_url",
      },
      unassigned: {
        preposition: "to user",
        id: "payload.assignee.login",
        url: "payload.assignee.html_url",
      },
      labeled: {
        preposition: "to issue",
        id: "payload.issue.number",
        url: "payload.issue.html_url",
        title: "payload.issue.title",
      },
      unlabeled: {
        preposition: "from issue",
        id: "payload.issue.number",
        url: "payload.issue.html_url",
        title: "payload.issue.title",
      },
    },
    parent: repoParentPaths,
  },
}

export default IssuesEvent

export interface IssuesEventPayload {
  action: string
  issue: GithubIssue
}

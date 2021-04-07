import { Endpoints } from '@octokit/types';
import CommitCommentEvent, {
  CommitCommentEventPayload,
} from './CommitCommentEvent';
import CreateEvent, { CreateEventPayload } from './CreateEvent';
import DeleteEvent, { DeleteEventPayload } from './DeleteEvent';
import ForkEvent, { ForkEventPayload } from './ForkEvent';
import GollumEvent, { GollumEventPayload } from './GollumEvent';
import IssueCommentEvent, {
  IssueCommentEventPayload,
} from './IssueCommentEvent';
import IssuesEvent, { IssuesEventPayload } from './IssuesEvent';
import MemberEvent, { MemberEventPayload } from './MemberEvent';
import PublicEvent, { PublicEventPayload } from './PublicEvent';
import PullRequestEvent, { PullRequestEventPayload } from './PullRequestEvent';
import PullRequestReviewEvent, {
  PullRequestReviewEventPayload,
} from './PullRequestReviewEvent';
import PullRequestReviewCommentEvent, {
  PullRequestReviewCommentEventPayload,
} from './PullRequestReviewCommentEvent';
import PushEvent, { PushEventPayload } from './PushEvent';
import ReleaseEvent, { ReleaseEventPayload } from './ReleaseEvent';
import SponsorshipEvent, { SponsorshipEventPayload } from './SponsorshipEvent';
import WatchEvent, { WatchEventPayload } from './WatchEvent';
export * from './helperTypes';

export default {
  CommitCommentEvent,
  CreateEvent,
  DeleteEvent,
  ForkEvent,
  GollumEvent,
  IssueCommentEvent,
  IssuesEvent,
  MemberEvent,
  PublicEvent,
  PullRequestEvent,
  PullRequestReviewEvent,
  PullRequestReviewCommentEvent,
  PushEvent,
  ReleaseEvent,
  SponsorshipEvent,
  WatchEvent,
};

// These types are pulled from GH's Octokit type definitions. They get us almost all the way to a complete set of types
// for the many possible permutations of event type + action type + payload definition, but the GithubEvent type does not
// natively include them all, so we'll grab them separately and include them in our type definitions as required.
export type GithubEvent = Endpoints['GET /users/{username}/events']['response']['data'][0];
export type GithubIssue = Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'][0];
export type GithubLabel = Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}/labels']['response']['data'][0];
export type GithubUser = Endpoints['GET /users/{username}']['response']['data'];
export type GithubRepo = Endpoints['GET /repos/{owner}/{repo}']['response']['data'];
export type GithubPullRequest = Endpoints['GET /repos/{owner}/{repo}/pulls/{pull_number}']['response']['data'];
export type GithubPullRequestComment = Endpoints['GET /repos/{owner}/{repo}/pulls/comments/{comment_id}']['response']['data'];
export type GithubPullRequestReview = Endpoints['GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}']['response']['data'];
export type GithubRelease = Endpoints['GET /repos/{owner}/{repo}/releases/{release_id}']['response']['data'];
export type GithubCommitComment = Endpoints['GET /repos/{owner}/{repo}/commits/{commit_sha}/comments']['response']['data'][0];

// To resolve the issue described above -- the official GithubEvent type missing many payload permutations --
// we'll remove the payload property from GithubEvent, and then build our own union type including all of the specific
// payload definitions, which Octokit does accurately represent.
type StrippedGHEvent = Omit<GithubEvent, 'payload' | 'type'>;
export type GHEventPayload =
  | CommitCommentEventPayload
  | CreateEventPayload
  | DeleteEventPayload
  | ForkEventPayload
  | GollumEventPayload
  | IssueCommentEventPayload
  | IssuesEventPayload
  | MemberEventPayload
  | PublicEventPayload
  | PullRequestEventPayload
  | PullRequestReviewEventPayload
  | PullRequestReviewCommentEventPayload
  | PushEventPayload
  | ReleaseEventPayload
  | SponsorshipEventPayload
  | WatchEventPayload;

export type GHEventPayloadIteree =
  | GollumEventPayload['pages']
  | PushEventPayload['commits'];

export interface GHEvent extends StrippedGHEvent {
  payload: GHEventPayload;
  type: string;
}

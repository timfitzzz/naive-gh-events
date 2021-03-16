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
import { GithubEvent } from '../types';
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

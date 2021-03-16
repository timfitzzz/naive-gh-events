import CommitCommentEventTests from "./CommitCommentEventTests"
import CreateEventTests from "./CreateEventTests"
import DeleteEventTests from "./DeleteEventTests"
import ForkEventTests from "./ForkEventTests"
import GollumEventTests from "./GollumEventTests"
import IssueCommentEventTests from "./IssueCommentEventTests"
import IssuesEventTests from "./IssuesEventTests"
import MemberEventTests from "./MemberEventTests"
import PublicEventTests from "./PublicEventTests"
import PullRequestEventTests from "./PullRequestEventTests"
import PullRequestReviewCommentEventTests from "./PullRequestReviewCommentEventTests"
import PullRequestReviewEventTests from "./PullRequestReviewEventTests"
import PushEventTests from "./PushEventTests"
import ReleaseEventTests from "./ReleaseEventTests"
import WatchEventTests from "./WatchEventTests"

export const EventTests = {
  CommitCommentEvent: CommitCommentEventTests,
  CreateEvent: CreateEventTests,
  DeleteEvent: DeleteEventTests,
  ForkEvent: ForkEventTests,
  GollumEvent: GollumEventTests,
  IssueCommentEvent: IssueCommentEventTests,
  IssuesEvent: IssuesEventTests,
  MemberEvent: MemberEventTests,
  PublicEvent: PublicEventTests,
  PullRequestEvent: PullRequestEventTests,
  PullRequestReviewEvent: PullRequestReviewEventTests,
  PullRequestReviewCommentEvent: PullRequestReviewCommentEventTests,
  PushEvent: PushEventTests,
  ReleaseEvent: ReleaseEventTests,
  WatchEvent: WatchEventTests,
}

export default EventTests

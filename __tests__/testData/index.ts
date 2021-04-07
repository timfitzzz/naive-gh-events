import { GHEvent } from '../../src/eventTypes';
import {
  EventPropSet,
  RenderedEventPropSet,
  RenderedEventsTextSet,
} from '../../src/types';
import CommitCommentEventTests from './CommitCommentEventTests';
import CreateEventTests from './CreateEventTests';
import DeleteEventTests from './DeleteEventTests';
import ForkEventTests from './ForkEventTests';
import GollumEventTests from './GollumEventTests';
import IssueCommentEventTests from './IssueCommentEventTests';
import IssuesEventTests from './IssuesEventTests';
import MemberEventTests from './MemberEventTests';
import PublicEventTests from './PublicEventTests';
import PullRequestEventTests from './PullRequestEventTests';
import PullRequestReviewCommentEventTests from './PullRequestReviewCommentEventTests';
import PullRequestReviewEventTests from './PullRequestReviewEventTests';
import PushEventTests from './PushEventTests';
import ReleaseEventTests from './ReleaseEventTests';
import WatchEventTests from './WatchEventTests';

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
};

export default EventTests;

//// Testing-related types
//
// To test that events' rendering matches expected outcomes
// each event type has an associated testing profile.
export interface TypeTestData {
  testEvents: TestEventsByActionType;
}

// For events with multiple action types (often defined in payload.action),
// each set of test events is keyed by action type. If this particular event
// type does not have multiple action types, the key is 'none'.
export interface TestEventsByActionType {
  [key: string]: TestEvent[];
}

// Each defined test event type must have the following properties to be
// properly run by the existing consistency tests:
//
// events: [] containing at least one event
// propSets: [] containing the normalized property sets produced by getEventsPropSets
// renderedPropSets: []s of rendered prop sets, both plain and md
// renderedEventsTextSets: plain and md sets of final rendered text for these events,
//                         both when collapse = false (individually-rendered) and
//                         collapse = true
export interface TestEvent {
  events: GHEvent[];
  propSets: EventPropSet[];
  renderedPropSets: { plain: RenderedEventPropSet; md: RenderedEventPropSet }[];
  renderedEventsTextSets: {
    collapsed: {
      plain: RenderedEventsTextSet;
      md: RenderedEventsTextSet;
    }[];
    individual: {
      plain: RenderedEventsTextSet;
      md: RenderedEventsTextSet;
    }[];
  };
}

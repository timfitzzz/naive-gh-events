import { Endpoints } from '@octokit/types';
import { DateTime, LocaleOptions } from 'luxon';
import { GHEvent } from './eventTypes';
import { resultDef } from './eventTypes/helperTypes';

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

export interface NaiveConfig {
  sortBy?: 'date' | 'actor' | 'type' | 'target' | 'parent';
  collapse?: boolean;
  dateSummaries?: boolean;
  dateContent?: boolean;
  groupByDays?: number;
  groupStartDay?: number;
  startDate?: Date;
  md?: boolean;
  omitContent?: boolean;
  indentContent?: boolean;
  dateTimeFormatOptions?: LocaleOptions;
  newLinesBetween?: boolean;
  reverseSortEvents?: boolean;
  markPrivate?: boolean;
  privateMarker?: string;
}

export const defaultNaiveConfig: NaiveConfig = {
  sortBy: 'date',
  collapse: true,
  groupByDays: 7,
  groupStartDay: 0,
  dateSummaries: false,
  dateContent: false,
  startDate: new Date('1/1/1970'),
  md: true,
  omitContent: false,
  indentContent: true,
  dateTimeFormatOptions: DateTime.DATE_FULL,
  newLinesBetween: true,
  reverseSortEvents: false,
  markPrivate: false,
  privateMarker: 'Ꙫ',
};

export interface EntityProps {
  id: number | string;
  url: string | undefined;
  desc: string | undefined;
  preposition: string | undefined;
  title: string | number | undefined;
  content?: string | undefined;
}

export interface ActorProps {
  id: string;
  url: string;
}

export interface EventPropSet {
  date: Date;
  private: boolean;
  type: string;
  verb: string;
  result: resultDef;
  actionType?: string;
  subject: EntityProps;
  actor: ActorProps;
  target?: EntityProps;
  parent?: EntityProps;
}

export interface TestStringsSet {
  plain: string;
  md: string;
}

export interface TestStringsArraysSet {
  plain: string[][];
  md: string[][];
}

export interface TestEvent {
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
  events: GHEvent[];
}

export interface TestEventsByActionType {
  [key: string]: TestEvent[];
}
export type TestEvents = TestEventsByActionType;

export interface TypeTestData {
  testEvents: TestEvents;
}

export type RenderedSubjectAndContent = [subject: string, content?: string];
export type RenderedEventPropSetText = [
  summary: string,
  ...content: string[] | []
];
export type RenderedEventsTextSet = [
  dates: string[],
  summary: string,
  ...content: string[] | []
];

export interface RenderedEventPropSet {
  date: string;
  actor: string;
  verb: string;
  subject: string;
  content?: string;
  target?: string;
  parent?: string;
}

export interface DatedEventCollection {
  startDate: Date;
  endDate: Date;
  eventPropSets: EventPropSet[];
}

export interface SortedDatedEventCollection {
  startDate: Date;
  endDate: Date;
  eventPropSetGroups: EventPropSet[][];
  eventPropSets: EventPropSet[];
}

export type DatedEventCollections = DatedEventCollection[];
export type SortedDatedEventCollections = SortedDatedEventCollection[];

export interface RenderedEventCollectionSet {
  startDate: string;
  endDate: string;
  renderedEventCollections: RenderedEventCollection[];
}
export type RenderedEventCollection = string;

export interface ValidationResponse {
  result: 'valid' | 'partial' | 'invalid';
  errReason?: string;
  validEvents?: GHEvent[];
  invalidEvents?: InvalidResponse[];
}

export type InvalidResponse = [event: any, explanation: string];

import { DateTime, LocaleOptions } from 'luxon';
import { GHEvent } from './eventTypes';

// Configuration options for renderEvents
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
  omitPrivateLinks?: boolean;
  italicizePrivateLinks?: boolean;
}

// Default configuration options for renderEvents
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
  omitPrivateLinks: false,
  italicizePrivateLinks: false,
};

// naive-gh-events has three phases:
// - normalize events into EventPropSets
// - collect and sort EventPropSets by date, similarity, and other optional characteristics
// - render collected EventPropSets according to provided configuration

// phase 1 types (property selection)
//
// EventPropSet
// ------------
// Before processing, GH Events are normalized into one or more EventPropSets
export interface EventPropSet {
  date: Date; // date of the event
  private: boolean; //
  type: string;
  verb: string;
  result: [string, string];
  actionType?: string;
  subject: EntityProps;
  actor: ActorProps;
  target?: EntityProps;
  parent?: EntityProps;
}
//
// EntityProps
// -------------
// Subjects, Targets, and Parents are 'entities' with at least an id,
// and potentially additional properties
export interface EntityProps {
  id: number | string;
  url: string | undefined;
  desc: string | undefined;
  preposition: string | undefined;
  title: string | number | undefined;
  content?: string | undefined;
}
// ActorProps
// -----------
// GH events define actors fairly tersely and are more linguistically straightforward,
// so we just need to locate an id and a url for each.
export interface ActorProps {
  id: string;
  url: string;
}
//

// phase 2 types (sorting EventPropSets)
//
// DatedEventCollection
// --------------------
// naive-gh-events groups the normalized EventPropSets by date range based on the startDate, groupByDays,
// and groupStartDay config options.
// - The first DatedEventCollection will:
//    - begin on the groupStartDay prior to the first event that is subsequent to the startDate
//    - contain as many days of activity as configured in groupByDays
// - Subsequent groups going forward in time will contain events occurring within groupByDays days.
// - If groupByDays is a week (the default), each group will contain a week's worth of events, starting on
//   the groupStartDay. If groupByDays is another length, groups won't always begin on the groupStartDay.
// - If there are no events falling within subsequent groupByDays, no group will be returned for that period
//   rather than returning an empty group.
export interface DatedEventCollection {
  startDate: Date;
  endDate: Date;
  eventPropSets: EventPropSet[];
}
//
// SortedDatedEventCollection
// --------------------------
// After creating DatedEventCollections, the configuration options collapse and sortBy are applied.
//
// If collapse = true, EventPropSets will be grouped if they have the same type, action type, actor,
// target, and parent (and privacy, if markPrivate = true) -- in other words, if they refer to different
// subjects but are otherwise identical. These are returned as nested collections of EventPropSets.
//   - If collapse = false, EventPropSetGroups each contain just one EventPropSet.
export interface SortedDatedEventCollection {
  startDate: Date;
  endDate: Date;
  eventPropSetGroups: EventPropSet[][];
  eventPropSets: EventPropSet[];
}
export type DatedEventCollections = DatedEventCollection[];
export type SortedDatedEventCollections = SortedDatedEventCollection[];

// phase 3 types (rendering text)
//
// RenderedEventPropSet
// --------------------
// Next, the EventPropSets within the EventPropSetGroups on each SortedDatedEventCollection are rendered
// in a granular fashion, in either markdown or plain text. They are not yet concatenated, but instead
// stored in a granular format quite similar to EventPropSets. The only property missing in comparison is
// 'result', which is rendered in the next step based on whether or not it needs to be pluralized. won't be rendered until
export interface RenderedEventPropSet {
  date: string;
  actor: string;
  verb: string;
  subject: string;
  content?: string;
  target?: string;
  parent?: string;
}
//
// RenderedEventPropSetText
// ------------------------
// Next, each RenderedEventPropSet within an EventPropSetGroup is rendered into the two basic output types:
//   -- summary: a line of English text describing the event or events in total
//   -- content: an array of lines of English text, each containing the 'content' details for one of the
//               subjects in the EventPropSetGroup.
// The end result is one summary line and subsequent lines containing content. For example:
//
// kii-chan-reloaded edited 2 wiki pages in kii-chan-reloaded/GeneticChickengineering        <-- summary of 2 events
//   Home (https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home)           <-- content of event 1
//   Settings (https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)   <-- content of event 2
//
export type RenderedEventPropSetText = [
  summary: string,
  ...content: string[] | []
];
//
// RenderedEventsTextSet
// ---------------------
// Penultimately, after the subject and content are rendered, final formatting options are applied, and a RenderedEventsTextSet
// is returned from the renderEvents endpoint, containing:
//   -- an array of rendered (per dateTimeFormatOptions setting) dates for each of the rendered events in the set
//   -- the summary line of text for the set
//   -- content lines of text for the set
// These rendered text sets include both final line endings and indentation, per config options.
//
export type RenderedEventsTextSet = [
  dates: string[],
  summary: string,
  ...content: string[] | []
];
//
// RenderedEventCollectionSet
// --------------------------
// Finally, each DatedEventCollections' worth of events is returned:
//   -- startDate: indicates the first date spanned by the group of events (see DatedEventCollection)
//   -- endDate: the final date included in the group of events
//   -- renderedEventCollections: a collection of rendered strings, with each RenderedEventTextSet
//        maintained as a separate string in the array. If joined, the entire set is ready to be
//        displayed or stored.

export interface RenderedEventCollectionSet {
  startDate: string;
  endDate: string;
  renderedEventCollections: RenderedEventCollection[];
}
export type RenderedEventCollection = string;
//
// ValidationResponse and InvalidResponse are part of the event validation process
// renderEvents uses to determine that it does or does not know how to handle the provided events.
export interface ValidationResponse {
  result: 'valid' | 'partial' | 'invalid';
  errReason?: string;
  validEvents?: GHEvent[];
  invalidEvents?: InvalidResponse[];
}
export type InvalidResponse = [event: any, explanation: string];

import { DateTimeFormatOptions, DateTime } from 'luxon';
import { GHEvent } from './eventTypes';
// import { getActorProps, getVerbs } from './getProps';
import {
  defaultNaiveConfig,
  NaiveConfig,
  RenderedEventPropSet,
  RenderedSubjectAndContent,
  SortedDatedEventCollections,
  EntityProps,
  EventPropSet,
  RenderedEventsTextSet,
  RenderedEventCollectionSet,
  InvalidResponse,
} from './types';
import { getSortedDatedEventCollections } from './collectPropSets';
import { validateEvents } from './validation';
import _ from 'lodash';

export function renderActorText(
  ActorProps: EventPropSet['actor'],
  { md }: { md: boolean } = { md: false }
): string {
  let { id, url } = ActorProps;
  return `${md ? '[' : ''}${id}${md ? '](' + url + ')' : ''}`;
}

export function renderVerbText(verb: EventPropSet['verb']): string {
  return verb;
}

export function renderEntityText(
  set: Partial<EntityProps> = {},
  {
    md = defaultNaiveConfig.md,
    omitLink = false,
    italicizeLink = false,
  }: { md?: boolean; omitLink?: boolean; italicizeLink?: boolean } = {
    md: defaultNaiveConfig.md,
    omitLink: false,
    italicizeLink: false,
  }
): string {
  let { id, url, desc, preposition, title } = set;
  let space = ' ';

  let titleString = md
    ? title || desc || id || ''
    : title || desc
    ? title || desc + (id ? ' (' + id + ')' : '')
    : id || '';
  // prettier-ignore
  return "" + // make sure at least an empty string is returned
    (preposition ? preposition + space : "") + // preposition
    ((desc && title) ? desc + space : "") + // if both desc and title, desc
    (md && url && !omitLink ? "[" : "") + // open link if md and url
    (md && italicizeLink ? '_' : '') + titleString + (md && italicizeLink ? "_" : '') + // title, or desc, or id
    (md && url && !omitLink ? "]" : "") + // close link if md and url
      (md && url && !omitLink ? `(${url})` : "") // url if md and url and no omitLink
}

export const renderSubject = (
  subjectProps: EventPropSet['subject'],
  {
    md = false,
    omitLink = false,
    italicizeLink = false,
  }: { md?: boolean; omitLink?: boolean; italicizeLink?: boolean } = {
    md: false,
    omitLink: false,
    italicizeLink: false,
  }
): RenderedSubjectAndContent => [
  renderEntityText(subjectProps, { md, omitLink, italicizeLink }),
  subjectProps.content,
];

export function getRenderedEventPropSet(
  eventProps: EventPropSet,
  {
    md = defaultNaiveConfig.md as boolean,
    dateTimeFormatOptions = defaultNaiveConfig.dateTimeFormatOptions,
    omitPrivateLinks = defaultNaiveConfig.omitPrivateLinks as boolean,
    italicizePrivateLinks = defaultNaiveConfig.italicizePrivateLinks as boolean,
  }: Partial<NaiveConfig> = _.pick(defaultNaiveConfig, [
    'md',
    'dateTimeFormatOptions',
    'omitPrivateLinks',
    'italicizePrivateLinks',
  ])
): RenderedEventPropSet {
  let date = renderDate(
    eventProps.date,
    dateTimeFormatOptions ? dateTimeFormatOptions : DateTime.DATE_FULL
  ); // make the format a config option
  let actor = renderActorText(eventProps.actor, { md });
  let verb = renderVerbText(eventProps.verb);
  let subject = renderSubject(eventProps.subject, {
    md,
    omitLink: omitPrivateLinks && eventProps.private ? true : false,
    italicizeLink: italicizePrivateLinks && eventProps.private ? true : false,
  });
  let target = eventProps.target
    ? renderEntityText(eventProps.target, {
        md,
        omitLink: omitPrivateLinks && eventProps.private ? true : false,
        italicizeLink:
          italicizePrivateLinks && eventProps.private ? true : false,
      })
    : undefined;
  let parent = eventProps.parent
    ? renderEntityText(eventProps.parent, {
        md,
        omitLink: omitPrivateLinks && eventProps.private ? true : false,
        italicizeLink:
          italicizePrivateLinks && eventProps.private ? true : false,
      })
    : undefined;

  return {
    date,
    actor,
    verb,
    subject: subject[0],
    content: subject[1],
    target,
    parent,
  };
}

export function renderDate(
  date: Date,
  formatOptions: DateTimeFormatOptions
): string {
  return DateTime.fromJSDate(date).toLocaleString(formatOptions);
}

// prettier-ignore
export function renderDatedContent(
  date: string,
  content: string | number | null,
  url: string | null,
  title: string | number | null,
  { md = false, italicizeLink = false }: { md?: boolean, italicizeLink?: boolean } = {
    md: false, italicizeLink: false
  }
): string {

  // scenarios:
  // date, title, url, content: `Date - [Title](URL): Content` || `Date - Title: Content (URL)`
  // date, title, url:          `Date: [Title](URL)` || `Date: Title (URL)`
  // date, title:               `Date: Title`
  // date, title, content:      `Date - Title: Content`
  // date, url, content:        `[Date](URL): Content` || `Date: Content (URL)`
  // date, content:             `Date: Content` || `Date: Content`
  // date, url:                 `[Date](URL)` || `Date (URL)`

  return  title 
          ? url && content  // date, title, url, content
            ? md 
              ? `${date} - [${(italicizeLink ? '_' : '') + title + (italicizeLink ? '_' : '')}](${url}): ${content}`
              : `${date} - ${title}: ${content} (${url})`
            : url && !content           // date, title, url
              ? md
                ? `${date}: [${(italicizeLink ? '_' : '') + title + (italicizeLink ? '_' : '')}](${url})`
                : `${date}: ${title} (${url})`
              : content && !url // md and plaintext are the same here
                ? `${date} - ${title}: ${content}`  // date, title, content
                : `${date}: ${title}`               // date, title  
          : url && content  // date, url, content
            ? md
              ? `[${(italicizeLink ? '_' : '') + date + (italicizeLink ? '_' : '')}](${url}): ${content}`
              : `${date}: ${content} (${url})`
            : content && !url //date, content
              ? `${date}: ${content}`
              : url && !content 
                ? md            // date, url
                  ? `[${(italicizeLink ? '_' : '') + date + (italicizeLink ? '_' : '')}](${url})`
                  : `${date} (${url})`
                : `${date}`     // date
}

export function renderContent(
  content: string | number,
  url: string | null,
  title: string | number | null,
  {
    md = false,
    italicizeLink = false,
  }: { md?: boolean; italicizeLink?: boolean } = {
    md: false,
    italicizeLink: false,
  }
): string {
  let output = `${md && url ? '[' : ''}${
    md && url && italicizeLink ? '_' : ''
  }${title ? title : md ? 'item' : ''}${md && url && italicizeLink ? '_' : ''}${
    md && url ? '](' + url + ')' : ''
  }${content && content !== title ? `: ${content}` : ''}${
    url && !md ? ' (' + url + ')' : ''
  }`;

  return output;
}

export function renderEventPropSetGroup(
  eventPropSets: EventPropSet[],
  {
    md = defaultNaiveConfig.md as boolean,
    dateTimeFormatOptions = defaultNaiveConfig.dateTimeFormatOptions,
    dateSummaries = defaultNaiveConfig.dateSummaries,
    dateContent = defaultNaiveConfig.dateContent,
    markPrivate = defaultNaiveConfig.markPrivate,
    privateMarker = defaultNaiveConfig.privateMarker,
    omitPrivateLinks = defaultNaiveConfig.omitPrivateLinks,
    italicizePrivateLinks = defaultNaiveConfig.italicizePrivateLinks,
  }: Partial<NaiveConfig> = _.pick(defaultNaiveConfig, [
    'md',
    'dateTimeFormatOptions',
    'dateSummaries',
    'dateContent',
    'privateMarker',
    'omitPrivateLinks',
    'italicizePrivateLinks',
  ])
): RenderedEventsTextSet {
  let output: Partial<RenderedEventsTextSet> = [[]];

  let renderedSets = eventPropSets.map((eps) => {
    return getRenderedEventPropSet(eps, {
      md,
      dateTimeFormatOptions,
      omitPrivateLinks,
      italicizePrivateLinks,
    });
  });

  renderedSets.forEach((reps, i) => {
    let {
      subject: { url, title },
      result,
      private: privateEvent,
    } = eventPropSets[i];

    // the first value in the output set is an array of all the dates
    // of the events included in the rendered set. so let's store the date
    // for this renderedEventPropSet
    output[0] && output[0].push(reps.date);

    // the first eventPropSet, and knowledge of the number of sets
    // in this eventPropSetGroup, give us the info we need to construct
    // the first line of output text.
    if (i === 0) {
      const summaryString = `${dateSummaries ? reps.date + ': ' : ''}${
        reps.actor
      } ${reps.verb} ${
        eventPropSets.length > 1 ? `${eventPropSets.length} ` : ''
      }${
        typeof result === 'string'
          ? result
          : eventPropSets.length > 1
          ? result[1]
          : result[0]
      }${eventPropSets.length > 1 ? '' : ' ' + reps.subject}${
        reps.target || reps.parent ? ' ' : ''
      }${reps.target ? reps.target + (reps.parent ? ' ' : '') : ''}${
        reps.parent ? reps.parent : ''
      }${markPrivate ? ' ' + privateMarker : ''}`;

      output[1] = summaryString;
    }

    // if this renderedEventPropSet has content, or there is more than one
    // prop set in the group, we're going to render the content and/or
    // the details of each set's subject on subsequent lines of text.

    // prettier-ignore
    if (reps.content || eventPropSets.length > 1) { 
      // if content exists, or there are multiple prop sets
      dateContent // should content lines be dated?
        ? output.push(              // if so, use renderDatedContent
            renderDatedContent(
              reps.date,
              reps.content || null,
              privateEvent && omitPrivateLinks ? null : (url || null),
              title || null,
              { md, italicizeLink: privateEvent && italicizePrivateLinks ? true : false }
            )
          ) 
        : output.push(    // if we're not dating the content lines:
            eventPropSets.length > 1  // if there are multiple subjects
              ? renderContent(    // render or generate content lines
                  reps.content ? reps.content : title ? title : "",
                  privateEvent && omitPrivateLinks ? null : (url || null),
                  title ? title : null,
                  { md, italicizeLink: privateEvent && italicizePrivateLinks ? true : false }
                ) // if there is just one content prop, return it directly,
                  // since url, title, and/or date will be included in
                  // the subject line.
              : reps.content
          )
    }
  });
  return output as RenderedEventsTextSet;
}

function formatRenderedEventsTextSet(
  rets: RenderedEventsTextSet,
  {
    md = true,
    indentContent = true,
    omitContent = false,
    newLinesBetween = true,
  }: Partial<NaiveConfig> = {
    indentContent: true,
    omitContent: false,
    newLinesBetween: true,
    md: true,
  }
): RenderedEventsTextSet {
  let [dates, summary, ...content] = rets;

  // if omitContent, drop content
  content = omitContent ? [] : content;

  // the last line ending (could be summary or content, depending)
  let lastLineEnding = '  \r\n' + (newLinesBetween ? '\r\n' : '');

  // finally, handle indentation
  let contentIndentation = indentContent ? (md ? '* ' : '  ') : '';

  content =
    content.length > 0
      ? content.map((contentLine) =>
          formatContentLine(contentLine, contentIndentation)
        )
      : [];

  // if no content, apply last line ending to summary
  if (content.length < 1) {
    summary = summary + lastLineEnding;
  } else {
    // otherwise, add basic line ending to summary line...
    summary = summary + '  \r\n';
    // ...join content lines with basic line ending between them...
    content = content.map((contentLine, i) =>
      i != content.length - 1 ? contentLine + '  \r\n' : contentLine
    );
    // ...and apply last line ending to last content string
    content[content.length - 1] =
      content[content.length - 1] +
      lastLineEnding + // hacky workaround for edge case (gh issue #9)
      (md && indentContent && !newLinesBetween ? '\r\n' : '');
  }

  return [dates, summary, ...content];
}

function formatContentLine(content: string, indentation: string): string {
  let contentLines = content.split('\n');

  let output =
    indentation +
    contentLines.map((line, i) => `${i != 0 ? '  ' : ''}${line}`).join('\n');

  return output;
}

export function renderEvents(
  events: GHEvent[],
  {
    sortBy = defaultNaiveConfig.sortBy,
    groupByDays = defaultNaiveConfig.groupByDays,
    groupStartDay = defaultNaiveConfig.groupStartDay,
    dateSummaries = defaultNaiveConfig.dateSummaries,
    dateContent = defaultNaiveConfig.dateContent,
    collapse = defaultNaiveConfig.collapse,
    md = defaultNaiveConfig.md,
    startDate = defaultNaiveConfig.startDate,
    omitContent = defaultNaiveConfig.omitContent,
    indentContent = defaultNaiveConfig.indentContent,
    dateTimeFormatOptions = defaultNaiveConfig.dateTimeFormatOptions,
    newLinesBetween = defaultNaiveConfig.newLinesBetween,
    reverseSortEvents = defaultNaiveConfig.reverseSortEvents,
    privateMarker = defaultNaiveConfig.privateMarker,
    markPrivate = defaultNaiveConfig.markPrivate,
    omitPrivateLinks = defaultNaiveConfig.omitPrivateLinks,
    italicizePrivateLinks = defaultNaiveConfig.italicizePrivateLinks,
  }: Partial<NaiveConfig> = defaultNaiveConfig
): RenderedEventCollectionSet[] {
  const { validEvents, invalidEvents, errReason, result } = validateEvents(
    events
  );

  if (result === 'invalid') {
    console.warn('Invalid event input: ' + errReason);
    return [];
  }

  if (result === 'partial' && invalidEvents) {
    invalidEvents.forEach((ir: InvalidResponse) => {
      console.warn(ir[1] + JSON.stringify(ir[0]));
    });
  }

  if (validEvents) {
    let eventPropSetGroupCollection: SortedDatedEventCollections = getSortedDatedEventCollections(
      validEvents,
      {
        sortBy,
        collapse,
        groupByDays,
        groupStartDay,
        startDate,
        reverseSortEvents,
        markPrivate,
      }
    ) as SortedDatedEventCollections;

    return eventPropSetGroupCollection.map((sdec) => {
      let { startDate, endDate, eventPropSetGroups } = sdec;

      return {
        startDate: startDate
          ? renderDate(startDate, dateTimeFormatOptions)
          : '',
        endDate:
          typeof endDate === 'string'
            ? endDate
            : endDate
            ? renderDate(endDate, dateTimeFormatOptions)
            : '',
        renderedEventCollections: eventPropSetGroups
          ? eventPropSetGroups.map((epsg) => {
              let repts = renderEventPropSetGroup(epsg, {
                md,
                dateTimeFormatOptions,
                dateSummaries,
                dateContent,
                omitContent,
                indentContent,
                markPrivate,
                privateMarker,
                omitPrivateLinks,
                italicizePrivateLinks,
              });

              let processedRenderedSet = formatRenderedEventsTextSet(repts, {
                md,
                indentContent,
                omitContent,
                newLinesBetween,
              });

              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              let [_dates, summary, ...content] = processedRenderedSet;

              return summary + content.join('');
            })
          : [],
      };
    });
  } else {
    return [];
  }
}

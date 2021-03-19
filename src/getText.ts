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
} from './types';
import { getSortedDatedEventCollections } from './collectPropSets';

export function renderActorText(
  ActorProps: EventPropSet['actor'],
  { md }: { md: boolean } = { md: false }
): string {
  let { id, url } = ActorProps;
  return `${md ? '[' : ''}${id}${md ? '](' + url + ')' : ''}`;
}

// export function getActorText(
//   event: GHEvent,
//   { md }: { md: boolean } = { md: false }
// ): string {
//   let { id, url } = getActorProps(event);
//   return `${md ? '[' : ''}${id}${md ? '](' + url + ')' : ''}`;
// }

export function renderVerbText(verb: EventPropSet['verb']): string {
  return verb;
}

// export function getActorVerbText(
//   event: GHEvent,
//   { md }: { md: boolean } = { md: false }
// ): string | string[] {
//   let actorText = getActorText(event, { md });
//   let verbs = getVerbs(event);

//   if (verbs.length > 1) {
//     return verbs.map((verb) => `${actorText} ${verb}`);
//   } else {
//     let verb = verbs[0];
//     return `${actorText} ${verb}`;
//   }
// }

// export function isEntityPlural(entityText: string[][]): boolean {
//   return (
//     entityText.length > 1 || entityText.filter((i) => i.length > 2).length > 0
//   );
// }

// export function joinEntitySummaries(entityText: string[][]): string {
//   return entityText.map((item) => item[0]).join(', ');
// }

export function renderEntityText(
  set: Partial<EntityProps> = {},
  { md }: { md: boolean } = { md: false }
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
    (md && url ? "[" : "") + // open link if md and url
    titleString + // title, or desc, or id
    (md && url ? "]" : "") + // close link if md and url
      (md && url ? `(${url})` : "") // url if md and url
}

export const renderSubject = (
  subjectProps: EventPropSet['subject'],
  { md }: { md: boolean } = { md: false }
): RenderedSubjectAndContent => [
  renderEntityText(subjectProps, { md }),
  subjectProps.content,
];

export function getRenderedEventPropSet(
  eventProps: EventPropSet,
  {
    md = false,
    dateTimeFormatOptions = DateTime.DATE_FULL,
  }: Partial<NaiveConfig> = {
    md: false,
    dateTimeFormatOptions: DateTime.DATE_FULL,
  }
): RenderedEventPropSet {
  let date = renderDate(
    eventProps.date,
    dateTimeFormatOptions ? dateTimeFormatOptions : DateTime.DATE_FULL
  ); // make the format a config option
  let actor = renderActorText(eventProps.actor, { md: md as boolean });
  let verb = renderVerbText(eventProps.verb);
  let subject = renderSubject(eventProps.subject, { md: md as boolean });
  let target = eventProps.target
    ? renderEntityText(eventProps.target, { md: md as boolean })
    : undefined;
  let parent = eventProps.parent
    ? renderEntityText(eventProps.parent, { md: md as boolean })
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
  { md = false }: Partial<NaiveConfig> = {
    md: false,
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
              ? `${date} - [${title}](${url}): ${content}`
              : `${date} - ${title}: ${content} (${url})`
            : url && !content           // date, title, url
              ? md
                ? `${date}: [${title}](${url})`
                : `${date}: ${title} (${url})`
              : content && !url
                ? `${date} - ${title}: ${content}`  // date, title, content
                : `${date}: ${title}`               // date, title  
          : url && content  // date, url, content
            ? md
              ? `[${date}](${url}): ${content}`
              : `${date}: ${content} (${url})`
            : content && !url //date, content
              ? `${date}: ${content}`
              : url && !content 
                ? md            // date, url
                  ? `[${date}](${url})`
                  : `${date} (${url})`
                : `${date}`     // date
          
  // if (title && url && content) {
  //   return md ? `${date} - [${title}](${url}): ${content}` : `${date} - ${title}: ${content} (${url})`
  // } else if ()

  // let intro = `${title ? date + ' - ' : ''}`

  // let output = `${title ? date + ' - ' : ''}${md && url ? '[' : ''}${
  //   title ? title : date
  // }${md && url ? '](' + url + '): ' : ': '}${content}${
  //   url && !md ? ' (' + url + ')' : ''
  // }`;

  // return output;
}

export function renderContent(
  content: string | number,
  url: string | null,
  title: string | number | null,
  { md = false }: Partial<NaiveConfig> = {
    md: false,
  }
): string {
  let output = `${md && url ? '[' : ''}${title ? title : md ? 'item' : ''}${
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
  }: Partial<NaiveConfig> = {
    md: false,
    dateTimeFormatOptions: DateTime.DATE_FULL,
    dateSummaries: false,
    dateContent: false,
  }
): RenderedEventsTextSet {
  let output: Partial<RenderedEventsTextSet> = [[]];

  let renderedSets = eventPropSets.map((eps) => {
    return getRenderedEventPropSet(eps, {
      md,
      dateTimeFormatOptions,
    });
  });

  renderedSets.forEach((reps, i) => {
    let {
      subject: { url, title },
      result,
    } = eventPropSets[i];

    output[0] && output[0].push(reps.date);

    if (i === 0) {
      const summaryString = `${dateSummaries ? reps.date + ': ' : ''}${
        reps.actor
      } ${reps.verb}${
        eventPropSets.length > 1 ? ` ${eventPropSets.length} ` : ' '
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
      }`;

      output[1] = summaryString;
    }

    // prettier-ignore
    if (reps.content || eventPropSets.length > 1) { 
      // if content exists, or there are multiple prop sets
      dateContent // should content lines be dated?
        ? output.push(              // if so, use renderDatedContent
            renderDatedContent(
              reps.date,
              reps.content || null,
              url || null,
              title || null,
              { md }
            )
          ) 
        : output.push(    // if we're not dating the content lines:
            eventPropSets.length > 1  // if there are multiple subjects
              ? renderContent(    // render or generate content lines
                  reps.content ? reps.content : title ? title : "",
                  url ? url : null,
                  title ? title : null,
                  { md }
                ) // if there is just one content prop, return it directly
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

export interface RenderedEventCollectionSet {
  startDate: string;
  endDate: string;
  renderedEventCollections: RenderedEventCollection[];
}
export type RenderedEventCollection = string;

export function renderEvents(
  events: GHEvent[],
  {
    sortBy = defaultNaiveConfig.sortBy,
    groupByDays = defaultNaiveConfig.groupByDays,
    dateSummaries = defaultNaiveConfig.dateSummaries,
    dateContent = defaultNaiveConfig.dateContent,
    collapse = defaultNaiveConfig.collapse,
    md = defaultNaiveConfig.md,
    startDate = defaultNaiveConfig.startDate,
    omitContent = defaultNaiveConfig.omitContent,
    indentContent = defaultNaiveConfig.indentContent,
    dateTimeFormatOptions = DateTime.DATE_FULL,
    newLinesBetween = true,
  }: Partial<NaiveConfig> = {
    sortBy: 'date',
    groupByDays: 7,
    dateSummaries: false,
    dateContent: true,
    collapse: true,
    md: true,
    startDate: new Date('1/1/1970'),
    omitContent: false,
    indentContent: true,
    dateTimeFormatOptions: DateTime.DATE_FULL,
    newLinesBetween: true,
  }
): RenderedEventCollectionSet[] {
  let eventPropSetGroupCollection: SortedDatedEventCollections = getSortedDatedEventCollections(
    events,
    { sortBy, collapse, groupByDays, startDate }
  ) as SortedDatedEventCollections;

  return eventPropSetGroupCollection.map((sdec) => {
    let { startDate, endDate, eventPropSetGroups } = sdec;

    return {
      startDate: startDate ? renderDate(startDate, dateTimeFormatOptions) : '',
      // startDate:
      //   typeof startDate === "string"
      //     ? startDate
      //     : startDate
      //     ? renderDate(startDate, dateTimeFormatOptions)
      //     : "",
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
}

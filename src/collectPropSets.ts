import { GHEvent } from './eventTypes';
import { getEventsPropSets } from './getProps';
import { NaiveConfig } from './types';
import {
  EventPropSet,
  DatedEventCollection,
  DatedEventCollections,
  SortedDatedEventCollections,
} from './types';
const _ = require('lodash');

export function groupEventPropSets(evps: EventPropSet[]): EventPropSet[][] {
  return evps.reduce(
    (acc, set, index) => {
      let { done } = acc;
      if (done.indexOf(index) === -1) {
        let sameSets = evps.filter((innerSet, innerIndex) => {
          if (done.indexOf(innerIndex) === -1) {
            if (
              _.isEqual(set.type, innerSet.type) &&
              _.isEqual(set.verb, innerSet.verb) &&
              _.isEqual(set.actionType, innerSet.actionType) &&
              _.isEqual(set.actor, innerSet.actor) &&
              _.isEqual(set.target, innerSet.target) &&
              _.isEqual(set.parent, innerSet.parent)
            ) {
              done.push(innerIndex);
              return true;
            }
          } else {
            return false;
          }
        });
        return { ...acc, sets: [...acc.sets, sameSets] };
      } else {
        return acc;
      }
    },
    { done: [] as number[], sets: [] as EventPropSet[][] }
  ).sets;
}

function dayNameToNumber(dayName: string): number {
  dayName = dayName.toLowerCase();

  const dayNames = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  return dayNames[dayName] || 0;
}

function initializeStartWeekday(startWeekday: number | string): number {
  if (typeof startWeekday == 'string') {
    // convert string
    return dayNameToNumber(startWeekday);
  } else if (startWeekday !== -1) {
    //
    // handle numbers over 7 and non-integers
    return Math.floor(startWeekday % 7);
  } else {
    return -1;
  }
}

function initializeStartDate(startWeekday: number, firstEventDate: Date): Date {
  // if start weekday is a thing, we should move the start date to match
  // the first such weekday prior to the first event in the date range.
  if (startWeekday > -1) {
    let initialDay = firstEventDate.getDay();
    let daysToShift = initialDay - startWeekday; // if first event is on monday (1), start day is 5, daysToShift = -4
    return new Date(
      new Date(firstEventDate.getTime() - Math.abs(daysToShift) * 86400000)
        .toJSON()
        .split('T')[0]
    );
  } else {
    // if start weekday is not a thing, then we need to start our first collection at the time of the first evp.
    return firstEventDate;
  }
}

function initializeNextCollection(
  currentCollection: DatedEventCollection,
  nextEvent: EventPropSet,
  lengthMs: number
): DatedEventCollection {
  const { endDate: lastEndDate } = currentCollection;

  const { date: nextEventDate } = nextEvent;

  let nextStartDate: Date = new Date(lastEndDate.getTime() + 1);
  let nextEndDate: Date = new Date(lastEndDate.getTime() + lengthMs);

  function checkRange(): boolean {
    return !!(
      nextEventDate.getTime() >= nextStartDate.getTime() &&
      nextEventDate.getTime() <= nextEndDate.getTime()
    );
  }

  let keepLooping = true;

  while (
    checkRange() === false &&
    keepLooping &&
    !(nextStartDate.getTime() > new Date().getTime())
  ) {
    nextStartDate = new Date(nextEndDate.getTime() + 1);
    nextEndDate = new Date(nextEndDate.getTime() + lengthMs);
    if (checkRange()) {
      keepLooping = false;
    }
  }

  return {
    startDate: nextStartDate,
    endDate: nextEndDate,
    eventPropSets: [nextEvent],
  };
}

export function collectEventsByDate(
  evps: EventPropSet[], // array of event props
  startDate: Date, // earliest date to include
  days: number = 7, // number of days' worth of events to collect
  startWeekday: number | string = 0
  // ^ weekday to begin collecting from
  // (default sunday, -1 to start from earliest event date)
): DatedEventCollections {
  // collections of events grouped by date

  let collectionLengthMs = days * 86400000; // ms in a day

  startWeekday = initializeStartWeekday(startWeekday);
  // console.log(startWeekday)
  const evpsByDate = [...evps]
    .filter((evp) => evp.date.getTime() >= startDate.getTime())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const collectionStartDate = initializeStartDate(
    startWeekday,
    evpsByDate[0].date
  );

  const output = evpsByDate
    .reduce(
      // run through evps and sort into collections
      (acc, evp) => {
        let { collections } = acc;
        // console.dir(collections)
        let openCollection = collections[
          collections.length - 1
        ] as DatedEventCollection; // work on the current collection (last in string)

        // if the event date is within {days} days after the current collection start date
        // push it into the open collection object.
        if (
          openCollection &&
          openCollection.startDate &&
          evp.date.getTime() <= openCollection.endDate.getTime()
        ) {
          // console.log(
          //   `${evp.date.getTime()} is between ${openCollection.startDate.getTime()} and ${openCollection.endDate.getTime()}`
          // )
          if (openCollection && openCollection.eventPropSets) {
            openCollection.eventPropSets.push(evp);
          }
        } else {
          // or move start date of current (empty) collection until it includes this event

          let newCollection = initializeNextCollection(
            openCollection,
            evp,
            collectionLengthMs
          );
          // if the current collection contains events, create the next one
          newCollection && collections.push(newCollection);
        }

        // start a new collection
        //}
        return acc;
      },
      {
        collections: [
          {
            startDate: collectionStartDate as Date,
            endDate: new Date(
              collectionStartDate.getTime() + collectionLengthMs
            ),
            eventPropSets: [] as EventPropSet[],
          },
        ] as DatedEventCollection[],
      }
    )
    .collections.filter((collection) => collection.eventPropSets.length > 0);

  // i
  if (output.length > 0 && output[output.length - 1].endDate === null) {
    let lastGroup = output[output.length - 1] as DatedEventCollection;
    if (
      lastGroup.startDate &&
      lastGroup.startDate.getTime() + collectionLengthMs < new Date().getTime()
    ) {
      lastGroup.endDate = new Date(
        lastGroup.startDate.getTime() + collectionLengthMs
      );
    } else {
      output[output.length - 1].endDate = new Date();
    }
  }

  return output;
}

export function sortEventPropSetGroups(
  epsgs: EventPropSet[][],
  sortBy: string,
  reverseSortEvents: boolean
): EventPropSet[][] {
  let sortPaths: [string, string?] | undefined = undefined;
  let output: EventPropSet[][] = [];

  switch (sortBy) {
    case 'type':
      sortPaths = ['type'];
      break;
    case 'actor':
      sortPaths = ['actor.id', 'actor.title'];
      break;
    case 'parent':
      sortPaths = ['parent.title', 'parent.id'];
      break;
    case 'target':
      sortPaths = ['target.title', 'target.id'];
      break;
    default:
      break;
  }

  if (sortPaths) {
    return [...epsgs].sort((epsgA, epsgB) => {
      // console.log(sortPath);
      let a: string | number | undefined = undefined;
      let b: string | number | undefined = undefined;

      if (sortPaths) {
        let sp0ResultA = sortPaths[0]
          ? _.get(epsgA[0], sortPaths![0])
          : undefined;
        let sp1ResultA = sortPaths[1]
          ? _.get(epsgA[0], sortPaths![1])
          : undefined;

        a = sp0ResultA || sp1ResultA;

        let sp0ResultB = sortPaths[0]
          ? _.get(epsgB[0], sortPaths![0])
          : undefined;
        let sp1ResultB = sortPaths[1]
          ? _.get(epsgB[0], sortPaths![1])
          : undefined;

        b = sp0ResultB || sp1ResultB;
      }
      //   _.get(epsgA[0], sortPaths![0]) || sortPaths![1]
      //     ? _.get(epsgA[0], sortPaths![1])
      //     : undefined;
      // let b =
      //   _.get(epsgB[0], sortPaths![0]) || sortPaths![1]
      //     ? _.get(epsgB[0], sortPaths![1])
      //     : undefined;

      if ((a && !b) || (b && !a)) {
        // console.log(`
        //   sortBy: ${sortBy}
        //   reverseSortEvents: ${reverseSortEvents}
        //   sortPaths: ${sortPaths}
        //   epsgA: ${JSON.stringify(epsgA)}
        //   epsgA shortpath1 result: ${_.get(epsgA[0], sortPaths![0])}
        //   epsgA shortpath2 result: ${_.get(epsgA[0], sortPaths![1])}
        //   a: ${a}
        //   epsgB: ${JSON.stringify(epsgB)}
        //   epsgB shortpath1 result: ${_.get(epsgB[0], sortPaths![0])}
        //   epsgB shortpath2 result: ${_.get(epsgB[0], sortPaths![1])}
        //   b: ${b}
        //   result: 1 is undefined, so it's 1
        // `);
        return 1;
      } else if (!b && !a) {
        //   console.log(`
        //   sortBy: ${sortBy}
        //   reverseSortEvents: ${reverseSortEvents}
        //   sortPaths: ${sortPaths}
        //   epsgA: ${JSON.stringify(epsgA)}
        //   epsgA shortpath1 result: ${_.get(epsgA[0], sortPaths![0])}
        //   epsgA shortpath2 result: ${_.get(epsgA[0], sortPaths![1])}
        //   a: ${a}
        //   epsgB: ${JSON.stringify(epsgB)}
        //   epsgB shortpath1 result: ${_.get(epsgB[0], sortPaths![0])}
        //   epsgB shortpath2 result: ${_.get(epsgB[0], sortPaths![1])}
        //   b: ${b}
        //   result: both undefined, so it's 0
        // `);
        return 0;
      } else {
        // sortBy === 'target' && console.log(a, b);
        let result = !reverseSortEvents
          ? a!.toString().localeCompare(b!.toString())
          : b!.toString().localeCompare(a!.toString());
        // console.log(`
        //   sortBy: ${sortBy}
        //   reverseSortEvents: ${reverseSortEvents}
        //   sortPaths: ${sortPaths}
        //   epsgA: ${JSON.stringify(epsgA)}
        //   epsgA shortpath1 result: ${_.get(epsgA[0], sortPaths![0])}
        //   epsgA shortpath2 result: ${_.get(epsgA[0], sortPaths![1])}
        //   a: ${a}
        //   epsgB: ${JSON.stringify(epsgB)}
        //   epsgB shortpath1 result: ${_.get(epsgB[0], sortPaths![0])}
        //   epsgB shortpath2 result: ${_.get(epsgB[0], sortPaths![1])}
        //   b: ${b}
        //   result: ${result}
        // `);
        return result;
      }
    });
  } else {
    return output;
  }
}

export function getSortedDatedEventCollections(
  events: GHEvent[],
  {
    sortBy,
    collapse,
    groupByDays,
    groupStartDay,
    startDate,
    reverseSortEvents,
  }: NaiveConfig
): SortedDatedEventCollections {
  let output: SortedDatedEventCollections | DatedEventCollections = [];

  let propSets = getEventsPropSets(events);

  if (groupByDays) {
    output = collectEventsByDate(
      propSets,
      startDate || new Date('1/1/1970'),
      groupByDays,
      groupStartDay
    );
  } else {
    output = collectEventsByDate(
      propSets,
      new Date('1/1/1970'),
      1000000000,
      groupStartDay
    );
  }

  if (sortBy === 'date' && reverseSortEvents) {
    output = output; // everything is already sorted this way after collectEventsByDate
  } else {
    // no matter what we're sorting with, if we're not sorting with reverse date, we should
    // start with everything sorted from most recent to least.
    output = output
      .sort(
        (decA, decB) =>
          new Date(decB.startDate).getTime() -
          new Date(decA.startDate).getTime()
      )
      .map((dec) => ({
        ...dec,
        eventPropSets: [...dec.eventPropSets].sort(
          (epsA, epsB) => epsB.date.getTime() - epsA.date.getTime()
        ),
      }));
  }

  if (collapse) {
    output = output.map((eventCollection) => ({
      ...eventCollection,
      eventPropSetGroups: groupEventPropSets(eventCollection.eventPropSets),
    })) as SortedDatedEventCollections;
  } else {
    output = output.map((eventCollection) => ({
      ...eventCollection,
      eventPropSetGroups: eventCollection.eventPropSets.map((epset) => [epset]),
    })) as SortedDatedEventCollections;
  }

  // sort by non-date fields
  if (sortBy && sortBy !== 'date') {
    // console.dir('sorting by non-date field ' + sortBy);

    output = output.map((sdec) => {
      // console.log(sdec.eventPropSetGroups);
      let sortedSdec = {
        // SortedDatedEventCollection
        ...sdec,
        eventPropSetGroups: sortEventPropSetGroups(
          sdec.eventPropSetGroups,
          sortBy,
          reverseSortEvents!
        ),
      };

      return sortedSdec;
    });
  }

  // console.log(output);

  // if (sortBy && sortBy !== 'date') {
  //   // should already be sorted by date
  //   output = output.map((refinedEventCollection) => ({
  //     ...refinedEventCollection,
  //     eventPropSetGroups: refinedEventCollection.eventPropSetGroups.sort(
  //       (epsgroupA, epsgroupB) => epsgroupA[0][sortBy] - epsgroupB[0][sortBy]
  //     ),
  //   }));
  // }

  return output as SortedDatedEventCollections;
}

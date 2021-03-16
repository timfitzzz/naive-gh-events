/* eslint-disable no-console */

import testData from './testData';
import EventTypes, { GHEvent } from '../src/eventTypes';
import {
  defaultNaiveConfig,
  TestEvent,
  SortedDatedEventCollections,
} from '../src/types';
import { getEventsPropSets } from '../src/getProps';
import {
  collectEventsByDate,
  getSortedDatedEventCollections,
  groupEventPropSets,
} from '../src/collectPropSets';
import _ from 'lodash';

let testEventsSets: TestEvent[] = [];

beforeAll(() => {
  Object.getOwnPropertyNames(testData).forEach((testName: string) => {
    let actionTypes = EventTypes[testName].config.actionTypes;

    if (!actionTypes || actionTypes.length < 1) {
      actionTypes = ['none'];
    }
    actionTypes.forEach((actionType) => {
      if (testData[testName].testEvents[actionType]) {
        testEventsSets = testEventsSets.concat(
          testData[testName].testEvents[actionType]
        );
      }
    });
  });
  return testEventsSets;
});

describe('groupEventPropSets', () => {
  let pushTestEvents = testData?.PushEvent?.testEvents?.multiple[0];

  let events: TestEvent['events'];
  let propSets: TestEvent['propSets'];

  if (pushTestEvents) {
    events = pushTestEvents.events;
    propSets = pushTestEvents.propSets;
  }

  it('should group propsets that share everything but the same subject', () => {
    let eventPropSets = getEventsPropSets(events);
    let groupedEventPropSets = groupEventPropSets(eventPropSets);

    expect(groupedEventPropSets[0][0]).toEqual(propSets[0]);
    expect(groupedEventPropSets[0][1]).toEqual(propSets[2]);
    expect(groupedEventPropSets[1][0]).toEqual(propSets[1]);
  });
});

describe('collectEventsByDate', () => {
  let eventPropSets: TestEvent['propSets'] = [];
  beforeAll(() => {
    eventPropSets = testEventsSets.reduce(
      (acc, tes) => acc.concat(tes.propSets),
      [] as TestEvent['propSets']
    );

    // eventPropSets.forEach((eps, i) => {
    //   console.dir(i, eps.date)
    // })

    return eventPropSets;
  });

  it('should split the test events into the expected groups with default 7 day range', () => {
    let weekLength = 7;
    let eventsByDateRange = collectEventsByDate(
      eventPropSets,
      new Date('1/1/1970'),
      weekLength
    );

    // earliest date: 2020-12-04T22:39:36.000Z
    // expected result:
    //  11-29 - 12-06       1  - 1
    //  __12-07 - 12-14__
    //  12-15 - 12-22       2  - 1
    //  12-22 - 12-29       3  - 3
    //  __12-30 - 1-6__
    //  __1-7 - 1-14__
    //  __1-14 - 1-21__
    //  1-21 - 1-28         4 - 1
    //  __1-29 - 2-05__
    //  2-6 - 2-13          5 - 7
    //  2-14 - 2-21         6 - 3
    //  __2-18 - __2-25

    eventsByDateRange.forEach((ebdr, i) => {
      expect(ebdr.startDate).toBeDefined();
      if (i === eventsByDateRange.length - 1) {
        if (
          new Date().getTime() <
          ebdr.startDate.getTime() + 86400000 * weekLength
        ) {
          expect(ebdr.endDate).toBeNull();
        } else {
          expect(ebdr.endDate).toBeTruthy();
        }
      }
    });
    expect(eventsByDateRange.length).toBe(6);
  });

  it('should split the test events into the expected groups with 3 day range', () => {
    let weekLength = 3;
    let eventsByDateRange = collectEventsByDate(
      eventPropSets,
      new Date('1/1/1970'),
      weekLength
    );

    // earliest date: 2020-12-04T22:39:36.000Z
    // expected result:
    //  11-29 - 12-06       1
    //  __12-07 - 12-10__
    //  __12-10 - 12-13__
    //  12-13 - 12-15       2
    //  __12-15 - 12-18__
    //  __12-18 - 12-21__
    //  __12-18 - 12-24__
    //  12-27 - 12-29       3
    //  __12-29 - 1-1__
    //  ..
    //  1-25 - 1-28         4
    //  ..
    //  2-08 - 2-11         5
    //  2-11 - 2-13         6
    //  2-13 - 2-16         7
    //  2-16 - 2-19         8

    eventsByDateRange.forEach((ebdr, i) => {
      expect(ebdr.startDate).toBeDefined();
      if (i === eventsByDateRange.length - 1) {
        if (
          new Date().getTime() <
          ebdr.startDate.getTime() + 86400000 * weekLength
        ) {
          expect(ebdr.endDate).toBeNull();
        } else {
          expect(ebdr.endDate).toBeTruthy();
        }
      }
    });
    expect(eventsByDateRange.length).toBe(8);
  });
});

describe('getSortedDatedEventCollections', () => {
  it('should return expected collections with default options', () => {
    let sdecs = getSortedDatedEventCollections(
      testEventsSets.reduce((acc, tes) => {
        return acc.concat(tes.events);
      }, [] as GHEvent[]),
      _.omit(defaultNaiveConfig, [
        'md',
        'omitContent',
        'indentContent',
        'dateTimeFormatOptions',
      ])
    ) as SortedDatedEventCollections;

    sdecs.forEach((sdec) => {
      expect(
        [...sdec.eventPropSetGroups].sort(
          (a, b) => a[0].date.getTime() - b[0].date.getTime()
        )
      ).toStrictEqual(sdec.eventPropSetGroups);
    });

    expect(sdecs.length).toBe(6);
  });

  it('should return expected collections with 3-day date range', () => {
    let config = Object.assign(defaultNaiveConfig, { groupByDays: 3 });

    // console.dir(config)
    let sdecs = getSortedDatedEventCollections(
      testEventsSets.reduce((acc, tes) => {
        return acc.concat(tes.events);
      }, [] as GHEvent[]),
      _.omit(config, [
        'md',
        'omitContent',
        'indentContent',
        'dateTimeFormatOptions',
      ])
    );

    // earliest date: 2020-12-04T22:39:36.000Z
    // expected result:
    //  12-04 - 12-07
    //  __12-07 - 12-10__
    //  __12-10 - 12-13__
    //  12-13 - 12-15
    //  __12-15 - 12-18__
    //  __12-18 - 12-21__
    //  __12-18 - 12-24__
    //  12-27 - 12-29
    //
    expect(sdecs.length).toBe(8);
  });
});

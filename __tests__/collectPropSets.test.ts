/* eslint-disable no-console */
require('leaked-handles');
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
    expect(eventsByDateRange.length).toBe(7);
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
    expect(eventsByDateRange.length).toBe(9);
  });
});

describe('getSortedDatedEventCollections', () => {
  const defaultSdecsConfig = _.omit(defaultNaiveConfig, [
    'md',
    'omitContent',
    'indentContent',
    'dateTimeFormatOptions',
  ]);

  it('should return expected collections with default optionssss', () => {
    let sdecs = getSortedDatedEventCollections(
      testEventsSets.reduce((acc, tes) => {
        return acc.concat(tes.events);
      }, [] as GHEvent[]),
      _.omit(defaultSdecsConfig, [
        'md',
        'omitContent',
        'indentContent',
        'dateTimeFormatOptions',
      ])
    ) as SortedDatedEventCollections;

    sdecs.forEach((sdec) => {
      let expected = [...sdec.eventPropSetGroups].sort(
        (a, b) => b[0].date.getTime() - a[0].date.getTime()
      );
      expect(expected).toStrictEqual(sdec.eventPropSetGroups);
    });

    expect(sdecs.length).toBe(7);
  });

  it('should return expected collections with 3-day date range', () => {
    let config = Object.assign(defaultSdecsConfig, { groupByDays: 3 });

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
    expect(sdecs.length).toBe(9);
  });
});

describe('getSortedDatedEventCollections sortBy and reverseSort functionality', () => {
  const defaultSdecsConfig = _.omit(defaultNaiveConfig, [
    'md',
    'omitContent',
    'indentContent',
    'dateTimeFormatOptions',
  ]);

  describe('sortBy: date, collapse: false', () => {
    it('should sort events from now -> past', () => {
      let sortTestEvents = [
        testEventsSets[0].events[0],
        testEventsSets[9].events[0],
        testEventsSets[11].events[0],
      ];

      let sdecs = getSortedDatedEventCollections(sortTestEvents, {
        ...defaultSdecsConfig,
        collapse: false,
        reverseSortEvents: false,
      });

      expect(sdecs[0].startDate.getTime()).toBeGreaterThanOrEqual(
        sdecs[1].startDate.getTime()
      );
      expect(sdecs[1].startDate.getTime()).toBeGreaterThanOrEqual(
        sdecs[2].startDate.getTime()
      );

      sdecs.forEach((sdec) => {
        sdec.eventPropSetGroups.forEach((epsg) => {
          epsg.forEach((eps, i) => {
            if (i < epsg.length - 1) {
              expect(eps.date.getTime()).toBeGreaterThanOrEqual(
                epsg[i + 1].date.getTime()
              );
            }
          });
        });
      });
    });
  });

  describe('sortBy: date, collapse: false, reverseSort: true', () => {
    let config = Object.assign(defaultSdecsConfig, {
      collapse: false,
      reverseSortEvents: true,
    });

    it('should sort events from past -> now', () => {
      let sortTestEvents = [
        testEventsSets[0].events[0],
        testEventsSets[9].events[0],
        testEventsSets[11].events[0],
      ];

      let sdecs = getSortedDatedEventCollections(sortTestEvents, {
        ...defaultSdecsConfig,
        collapse: false,
        reverseSortEvents: true,
      });

      // expect(sdecs[2].startDate.getTime()).toBeGreaterThanOrEqual(
      //   sdecs[1].startDate.getTime()
      // );
      // expect(sdecs[1].startDate.getTime()).toBeGreaterThanOrEqual(
      //   sdecs[0].startDate.getTime()
      // );

      sdecs.forEach((sdec) => {
        sdec.eventPropSetGroups.forEach((epsg) => {
          epsg.forEach((eps, i) => {
            if (i < epsg.length - 1) {
              expect(epsg[i + 1].date.getTime()).toBeGreaterThanOrEqual(
                eps.date.getTime()
              );
            }
          });
        });
      });
    });
  });

  describe('sortBy: type, collapse: false, reverseSortEvents: true', () => {
    let config = Object.assign(defaultSdecsConfig, {
      collapse: false,
      reverseSortEvents: true,
    });

    it('should sort events from now -> past', () => {
      let sortTestEvents = [
        testEventsSets[0].events[0],
        testEventsSets[9].events[0],
        testEventsSets[11].events[0],
      ];

      let sdecs = getSortedDatedEventCollections(sortTestEvents, {
        ...defaultSdecsConfig,
        sortBy: 'type',
        collapse: false,
        reverseSortEvents: true,
        groupByDays: 365,
      });

      // expect(sdecs[2].startDate.getTime()).toBeGreaterThanOrEqual(
      //   sdecs[1].startDate.getTime()
      // );
      // expect(sdecs[1].startDate.getTime()).toBeGreaterThanOrEqual(
      //   sdecs[0].startDate.getTime()
      // );

      // sdecs.forEach((sdec) => {
      //   sdec.eventPropSetGroups.forEach((epsg, i) => {

      //     if (i < sdec.eventPropSetGroups.length - 1) {
      //       expect(epsg)
      //     }
      //     epsg.forEach((eps, i) => {
      //       if (i < epsg.length - 1) {
      //         expect(eps.type.localeCompare(epsg[i + 1].type)).toBe(-1)
      //       }
      //     });
      //   });
      // });

      sdecs[0].eventPropSetGroups.forEach((epsg, i, epsgs) => {
        console.dir(epsg[0]);
        if (i < epsgs.length - 1) {
          console.dir(epsg[0].type, epsgs[i + 1][0].type);
          expect(epsg[0].type.localeCompare(epsgs[i + 1][0].type)).toBe(1);
        }
      });
    });
  });
});

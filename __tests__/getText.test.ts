import EventTypes, { GHEvent } from '../src/eventTypes';
import testData from './testData';
import {
  getRenderedEventPropSet,
  renderDatedContent,
  renderEntityText,
  renderEventPropSetGroup,
  renderEvents,
  renderSubject,
} from '../src/getText';
import { RenderedEventsTextSet, TestEvent } from '../src/types';
import { getSortedDatedEventCollections } from '../src/collectPropSets';
import allEventsOutput from './testData/allEventsOutput';

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

Object.getOwnPropertyNames(testData).forEach((testName: string) => {
  let actionTypes = EventTypes[testName].config.actionTypes;

  if (!actionTypes || actionTypes.length < 1) {
    actionTypes = ['none'];
  }

  actionTypes.forEach((actionType) => {
    let testEvents: TestEvent[] = testData[testName].testEvents[actionType];

    describe(`testData for event type ${testName}`, () => {
      it.skip(`it should exist for action type ${actionType}`, () => {
        expect(testEvents).toBeDefined();
      });
    });

    if (testEvents) {
      testEvents.forEach((testEvent) => {
        describe('renderEntityText', () => {
          testEvent.propSets.forEach((propSet, propSetIndex) => {
            if (propSet.target) {
              it('should return the correct plaintext string for the target', () => {
                let target = renderEntityText(propSet.target);

                expect(target).toBe(
                  testEvent.renderedPropSets[propSetIndex].plain.target
                );
              });

              it('should return the correct markdown string for the target', () => {
                let target = renderEntityText(propSet.target, { md: true });

                expect(target).toBe(
                  testEvent.renderedPropSets[propSetIndex].md.target
                );
              });
            }

            if (propSet.parent) {
              it('should return the correct plaintext string for the parent', () => {
                let parent = renderEntityText(propSet.parent);

                expect(parent).toBe(
                  testEvent.renderedPropSets[propSetIndex].plain.parent
                );
              });

              it('should return the correct markdown string for the parent', () => {
                let parent = renderEntityText(propSet.parent, { md: true });

                expect(parent).toBe(
                  testEvent.renderedPropSets[propSetIndex].md.parent
                );
              });
            }
          });
        });

        describe('renderSubject', () => {
          testEvent.propSets.forEach((propSet, propSetIndex) => {
            const renderedPropSet = testEvent.renderedPropSets[propSetIndex];
            const plainSubject = renderSubject(propSet.subject);
            const mdSubject = renderSubject(propSet.subject, { md: true });

            it('should return the correct plaintext string for the subject', () => {
              expect(plainSubject[0]).toBe(renderedPropSet.plain.subject);
            });

            it('should return the correct markdown string for the subject', () => {
              expect(mdSubject[0]).toBe(renderedPropSet.md.subject);
            });

            it('should return the same raw content string regardless of format', () => {
              expect(plainSubject[1]).toBe(mdSubject[1]);
            });

            it('should return the correct content values', () => {
              expect(plainSubject[1]).toBe(renderedPropSet.plain.content);
              expect(mdSubject[1]).toBe(renderedPropSet.md.content);
            });
          });
        });

        describe('getRenderedEventPropSet', () => {
          testEvent.propSets.forEach((propSet, propSetIndex) => {
            const renderedPropSet = testEvent.renderedPropSets[propSetIndex];

            const plainRPS = getRenderedEventPropSet(propSet);
            const mdRPS = getRenderedEventPropSet(propSet, { md: true });

            it('should return the correct plain renderedEventPropSet for the event', () => {
              expect(plainRPS).toStrictEqual(renderedPropSet.plain);
            });

            it('should return the correct md renderedEventPropSet for the event', () => {
              expect(mdRPS).toStrictEqual(renderedPropSet.md);
            });
          });
        });

        describe('renderEventPropSetGroup from testEventSet', () => {
          let events = testEvent.events;

          let sdecCollapsed = getSortedDatedEventCollections(events, {
            sortBy: 'date',
            collapse: true,
            groupByDays: 7,
            startDate: new Date('1/1/1970'),
          });

          expect(sdecCollapsed.length).toBe(1);
          // console.dir(sdecCollapsed)

          let plainCollapsedRenderedEventsTextSets: RenderedEventsTextSet[] = sdecCollapsed.reduce(
            (acc, sdecc) => {
              let renderedSDECS = sdecc.eventPropSetGroups.map((epsg) => {
                let output = renderEventPropSetGroup(epsg, {
                  md: false,
                  indentContent: true,
                });
                return output;
              });
              return acc.concat(renderedSDECS);
            },
            [] as RenderedEventsTextSet[]
          );

          expect(plainCollapsedRenderedEventsTextSets.length).toBe(
            sdecCollapsed.length
          );

          let mdCollapsedRenderedEventsTextSets: RenderedEventsTextSet[] = sdecCollapsed.reduce(
            (acc, sdecc) => {
              let renderedSDECS = sdecc.eventPropSetGroups.map((epsg) => {
                let output = renderEventPropSetGroup(epsg, {
                  md: true,
                  indentContent: true,
                });
                return output;
              });
              return acc.concat(renderedSDECS);
            },
            [] as RenderedEventsTextSet[]
          );

          expect(mdCollapsedRenderedEventsTextSets.length).toBe(
            sdecCollapsed.length
          );

          // let sdecSeparate = getSortedDatedEventCollections(events, {
          //   sortBy: "date",
          //   collapse: false,
          // })

          // let plainRenderedEventsTextSet = renderEventPropSetGroup(propSets)
          // let mdRenderedEventsTextSet = renderEventPropSetGroup(propSets, {
          //   md: true,
          // })

          it('should return the correct plain rendered events text sets for the prop sets of this single event', () => {
            plainCollapsedRenderedEventsTextSets.forEach((pcrets, i) => {
              // console.log(pcrets)
              expect(pcrets).toStrictEqual(
                testEvent.renderedEventsTextSets.collapsed[i].plain
              );
            });
          });

          it('should return the correct md rendered events text sets for the prop sets of this single event', () => {
            mdCollapsedRenderedEventsTextSets.forEach((pcrets, i) => {
              // console.log(pcrets)
              expect(pcrets).toStrictEqual(
                testEvent.renderedEventsTextSets.collapsed[i].md
              );
            });
          });
        });

        describe('renderEvents', () => {
          it('should accept unprocessed events and convert them to the correct array of plain collapsed rendered event collections', () => {
            let events = testEvent.events;

            let plainEvents = renderEvents(events, { md: false });
            let mdEvents = renderEvents(events, { md: true });

            expect(plainEvents.length).toBe(1);
            expect(mdEvents.length).toBe(1);

            // plainEvents.forEach((recs) => {
            //   console.dir(recs.renderedEventCollections)
            // })

            // mdEvents.forEach((recs) => {
            //   console.dir(recs.renderedEventCollections)
            // })
          });
        });
      });
    }
  });
});

describe('renderDatedContent', () => {
  it('should return expected plain text with only required args', () => {
    let output = renderDatedContent(
      'March 12, 2021',
      'content string',
      null,
      null,
      { md: false }
    );

    expect(output).toBe('March 12, 2021: content string');
  });

  it('should return expected md text with only required args', () => {
    let output = renderDatedContent(
      'March 12, 2021',
      'content string',
      null,
      null,
      { md: true }
    );

    expect(output).toBe('March 12, 2021: content string');
  });

  it('should return expected plain text with url but no title', () => {
    let output = renderDatedContent(
      'March 12, 2021',
      'content string',
      'https://github.com/timfitzzz',
      null,
      { md: false }
    );

    expect(output).toBe(
      'March 12, 2021: content string (https://github.com/timfitzzz)'
    );
  });

  it('should return expected md text with url but no title', () => {
    let output = renderDatedContent(
      'March 12, 2021',
      'content string',
      'https://github.com/timfitzzz',
      null,
      { md: true }
    );

    expect(output).toBe(
      '[March 12, 2021](https://github.com/timfitzzz): content string'
    );
  });

  it('should return expected plain text with url and title', () => {
    let output = renderDatedContent(
      'March 12, 2021',
      'content string',
      'https://github.com/timfitzzz',
      'Test Content',
      { md: false, indentContent: true }
    );

    expect(output).toBe(
      'March 12, 2021 - Test Content: content string (https://github.com/timfitzzz)'
    );
  });

  it('should return expected md text with url and title', () => {
    let output = renderDatedContent(
      'March 12, 2021',
      'content string',
      'https://github.com/timfitzzz',
      'Test Content',
      { md: true, indentContent: true }
    );

    expect(output).toBe(
      'March 12, 2021 - [Test Content](https://github.com/timfitzzz): content string'
    );
  });

  it('should return expected plain text with title but no url', () => {
    let output = renderDatedContent(
      'March 12, 2021',
      'content string',
      null,
      'Test Content',
      { md: false, indentContent: true }
    );

    expect(output).toBe('March 12, 2021 - Test Content: content string');
  });

  it('should return expected md text with title but no url', () => {
    let output = renderDatedContent(
      'March 12, 2021',
      'content string',
      null,
      'Test Content',
      { md: true, indentContent: true }
    );

    expect(output).toBe('March 12, 2021 - Test Content: content string');
  });
});

describe('renderEventPropSetGroup with dateContent set to "true"', () => {
  const testEvent = testData['GollumEvent'].testEvents.edited[0];

  const plainRenderedEventPropSetGroup = renderEventPropSetGroup(
    testEvent.propSets,
    { md: false, dateContent: true }
  );
  const mdRenderedEventPropSetGroup = renderEventPropSetGroup(
    testEvent.propSets,
    { md: true, dateContent: true }
  );

  it('should return the correct plain renderedEventPropSet for the event', () => {
    expect(plainRenderedEventPropSetGroup).toStrictEqual([
      ['February 19, 2021', 'February 19, 2021'],
      'kii-chan-reloaded edited 2 wiki pages in kii-chan-reloaded/GeneticChickengineering',
      'February 19, 2021: Home (https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home)',
      'February 19, 2021: Settings (https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)',
    ]);
  });

  it('should return the correct md renderedEventPropSet for the event', () => {
    expect(mdRenderedEventPropSetGroup).toStrictEqual([
      ['February 19, 2021', 'February 19, 2021'],
      '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) edited 2 wiki pages in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
      'February 19, 2021: [Home](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home)',
      'February 19, 2021: [Settings](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)',
    ]);
  });
});

describe('renderEvents for all event sets', () => {
  it('should accept unprocessed events and convert them to the correct array of plain collapsed rendered event collections', () => {
    const testEvents = testEventsSets.reduce((acc, tes) => {
      return acc.concat(tes.events);
    }, [] as GHEvent[]);

    let plainEvents = renderEvents(testEvents, {
      md: false,
      dateContent: false,
    });

    expect(plainEvents.length).toBe(6);

    // plainEvents.forEach((recs, i) => {
    //   fs.writeFileSync(
    //     "./io-collector/naive-gh-events-to-md/__tests__/outputs/plain" + i,
    //     JSON.stringify(recs.renderedEventCollections.join(""))
    //   )
    // })

    plainEvents.forEach((recs, i) => {
      // console.log(recs.renderedEventCollections.join(""))
      expect(recs.renderedEventCollections.join('')).toBe(
        allEventsOutput.default.plain[i]
      );
    });
  });

  it('should accept unprocessed events and convert them to the correct array of md collapsed rendered event collections', () => {
    const testEvents = testEventsSets.reduce((acc, tes) => {
      return acc.concat(tes.events);
    }, [] as GHEvent[]);

    let mdEvents = renderEvents(testEvents, { md: true, dateContent: false });

    expect(mdEvents.length).toBe(6);

    // mdEvents.forEach((recs, i) => {
    //   fs.writeFileSync(
    //     "./io-collector/naive-gh-events-to-md/__tests__/outputs/md" + i,
    //     JSON.stringify(recs.renderedEventCollections.join(""))
    //   )
    // })

    mdEvents.forEach((recs, i) => {
      // console.log(recs.renderedEventCollections.join(""))
      expect(recs.renderedEventCollections.join('')).toBe(
        allEventsOutput.default.md[i]
      );
    });
  });
});

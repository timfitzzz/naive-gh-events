import EventTypes, { GHEvent } from '../src/eventTypes';
import testData, { TestEvent } from './testData';
import {
  getRenderedEventPropSet,
  renderDatedContent,
  renderEntityText,
  renderEventPropSetGroup,
  renderEvents,
  renderSubject,
} from '../src/renderText';
import { RenderedEventsTextSet } from '../src/types';
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
                let target = renderEntityText(propSet.target, { md: false });

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
                let parent = renderEntityText(propSet.parent, { md: false });

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
            const plainSubject = renderSubject(propSet.subject, { md: false });
            const mdSubject = renderSubject(propSet.subject, { md: true });

            it('should return the correct plaintext string for the subject', () => {
              expect(plainSubject).toBe(renderedPropSet.plain.subject);
            });

            it('should return the correct markdown string for the subject', () => {
              expect(mdSubject).toBe(renderedPropSet.md.subject);
            });
          });
        });

        describe('getRenderedEventPropSet', () => {
          testEvent.propSets.forEach((propSet, propSetIndex) => {
            const renderedPropSet = testEvent.renderedPropSets[propSetIndex];

            const plainRPS = getRenderedEventPropSet(propSet, { md: false });
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
              expect(pcrets).toStrictEqual(
                testEvent.renderedEventsTextSets.collapsed[i].plain
              );
            });
          });

          it('should return the correct md rendered events text sets for the prop sets of this single event', () => {
            mdCollapsedRenderedEventsTextSets.forEach((pcrets, i) => {
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
      { md: false, italicizeLink: false }
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
      { md: true }
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
      { md: false }
    );

    expect(output).toBe('March 12, 2021 - Test Content: content string');
  });

  it('should return expected md text with title but no url', () => {
    let output = renderDatedContent(
      'March 12, 2021',
      'content string',
      null,
      'Test Content',
      { md: true }
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

    expect(plainEvents.length).toBe(7);

    plainEvents.forEach((recs, i) => {
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

    expect(mdEvents.length).toBe(7);

    mdEvents.forEach((recs, i) => {
      expect(recs.renderedEventCollections.join('')).toBe(
        allEventsOutput.default.md[i]
      );
    });
  });
});

describe('renderEvents for multiple commit push events', () => {
  let multiplePushEvent = {
    id: '15567205789',
    type: 'PushEvent',
    actor: {
      id: 67528999,
      login: 'theykay',
      display_login: 'theykay',
      gravatar_id: '',
      url: 'https://api.github.com/users/theykay',
      avatar_url: 'https://avatars.githubusercontent.com/u/67528999?',
    },
    repo: {
      id: 344985892,
      name: 'theykay/bubblegum',
      url: 'https://api.github.com/repos/theykay/bubblegum',
    },
    payload: {
      push_id: 6723541596,
      size: 2,
      distinct_size: 2,
      ref: 'refs/heads/main',
      head: '786c305bd40e2642d39c5828e41c9d080b5d2e85',
      before: '3725c1d3491095643705e08b1f709f13be701ea3',
      commits: [
        {
          sha: '1575f3330e3121267526d846492bf71f0ca00193',
          author: { email: 'murraykyleb@gmail.com', name: 'TheyKay' },
          message:
            'animated dropdown menu to work on focus for xs screens and hover for everything else',
          distinct: true,
          url:
            'https://api.github.com/repos/theykay/bubblegum/commits/1575f3330e3121267526d846492bf71f0ca00193',
        },
        {
          sha: '786c305bd40e2642d39c5828e41c9d080b5d2e85',
          author: { email: 'murraykyleb@gmail.com', name: 'TheyKay' },
          message: 'added react fortawesome',
          distinct: true,
          url:
            'https://api.github.com/repos/theykay/bubblegum/commits/786c305bd40e2642d39c5828e41c9d080b5d2e85',
        },
      ],
    },
    public: true,
    created_at: '2021-03-16T20:13:28Z',
  };

  it('should return the expected md text', () => {
    expect(
      renderEvents([multiplePushEvent], { md: true })[0]
        .renderedEventCollections
    ).toStrictEqual([
      `[theykay](https://github.com/theykay) pushed 2 commits to refs/heads/main in [theykay/bubblegum](https://github.com/theykay/bubblegum)  \r\n` +
        `* [1575f3330e3121267526d846492bf71f0ca00193](https://github.com/theykay/bubblegum/commits/1575f3330e3121267526d846492bf71f0ca00193): animated dropdown menu to work on focus for xs screens and hover for everything else  \r\n` +
        `* [786c305bd40e2642d39c5828e41c9d080b5d2e85](https://github.com/theykay/bubblegum/commits/786c305bd40e2642d39c5828e41c9d080b5d2e85): added react fortawesome  \r\n\r\n`,
    ]);
  });
});

describe('renderEvents for multiple pull request comment events', () => {
  let multiplePullRequestCommentEvents = [
    testData.PullRequestReviewCommentEvent.testEvents.created[0].events[0],
    testData.PullRequestReviewCommentEvent.testEvents.created[0].events[0],
  ];
  it('should return the expected md text', () => {
    expect(
      renderEvents(multiplePullRequestCommentEvents, { md: true })[0]
        .renderedEventCollections
    ).toStrictEqual([
      `[paq](https://github.com/paq) added 2 comments on pull request [avm2: Implement ByteArray](https://github.com/ruffle-rs/ruffle/pull/3213) in [ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle)  \r\n` +
        '* [575624667](https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667): It seems that `coerce_to_string` is necessary here as well.\r\n  \r\n  Test code\r\n  ```as\r\n  import flash.utils.ByteArray;\r\n  import flash.utils.Endian;\r\n  \r\n  class A {\r\n      public function A() {}\r\n      public function toString():String {\r\n          return "shift-jis";\r\n      }\r\n  }\r\n  \r\n  var test = new ByteArray();\r\n  test.writeMultiByte("???", new A());\r\n  test.position = 0;\r\n  trace(test.readMultiByte(2, "shift-jis"));\r\n  ```\r\n  \r\n  Flash player prints `???`.\r\n  Ruffle prints `???`.\r\n    \r\n' +
        '* [575624667](https://github.com/ruffle-rs/ruffle/pull/3213#discussion_r575624667): It seems that `coerce_to_string` is necessary here as well.\r\n  \r\n  Test code\r\n  ```as\r\n  import flash.utils.ByteArray;\r\n  import flash.utils.Endian;\r\n  \r\n  class A {\r\n      public function A() {}\r\n      public function toString():String {\r\n          return "shift-jis";\r\n      }\r\n  }\r\n  \r\n  var test = new ByteArray();\r\n  test.writeMultiByte("???", new A());\r\n  test.position = 0;\r\n  trace(test.readMultiByte(2, "shift-jis"));\r\n  ```\r\n  \r\n  Flash player prints `???`.\r\n  Ruffle prints `???`.\r\n    \r\n\r\n',
    ]);
  });
});

describe('renderEvents with bad input', () => {
  it('should return an empty array when there are no events provided', () => {
    expect(renderEvents([])).toStrictEqual([]);
  });
});

describe('renderEvents with private events marked', () => {
  let privateEvents = [testData.IssuesEvent.testEvents.closed[0].events[0]];
  let publicEvents = [
    { ...testData.IssuesEvent.testEvents.closed[0].events[0] },
  ].map((e) => {
    e.public = true;
    return e;
  });

  it('should return the proper renderedEventSets for a private event including the configured private event marker', () => {
    expect(
      renderEvents(privateEvents, { md: true, markPrivate: true })[0]
        .renderedEventCollections
    ).toStrictEqual([
      '[timfitzzz](https://github.com/timfitzzz) closed issue [set up test mongodb database](https://github.com/timfitzzz/stemmy/issues/13) in [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy) ???  \r\n\r\n',
    ]);
  });

  it('should return the proper renderedEventSets for a public event including the configured private event marker', () => {
    expect(
      renderEvents(publicEvents, { md: true, markPrivate: true })[0]
        .renderedEventCollections
    ).toStrictEqual([
      '[timfitzzz](https://github.com/timfitzzz) closed issue [set up test mongodb database](https://github.com/timfitzzz/stemmy/issues/13) in [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)  \r\n\r\n',
    ]);
  });
});

describe('renderEvents with private events marked with custom marker', () => {
  let privateEvents = [testData.IssuesEvent.testEvents.closed[0].events[0]];

  it('should return the proper renderedEventSets including the configured private event marker', () => {
    expect(
      renderEvents(privateEvents, {
        md: true,
        markPrivate: true,
        privateMarker: '(private)',
      })[0].renderedEventCollections
    ).toStrictEqual([
      '[timfitzzz](https://github.com/timfitzzz) closed issue [set up test mongodb database](https://github.com/timfitzzz/stemmy/issues/13) in [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy) (private)  \r\n\r\n',
    ]);
  });
});

describe('renderEvents with omit private links', () => {
  let privateEvents = [testData.IssuesEvent.testEvents.closed[0].events[0]];

  it('should return the proper renderedEventSets without private links', () => {
    expect(
      renderEvents(privateEvents, {
        md: true,
        omitPrivateLinks: true,
      })[0].renderedEventCollections
    ).toStrictEqual([
      `[timfitzzz](https://github.com/timfitzzz) closed issue set up test mongodb database in timfitzzz/stemmy  \r\n\r\n`,
    ]);
  });
});

describe('renderEvents with italicize private links', () => {
  let privateEvents = [testData.IssuesEvent.testEvents.closed[0].events[0]];

  it('should return the proper renderedEventSets with italicized links', () => {
    expect(
      renderEvents(privateEvents, {
        md: true,
        italicizePrivateLinks: true,
      })[0].renderedEventCollections
    ).toStrictEqual([
      `[timfitzzz](https://github.com/timfitzzz) closed issue [_set up test mongodb database_](https://github.com/timfitzzz/stemmy/issues/13) in [_timfitzzz/stemmy_](https://github.com/timfitzzz/stemmy)  \r\n\r\n`,
    ]);
  });
});

describe('renderEvents with omit and italicize private links', () => {
  let privateEvents = [testData.IssuesEvent.testEvents.closed[0].events[0]];

  it('should return the proper renderedEventSets with italicized links', () => {
    expect(
      renderEvents(privateEvents, {
        md: true,
        omitPrivateLinks: true,
        italicizePrivateLinks: true,
      })[0].renderedEventCollections
    ).toStrictEqual([
      `[timfitzzz](https://github.com/timfitzzz) closed issue _set up test mongodb database_ in _timfitzzz/stemmy_  \r\n\r\n`,
    ]);
  });
});

describe('renderEvents with omit and italicize private links plus display marker', () => {
  let privateEvents = [testData.IssuesEvent.testEvents.closed[0].events[0]];

  it('should return the proper renderedEventSets with italicized links', () => {
    expect(
      renderEvents(privateEvents, {
        md: true,
        omitPrivateLinks: true,
        markPrivate: true,
        italicizePrivateLinks: true,
      })[0].renderedEventCollections
    ).toStrictEqual([
      `[timfitzzz](https://github.com/timfitzzz) closed issue _set up test mongodb database_ in _timfitzzz/stemmy_ ???  \r\n\r\n`,
    ]);
  });
});

describe('renderEvents for multiple private pull request comment events with private links omitted and italicized', () => {
  let multiplePullRequestCommentEvents = [
    testData.PullRequestReviewCommentEvent.testEvents.created[0].events[0],
    testData.PullRequestReviewCommentEvent.testEvents.created[0].events[0],
  ];

  multiplePullRequestCommentEvents = multiplePullRequestCommentEvents.map(
    (e) => {
      let event = { ...e };
      event.public = false;
      return event;
    }
  );
  it('should return the expected md text', () => {
    expect(
      renderEvents(multiplePullRequestCommentEvents, {
        md: true,
        omitPrivateLinks: true,
        markPrivate: true,
        italicizePrivateLinks: true,
      })[0].renderedEventCollections
    ).toStrictEqual([
      `[paq](https://github.com/paq) added 2 comments on pull request _avm2: Implement ByteArray_ in _ruffle-rs/ruffle_ ???  \r\n` +
        '* 575624667: It seems that `coerce_to_string` is necessary here as well.\r\n  \r\n  Test code\r\n  ```as\r\n  import flash.utils.ByteArray;\r\n  import flash.utils.Endian;\r\n  \r\n  class A {\r\n      public function A() {}\r\n      public function toString():String {\r\n          return "shift-jis";\r\n      }\r\n  }\r\n  \r\n  var test = new ByteArray();\r\n  test.writeMultiByte("???", new A());\r\n  test.position = 0;\r\n  trace(test.readMultiByte(2, "shift-jis"));\r\n  ```\r\n  \r\n  Flash player prints `???`.\r\n  Ruffle prints `???`.\r\n    \r\n' +
        '* 575624667: It seems that `coerce_to_string` is necessary here as well.\r\n  \r\n  Test code\r\n  ```as\r\n  import flash.utils.ByteArray;\r\n  import flash.utils.Endian;\r\n  \r\n  class A {\r\n      public function A() {}\r\n      public function toString():String {\r\n          return "shift-jis";\r\n      }\r\n  }\r\n  \r\n  var test = new ByteArray();\r\n  test.writeMultiByte("???", new A());\r\n  test.position = 0;\r\n  trace(test.readMultiByte(2, "shift-jis"));\r\n  ```\r\n  \r\n  Flash player prints `???`.\r\n  Ruffle prints `???`.\r\n    \r\n\r\n',
    ]);
  });
});

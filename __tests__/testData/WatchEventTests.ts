import { TypeTestData } from '../../src/types';

const WatchEventTests: TypeTestData = {
  testEvents: {
    none: [],
  },
};

WatchEventTests.testEvents.none = [
  {
    propSets: [
      {
        date: new Date('2020-12-04T22:39:36Z'),
        private: false,
        type: 'WatchEvent',
        actor: {
          id: 'timfitzzz',
          url: 'https://github.com/timfitzzz',
        },
        actionType: undefined,
        verb: 'started',
        result: 'watching',
        subject: {
          id: 231138759,
          title: 'mohebifar/react-use-context-selector',
          desc: 'repository',
          url: 'https://github.com/mohebifar/react-use-context-selector',
          preposition: undefined,
          content: undefined,
        },
        target: undefined,
        parent: undefined,
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'December 4, 2020',
          actor: 'timfitzzz',
          verb: 'started',
          subject: 'repository mohebifar/react-use-context-selector',
          target: undefined,
          parent: undefined,
          content: undefined,
        },
        md: {
          date: 'December 4, 2020',
          actor: '[timfitzzz](https://github.com/timfitzzz)',
          verb: 'started',
          subject:
            'repository [mohebifar/react-use-context-selector](https://github.com/mohebifar/react-use-context-selector)',
          target: undefined,
          parent: undefined,
          content: undefined,
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['December 4, 2020'],
            'timfitzzz started watching repository mohebifar/react-use-context-selector',
          ],
          md: [
            ['December 4, 2020'],
            '[timfitzzz](https://github.com/timfitzzz) started watching repository [mohebifar/react-use-context-selector](https://github.com/mohebifar/react-use-context-selector)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['December 4, 2020'],
            'timfitzzz started watching repository mohebifar/react-use-context-selector',
          ],
          md: [
            ['December 4, 2020'],
            '[timfitzzz](https://github.com/timfitzzz) started watching repository [mohebifar/react-use-context-selector](https://github.com/mohebifar/react-use-context-selector)',
          ],
        },
      ],
    },
    events: [
      {
        id: '14421186279',
        type: 'WatchEvent',
        actor: {
          id: 3611294,
          login: 'timfitzzz',
          display_login: 'timfitzzz',
          gravatar_id: '',
          url: 'https://api.github.com/users/timfitzzz',
          avatar_url: 'https://avatars.githubusercontent.com/u/3611294?',
        },
        repo: {
          id: 231138759,
          name: 'mohebifar/react-use-context-selector',
          url:
            'https://api.github.com/repos/mohebifar/react-use-context-selector',
        },
        payload: { action: 'started' },
        public: true,
        created_at: '2020-12-04T22:39:36Z',
      },
    ],
  },
];

//   resultingPropSets: 1,
//   testStrings: {
//     summary: {
//       plain:
//         "timfitzzz started watching repository mohebifar/react-use-context-selector",
//       md:
//         "[timfitzzz](https://github.com/timfitzzz) started watching repository [mohebifar/react-use-context-selector](https://github.com/mohebifar/react-use-context-selector)",
//     },
//     actionTypes: [],
//     verbs: ["started"],
//     actor: {
//       plain: `timfitzzz started`,
//       md: `[timfitzzz](https://github.com/timfitzzz) started`,
//     },
//     result: "watching",
//     subject: {
//       plain: [["repository mohebifar/react-use-context-selector"]],
//       md: [
//         [
//           "repository [mohebifar/react-use-context-selector](https://github.com/mohebifar/react-use-context-selector)",
//         ],
//       ],
//     },
//   },
//   event: {
//     id: "14421186279",
//     type: "WatchEvent",
//     actor: {
//       id: 3611294,
//       login: "timfitzzz",
//       display_login: "timfitzzz",
//       gravatar_id: "",
//       url: "https://api.github.com/users/timfitzzz",
//       avatar_url: "https://avatars.githubusercontent.com/u/3611294?",
//     },
//     repo: {
//       id: 231138759,
//       name: "mohebifar/react-use-context-selector",
//       url:
//         "https://api.github.com/repos/mohebifar/react-use-context-selector",
//     },
//     payload: { action: "started" },
//     public: true,
//     created_at: "2020-12-04T22:39:36Z",
//   },
//   // },
// ]

export default WatchEventTests;

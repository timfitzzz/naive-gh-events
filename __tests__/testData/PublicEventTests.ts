import { TypeTestData } from './';

const PublicEventTests: TypeTestData = {
  testEvents: {
    none: [],
  },
};

PublicEventTests.testEvents.none = [
  {
    propSets: [
      {
        date: new Date('2021-02-13T05:22:47Z'),
        private: false,
        type: 'PublicEvent',
        verb: 'set',
        result: ['repository', 'repositories'],
        actionType: undefined,
        actor: {
          id: 'RegularSpark',
          url: 'https://github.com/RegularSpark',
        },
        subject: {
          id: 338492220,
          title: 'RegularSpark/wrappedchat',
          url: 'https://github.com/RegularSpark/wrappedchat',
          desc: undefined,
          preposition: undefined,
          content: undefined,
        },
        target: {
          preposition: 'to',
          desc: "'public'",
          id: '',
          url: undefined,
          title: undefined,
          content: undefined,
        },
        parent: undefined,
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 13, 2021',
          actor: 'RegularSpark',
          verb: 'set',
          subject: 'RegularSpark/wrappedchat',
          target: "to 'public'",
          parent: undefined,
          content: undefined,
        },
        md: {
          date: 'February 13, 2021',
          actor: '[RegularSpark](https://github.com/RegularSpark)',
          verb: 'set',
          subject:
            '[RegularSpark/wrappedchat](https://github.com/RegularSpark/wrappedchat)',
          target: "to 'public'",
          parent: undefined,
          content: undefined,
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['February 13, 2021'],
            "RegularSpark set repository RegularSpark/wrappedchat to 'public'",
          ],
          md: [
            ['February 13, 2021'],
            "[RegularSpark](https://github.com/RegularSpark) set repository [RegularSpark/wrappedchat](https://github.com/RegularSpark/wrappedchat) to 'public'",
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 13, 2021'],
            "RegularSpark set repository RegularSpark/wrappedchat to 'public'",
          ],
          md: [
            ['February 13, 2021'],
            "[RegularSpark](https://github.com/RegularSpark) set repository [RegularSpark/wrappedchat](https://github.com/RegularSpark/wrappedchat) to 'public'",
          ],
        },
      ],
    },
    events: [
      {
        id: '15171804449',
        type: 'PublicEvent',
        actor: {
          id: 71980947,
          login: 'RegularSpark',
          display_login: 'RegularSpark',
          gravatar_id: '',
          url: 'https://api.github.com/users/RegularSpark',
          avatar_url: 'https://avatars.githubusercontent.com/u/71980947?',
        },
        repo: {
          id: 338492220,
          name: 'RegularSpark/wrappedchat',
          url: 'https://api.github.com/repos/RegularSpark/wrappedchat',
        },
        payload: {},
        public: true,
        created_at: '2021-02-13T05:22:47Z',
      },
    ],
  },
];
// PublicEventTests["testEvents"] = [
//   {
//     resultingPropSets: 1,
//     testStrings: {
//       summary: {
//         plain:
//           "RegularSpark set repository RegularSpark/wrappedchat to 'public'",
//         md:
//           "[RegularSpark](https://github.com/RegularSpark) set repository [RegularSpark/wrappedchat](https://github.com/RegularSpark/wrappedchat) to 'public'",
//       },
//       actionTypes: [],
//       verbs: ["set"],
//       actor: {
//         plain: "RegularSpark set",
//         md: "[RegularSpark](https://github.com/RegularSpark) set",
//       },
//       result: "repository",
//       subject: {
//         plain: [["RegularSpark/wrappedchat"]],
//         md: [
//           [
//             "[RegularSpark/wrappedchat](https://github.com/RegularSpark/wrappedchat)",
//           ],
//         ],
//       },
//       target: {
//         plain: [["to 'public'"]],
//         md: [["to 'public'"]],
//       },
//     },
//     event: {
//       id: "15171804449",
//       type: "PublicEvent",
//       actor: {
//         id: 71980947,
//         login: "RegularSpark",
//         display_login: "RegularSpark",
//         gravatar_id: "",
//         url: "https://api.github.com/users/RegularSpark",
//         avatar_url: "https://avatars.githubusercontent.com/u/71980947?",
//       },
//       repo: {
//         id: 338492220,
//         name: "RegularSpark/wrappedchat",
//         url: "https://api.github.com/repos/RegularSpark/wrappedchat",
//       },
//       payload: {},
//       public: true,
//       created_at: "2021-02-13T05:22:47Z",
//     },
//   },
// ]

export default PublicEventTests;

import { TypeTestData } from './';

const MemberEventTests: TypeTestData = {
  testEvents: {
    added: [],
  },
};

MemberEventTests.testEvents.added = [
  {
    propSets: [
      {
        date: new Date('2020-12-29T01:04:46Z'),
        private: true,
        type: 'MemberEvent',
        verb: 'granted',
        result: ['access', 'access'],
        actionType: 'added',
        actor: {
          id: 'timfitzzz',
          url: 'https://github.com/timfitzzz',
        },
        subject: {
          preposition: 'for',
          desc: 'user',
          id: 345106,
          title: 'rf-',
          url: 'https://github.com/rf-',
          content: undefined,
        },
        target: {
          preposition: 'to',
          id: 'timfitzzz/stemmy',
          url: 'https://github.com/timfitzzz/stemmy',
          desc: undefined,
          title: undefined,
          content: undefined,
        },
        parent: undefined,
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'December 28, 2020',
          actor: 'timfitzzz',
          verb: 'granted',
          subject: 'for user rf-',
          target: 'to timfitzzz/stemmy',
          parent: undefined,
          content: undefined,
        },
        md: {
          date: 'December 28, 2020',
          actor: '[timfitzzz](https://github.com/timfitzzz)',
          verb: 'granted',
          subject: 'for user [rf-](https://github.com/rf-)',
          target: 'to [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)',
          parent: undefined,
          content: undefined,
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['December 28, 2020'],
            'timfitzzz granted access for user rf- to timfitzzz/stemmy',
          ],
          md: [
            ['December 28, 2020'],
            '[timfitzzz](https://github.com/timfitzzz) granted access for user [rf-](https://github.com/rf-) to [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['December 28, 2020'],
            'timfitzzz granted access for user rf- to timfitzzz/stemmy',
          ],
          md: [
            ['December 28, 2020'],
            '[timfitzzz](https://github.com/timfitzzz) granted access for user [rf-](https://github.com/rf-) to [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)',
          ],
        },
      ],
    },
    events: [
      {
        id: '14660781811',
        type: 'MemberEvent',
        actor: {
          id: 3611294,
          login: 'timfitzzz',
          display_login: 'timfitzzz',
          gravatar_id: '',
          url: 'https://api.github.com/users/timfitzzz',
          avatar_url: 'https://avatars.githubusercontent.com/u/3611294?',
        },
        repo: {
          id: 289771653,
          name: 'timfitzzz/stemmy',
          url: 'https://api.github.com/repos/timfitzzz/stemmy',
        },
        payload: {
          member: {
            login: 'rf-',
            id: 345106,
            node_id: 'MDQ6VXNlcjM0NTEwNg==',
            avatar_url: 'https://avatars0.githubusercontent.com/u/345106?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/rf-',
            html_url: 'https://github.com/rf-',
            followers_url: 'https://api.github.com/users/rf-/followers',
            following_url:
              'https://api.github.com/users/rf-/following{/other_user}',
            gists_url: 'https://api.github.com/users/rf-/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/rf-/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/rf-/subscriptions',
            organizations_url: 'https://api.github.com/users/rf-/orgs',
            repos_url: 'https://api.github.com/users/rf-/repos',
            events_url: 'https://api.github.com/users/rf-/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/rf-/received_events',
            type: 'User',
            site_admin: false,
          },
          action: 'added',
        },
        public: false,
        created_at: '2020-12-29T01:04:46Z',
      },
    ],
  },
];

//     resultingPropSets: 1,
//     testStrings: {
//       summary: {
//         plain: "timfitzzz granted access for user rf- to timfitzzz/stemmy",
//         md:
//           "[timfitzzz](https://github.com/timfitzzz) granted access for user [rf-](https://github.com/rf-) to [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)",
//       },
//       actionTypes: ["added"],
//       verbs: ["granted"],
//       actor: {
//         plain: `timfitzzz granted`,
//         md: `[timfitzzz](https://github.com/timfitzzz) granted`,
//       },
//       result: "access",
//       subject: {
//         plain: [["for user rf-"]],
//         md: [["for user [rf-](https://github.com/rf-)"]],
//       },
//       target: {
//         plain: [["to timfitzzz/stemmy"]],
//         md: [["to [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)"]],
//       },
//     },
//     event: {
//       id: "14660781811",
//       type: "MemberEvent",
//       actor: {
//         id: 3611294,
//         login: "timfitzzz",
//         display_login: "timfitzzz",
//         gravatar_id: "",
//         url: "https://api.github.com/users/timfitzzz",
//         avatar_url: "https://avatars.githubusercontent.com/u/3611294?",
//       },
//       repo: {
//         id: 289771653,
//         name: "timfitzzz/stemmy",
//         url: "https://api.github.com/repos/timfitzzz/stemmy",
//       },
//       payload: {
//         member: {
//           login: "rf-",
//           id: 345106,
//           node_id: "MDQ6VXNlcjM0NTEwNg==",
//           avatar_url: "https://avatars0.githubusercontent.com/u/345106?v=4",
//           gravatar_id: "",
//           url: "https://api.github.com/users/rf-",
//           html_url: "https://github.com/rf-",
//           followers_url: "https://api.github.com/users/rf-/followers",
//           following_url:
//             "https://api.github.com/users/rf-/following{/other_user}",
//           gists_url: "https://api.github.com/users/rf-/gists{/gist_id}",
//           starred_url:
//             "https://api.github.com/users/rf-/starred{/owner}{/repo}",
//           subscriptions_url: "https://api.github.com/users/rf-/subscriptions",
//           organizations_url: "https://api.github.com/users/rf-/orgs",
//           repos_url: "https://api.github.com/users/rf-/repos",
//           events_url: "https://api.github.com/users/rf-/events{/privacy}",
//           received_events_url:
//             "https://api.github.com/users/rf-/received_events",
//           type: "User",
//           site_admin: false,
//         },
//         action: "added",
//       },
//       public: false,
//       created_at: "2020-12-29T01:04:46Z",
//     },
//   },
// ]

export default MemberEventTests;

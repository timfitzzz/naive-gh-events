import { TypeTestData } from '../../src/types';

const IssueCommentEventTests: TypeTestData = {
  testEvents: {
    created: [],
  },
};

IssueCommentEventTests.testEvents.created = [
  {
    propSets: [
      {
        date: new Date('2020-12-27T20:51:54Z'),
        private: true,
        type: 'IssueCommentEvent',
        verb: 'created',
        result: ['comment', 'comments'],
        actionType: 'created',
        subject: {
          id: 751514653,
          content:
            'done, will include settings in commit. env file needed for creds and test server configuration.',
          url:
            'https://github.com/timfitzzz/stemmy/issues/13#issuecomment-751514653',
          preposition: undefined,
          desc: undefined,
          title: undefined,
        },
        actor: {
          id: 'timfitzzz',
          url: 'https://github.com/timfitzzz',
        },
        target: {
          preposition: 'on',
          desc: 'issue',
          id: 13,
          url: 'https://github.com/timfitzzz/stemmy/issues/13',
          title: 'set up test mongodb database',
          content: undefined,
        },
        parent: {
          id: 'timfitzzz/stemmy',
          url: 'https://github.com/timfitzzz/stemmy',
          desc: undefined,
          preposition: 'in',
          content: undefined,
          title: 'timfitzzz/stemmy',
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'December 27, 2020',
          actor: 'timfitzzz',
          verb: 'created',
          subject: '751514653',
          target: 'on issue set up test mongodb database',
          parent: 'in timfitzzz/stemmy',
          content:
            'done, will include settings in commit. env file needed for creds and test server configuration.',
        },
        md: {
          date: 'December 27, 2020',
          actor: '[timfitzzz](https://github.com/timfitzzz)',
          verb: 'created',
          subject:
            '[751514653](https://github.com/timfitzzz/stemmy/issues/13#issuecomment-751514653)',
          target:
            'on issue [set up test mongodb database](https://github.com/timfitzzz/stemmy/issues/13)',
          parent: 'in [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)',
          content:
            'done, will include settings in commit. env file needed for creds and test server configuration.',
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['December 27, 2020'],
            'timfitzzz created comment 751514653 on issue set up test mongodb database in timfitzzz/stemmy',
            'done, will include settings in commit. env file needed for creds and test server configuration.',
          ],
          md: [
            ['December 27, 2020'],
            '[timfitzzz](https://github.com/timfitzzz) created comment [751514653](https://github.com/timfitzzz/stemmy/issues/13#issuecomment-751514653) on issue [set up test mongodb database](https://github.com/timfitzzz/stemmy/issues/13) in [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)',
            'done, will include settings in commit. env file needed for creds and test server configuration.',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['December 27, 2020'],
            'timfitzzz created comment 751514653 on issue set up test mongodb database in timfitzzz/stemmy',
            'done, will include settings in commit. env file needed for creds and test server configuration.',
          ],
          md: [
            ['December 27, 2020'],
            '[timfitzzz](https://github.com/timfitzzz) created comment [751514653](https://github.com/timfitzzz/stemmy/issues/13#issuecomment-751514653) on issue [set up test mongodb database](https://github.com/timfitzzz/stemmy/issues/13) in [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)',
            'done, will include settings in commit. env file needed for creds and test server configuration.',
          ],
        },
      ],
    },
    events: [
      {
        id: '14651575531',
        type: 'IssueCommentEvent',
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
          action: 'created',
          issue: {
            url: 'https://api.github.com/repos/timfitzzz/stemmy/issues/13',
            repository_url: 'https://api.github.com/repos/timfitzzz/stemmy',
            labels_url:
              'https://api.github.com/repos/timfitzzz/stemmy/issues/13/labels{/name}',
            comments_url:
              'https://api.github.com/repos/timfitzzz/stemmy/issues/13/comments',
            events_url:
              'https://api.github.com/repos/timfitzzz/stemmy/issues/13/events',
            html_url: 'https://github.com/timfitzzz/stemmy/issues/13',
            id: 775097444,
            node_id: 'MDU6SXNzdWU3NzUwOTc0NDQ=',
            number: 13,
            title: 'set up test mongodb database',
            user: {
              login: 'timfitzzz',
              id: 3611294,
              node_id: 'MDQ6VXNlcjM2MTEyOTQ=',
              avatar_url:
                'https://avatars1.githubusercontent.com/u/3611294?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/timfitzzz',
              html_url: 'https://github.com/timfitzzz',
              followers_url: 'https://api.github.com/users/timfitzzz/followers',
              following_url:
                'https://api.github.com/users/timfitzzz/following{/other_user}',
              gists_url:
                'https://api.github.com/users/timfitzzz/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/timfitzzz/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/timfitzzz/subscriptions',
              organizations_url: 'https://api.github.com/users/timfitzzz/orgs',
              repos_url: 'https://api.github.com/users/timfitzzz/repos',
              events_url:
                'https://api.github.com/users/timfitzzz/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/timfitzzz/received_events',
              type: 'User',
              site_admin: false,
            },
            labels: [
              {
                id: 2567918464,
                node_id: 'MDU6TGFiZWwyNTY3OTE4NDY0',
                url:
                  'https://api.github.com/repos/timfitzzz/stemmy/labels/deployment',
                name: 'deployment',
                color: 'edd62d',
                default: false,
                description: 'related to deployment',
              },
            ],
            state: 'open',
            locked: false,
            assignee: {
              login: 'timfitzzz',
              id: 3611294,
              node_id: 'MDQ6VXNlcjM2MTEyOTQ=',
              avatar_url:
                'https://avatars1.githubusercontent.com/u/3611294?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/timfitzzz',
              html_url: 'https://github.com/timfitzzz',
              followers_url: 'https://api.github.com/users/timfitzzz/followers',
              following_url:
                'https://api.github.com/users/timfitzzz/following{/other_user}',
              gists_url:
                'https://api.github.com/users/timfitzzz/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/timfitzzz/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/timfitzzz/subscriptions',
              organizations_url: 'https://api.github.com/users/timfitzzz/orgs',
              repos_url: 'https://api.github.com/users/timfitzzz/repos',
              events_url:
                'https://api.github.com/users/timfitzzz/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/timfitzzz/received_events',
              type: 'User',
              site_admin: false,
            },
            assignees: [
              {
                login: 'timfitzzz',
                id: 3611294,
                node_id: 'MDQ6VXNlcjM2MTEyOTQ=',
                avatar_url:
                  'https://avatars1.githubusercontent.com/u/3611294?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/timfitzzz',
                html_url: 'https://github.com/timfitzzz',
                followers_url:
                  'https://api.github.com/users/timfitzzz/followers',
                following_url:
                  'https://api.github.com/users/timfitzzz/following{/other_user}',
                gists_url:
                  'https://api.github.com/users/timfitzzz/gists{/gist_id}',
                starred_url:
                  'https://api.github.com/users/timfitzzz/starred{/owner}{/repo}',
                subscriptions_url:
                  'https://api.github.com/users/timfitzzz/subscriptions',
                organizations_url:
                  'https://api.github.com/users/timfitzzz/orgs',
                repos_url: 'https://api.github.com/users/timfitzzz/repos',
                events_url:
                  'https://api.github.com/users/timfitzzz/events{/privacy}',
                received_events_url:
                  'https://api.github.com/users/timfitzzz/received_events',
                type: 'User',
                site_admin: false,
              },
            ],
            milestone: null,
            comments: 1,
            created_at: '2020-12-27T19:49:07Z',
            updated_at: '2020-12-27T20:51:54Z',
            closed_at: null,
            author_association: 'OWNER',
            active_lock_reason: null,
            body: 'need to move mongodb contents to online test location',
            performed_via_github_app: null,
          },
          comment: {
            url:
              'https://api.github.com/repos/timfitzzz/stemmy/issues/comments/751514653',
            html_url:
              'https://github.com/timfitzzz/stemmy/issues/13#issuecomment-751514653',
            issue_url:
              'https://api.github.com/repos/timfitzzz/stemmy/issues/13',
            id: 751514653,
            node_id: 'MDEyOklzc3VlQ29tbWVudDc1MTUxNDY1Mw==',
            user: {
              login: 'timfitzzz',
              id: 3611294,
              node_id: 'MDQ6VXNlcjM2MTEyOTQ=',
              avatar_url:
                'https://avatars1.githubusercontent.com/u/3611294?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/timfitzzz',
              html_url: 'https://github.com/timfitzzz',
              followers_url: 'https://api.github.com/users/timfitzzz/followers',
              following_url:
                'https://api.github.com/users/timfitzzz/following{/other_user}',
              gists_url:
                'https://api.github.com/users/timfitzzz/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/timfitzzz/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/timfitzzz/subscriptions',
              organizations_url: 'https://api.github.com/users/timfitzzz/orgs',
              repos_url: 'https://api.github.com/users/timfitzzz/repos',
              events_url:
                'https://api.github.com/users/timfitzzz/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/timfitzzz/received_events',
              type: 'User',
              site_admin: false,
            },
            created_at: '2020-12-27T20:51:54Z',
            updated_at: '2020-12-27T20:51:54Z',
            author_association: 'OWNER',
            body:
              'done, will include settings in commit. env file needed for creds and test server configuration.',
            performed_via_github_app: null,
          },
        },
        public: false,
        created_at: '2020-12-27T20:51:54Z',
      },
    ],
  },
];
// // although this can theoretically have multiple action types,
// // only 'created' events seem to actually appear via the api
// IssueCommentEventTests["testEvents"] = {}
// IssueCommentEventTests["testEvents"]["created"] = [
//   {
//     resultingPropSets: 1,
//     testStrings: {
//       summary: {
//         plain:
//           "timfitzzz created comment 751514653 on issue set up test mongodb database in timfitzzz/stemmy",
//         md:
//           "[timfitzzz](https://github.com/timfitzzz) created comment [751514653](https://github.com/timfitzzz/stemmy/issues/13#issuecomment-751514653) on issue [set up test mongodb database](https://github.com/timfitzzz/stemmy/issues/13) in [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)",
//       },
//       actor: {
//         plain: `timfitzzz created`,
//         md: `[timfitzzz](https://github.com/timfitzzz) created`,
//       },
//       verbs: ["created"],
//       actionTypes: ["created"],
//       result: "comment",
//       subject: {
//         plain: [
//           [
//             "751514653",
//             "done, will include settings in commit. env file needed for creds and test server configuration.",
//           ],
//         ],
//         md: [
//           [
//             "[751514653](https://github.com/timfitzzz/stemmy/issues/13#issuecomment-751514653)",
//             "done, will include settings in commit. env file needed for creds and test server configuration.",
//           ],
//         ],
//       },
//       target: {
//         plain: [["on issue set up test mongodb database"]],
//         md: [
//           [
//             "on issue [set up test mongodb database](https://github.com/timfitzzz/stemmy/issues/13)",
//           ],
//         ],
//       },
//       parent: {
//         plain: [["in timfitzzz/stemmy"]],
//         md: [["in [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)"]],
//       },
//     },
//     event: {
//       id: "14651575531",
//       type: "IssueCommentEvent",
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
//         action: "created",
//         issue: {
//           url: "https://api.github.com/repos/timfitzzz/stemmy/issues/13",
//           repository_url: "https://api.github.com/repos/timfitzzz/stemmy",
//           labels_url:
//             "https://api.github.com/repos/timfitzzz/stemmy/issues/13/labels{/name}",
//           comments_url:
//             "https://api.github.com/repos/timfitzzz/stemmy/issues/13/comments",
//           events_url:
//             "https://api.github.com/repos/timfitzzz/stemmy/issues/13/events",
//           html_url: "https://github.com/timfitzzz/stemmy/issues/13",
//           id: 775097444,
//           node_id: "MDU6SXNzdWU3NzUwOTc0NDQ=",
//           number: 13,
//           title: "set up test mongodb database",
//           user: {
//             login: "timfitzzz",
//             id: 3611294,
//             node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//             avatar_url: "https://avatars1.githubusercontent.com/u/3611294?v=4",
//             gravatar_id: "",
//             url: "https://api.github.com/users/timfitzzz",
//             html_url: "https://github.com/timfitzzz",
//             followers_url: "https://api.github.com/users/timfitzzz/followers",
//             following_url:
//               "https://api.github.com/users/timfitzzz/following{/other_user}",
//             gists_url: "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//             starred_url:
//               "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//             subscriptions_url:
//               "https://api.github.com/users/timfitzzz/subscriptions",
//             organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//             repos_url: "https://api.github.com/users/timfitzzz/repos",
//             events_url:
//               "https://api.github.com/users/timfitzzz/events{/privacy}",
//             received_events_url:
//               "https://api.github.com/users/timfitzzz/received_events",
//             type: "User",
//             site_admin: false,
//           },
//           labels: [
//             {
//               id: 2567918464,
//               node_id: "MDU6TGFiZWwyNTY3OTE4NDY0",
//               url:
//                 "https://api.github.com/repos/timfitzzz/stemmy/labels/deployment",
//               name: "deployment",
//               color: "edd62d",
//               default: false,
//               description: "related to deployment",
//             },
//           ],
//           state: "open",
//           locked: false,
//           assignee: {
//             login: "timfitzzz",
//             id: 3611294,
//             node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//             avatar_url: "https://avatars1.githubusercontent.com/u/3611294?v=4",
//             gravatar_id: "",
//             url: "https://api.github.com/users/timfitzzz",
//             html_url: "https://github.com/timfitzzz",
//             followers_url: "https://api.github.com/users/timfitzzz/followers",
//             following_url:
//               "https://api.github.com/users/timfitzzz/following{/other_user}",
//             gists_url: "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//             starred_url:
//               "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//             subscriptions_url:
//               "https://api.github.com/users/timfitzzz/subscriptions",
//             organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//             repos_url: "https://api.github.com/users/timfitzzz/repos",
//             events_url:
//               "https://api.github.com/users/timfitzzz/events{/privacy}",
//             received_events_url:
//               "https://api.github.com/users/timfitzzz/received_events",
//             type: "User",
//             site_admin: false,
//           },
//           assignees: [
//             {
//               login: "timfitzzz",
//               id: 3611294,
//               node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//               avatar_url:
//                 "https://avatars1.githubusercontent.com/u/3611294?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/timfitzzz",
//               html_url: "https://github.com/timfitzzz",
//               followers_url: "https://api.github.com/users/timfitzzz/followers",
//               following_url:
//                 "https://api.github.com/users/timfitzzz/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/timfitzzz/subscriptions",
//               organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//               repos_url: "https://api.github.com/users/timfitzzz/repos",
//               events_url:
//                 "https://api.github.com/users/timfitzzz/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/timfitzzz/received_events",
//               type: "User",
//               site_admin: false,
//             },
//           ],
//           milestone: null,
//           comments: 1,
//           created_at: "2020-12-27T19:49:07Z",
//           updated_at: "2020-12-27T20:51:54Z",
//           closed_at: null,
//           author_association: "OWNER",
//           active_lock_reason: null,
//           body: "need to move mongodb contents to online test location",
//           performed_via_github_app: null,
//         },
//         comment: {
//           url:
//             "https://api.github.com/repos/timfitzzz/stemmy/issues/comments/751514653",
//           html_url:
//             "https://github.com/timfitzzz/stemmy/issues/13#issuecomment-751514653",
//           issue_url: "https://api.github.com/repos/timfitzzz/stemmy/issues/13",
//           id: 751514653,
//           node_id: "MDEyOklzc3VlQ29tbWVudDc1MTUxNDY1Mw==",
//           user: {
//             login: "timfitzzz",
//             id: 3611294,
//             node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//             avatar_url: "https://avatars1.githubusercontent.com/u/3611294?v=4",
//             gravatar_id: "",
//             url: "https://api.github.com/users/timfitzzz",
//             html_url: "https://github.com/timfitzzz",
//             followers_url: "https://api.github.com/users/timfitzzz/followers",
//             following_url:
//               "https://api.github.com/users/timfitzzz/following{/other_user}",
//             gists_url: "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//             starred_url:
//               "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//             subscriptions_url:
//               "https://api.github.com/users/timfitzzz/subscriptions",
//             organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//             repos_url: "https://api.github.com/users/timfitzzz/repos",
//             events_url:
//               "https://api.github.com/users/timfitzzz/events{/privacy}",
//             received_events_url:
//               "https://api.github.com/users/timfitzzz/received_events",
//             type: "User",
//             site_admin: false,
//           },
//           created_at: "2020-12-27T20:51:54Z",
//           updated_at: "2020-12-27T20:51:54Z",
//           author_association: "OWNER",
//           body:
//             "done, will include settings in commit. env file needed for creds and test server configuration.",
//           performed_via_github_app: null,
//         },
//       },
//       public: false,
//       created_at: "2020-12-27T20:51:54Z",
//     },
//   },
// ]

// IssueCommentEventTests["testEvents"]["multiple"] = [
//   {
//     testStrings: {
//       summary: {
//         plain: [
//           "timfitzzz created a comment on issue 'set up test mongodb database' in timfitzzz/stemmy",
//           "timfitzzz created 2 comments on issue 'update stemmy-web dev configuration to point to test stemmy-server' in timfitzzz/stemmy",
//         ],
//         md: [
//           "[timfitzzz](https://github.com/timfitzzz) created [a comment](https://github.com/timfitzzz/stemmy/issues/13#issuecomment-751514653) on issue [set up test mongodb database](https://github.com/timfitzzz/stemmy/issues/13) in [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)",
//           "[timfitzzz](https://github.com/timfitzzz) created 2 comments on issue [update stemmy-web dev configuration to point to test stemmy-server](https://github.com/timfitzzz/stemmy/issues/15) in [timfitzzz/stemmy](https://github.com/timfitzzz/stemmy)",
//         ],
//       },
//       verbs: ["created", "created", "created"],
//       content: {
//         plain: [
//           ["need to move mongodb contents to online test location"],
//           ["Creating test comment #2", "Adding test comment"],
//         ],
//         md: [
//           ["need to move mongodb contents to online test location"],
//           [
//             "[782321799](https://github.com/timfitzzz/stemmy/issues/15#issuecomment-782321799): Creating test comment #2",
//             "[782321934](https://github.com/timfitzzz/stemmy/issues/15#issuecomment-782321934): Adding test comment",
//           ],
//         ],
//       },
//     },
//     events: [
//       {
//         id: "14651575531",
//         type: "IssueCommentEvent",
//         actor: {
//           id: 3611294,
//           login: "timfitzzz",
//           display_login: "timfitzzz",
//           gravatar_id: "",
//           url: "https://api.github.com/users/timfitzzz",
//           avatar_url: "https://avatars.githubusercontent.com/u/3611294?",
//         },
//         repo: {
//           id: 289771653,
//           name: "timfitzzz/stemmy",
//           url: "https://api.github.com/repos/timfitzzz/stemmy",
//         },
//         payload: {
//           action: "created",
//           issue: {
//             url: "https://api.github.com/repos/timfitzzz/stemmy/issues/13",
//             repository_url: "https://api.github.com/repos/timfitzzz/stemmy",
//             labels_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/13/labels{/name}",
//             comments_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/13/comments",
//             events_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/13/events",
//             html_url: "https://github.com/timfitzzz/stemmy/issues/13",
//             id: 775097444,
//             node_id: "MDU6SXNzdWU3NzUwOTc0NDQ=",
//             number: 13,
//             title: "set up test mongodb database",
//             user: {
//               login: "timfitzzz",
//               id: 3611294,
//               node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//               avatar_url:
//                 "https://avatars1.githubusercontent.com/u/3611294?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/timfitzzz",
//               html_url: "https://github.com/timfitzzz",
//               followers_url: "https://api.github.com/users/timfitzzz/followers",
//               following_url:
//                 "https://api.github.com/users/timfitzzz/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/timfitzzz/subscriptions",
//               organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//               repos_url: "https://api.github.com/users/timfitzzz/repos",
//               events_url:
//                 "https://api.github.com/users/timfitzzz/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/timfitzzz/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             labels: [
//               {
//                 id: 2567918464,
//                 node_id: "MDU6TGFiZWwyNTY3OTE4NDY0",
//                 url:
//                   "https://api.github.com/repos/timfitzzz/stemmy/labels/deployment",
//                 name: "deployment",
//                 color: "edd62d",
//                 default: false,
//                 description: "related to deployment",
//               },
//             ],
//             state: "open",
//             locked: false,
//             assignee: {
//               login: "timfitzzz",
//               id: 3611294,
//               node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//               avatar_url:
//                 "https://avatars1.githubusercontent.com/u/3611294?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/timfitzzz",
//               html_url: "https://github.com/timfitzzz",
//               followers_url: "https://api.github.com/users/timfitzzz/followers",
//               following_url:
//                 "https://api.github.com/users/timfitzzz/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/timfitzzz/subscriptions",
//               organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//               repos_url: "https://api.github.com/users/timfitzzz/repos",
//               events_url:
//                 "https://api.github.com/users/timfitzzz/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/timfitzzz/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             assignees: [
//               {
//                 login: "timfitzzz",
//                 id: 3611294,
//                 node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//                 avatar_url:
//                   "https://avatars1.githubusercontent.com/u/3611294?v=4",
//                 gravatar_id: "",
//                 url: "https://api.github.com/users/timfitzzz",
//                 html_url: "https://github.com/timfitzzz",
//                 followers_url:
//                   "https://api.github.com/users/timfitzzz/followers",
//                 following_url:
//                   "https://api.github.com/users/timfitzzz/following{/other_user}",
//                 gists_url:
//                   "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//                 starred_url:
//                   "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//                 subscriptions_url:
//                   "https://api.github.com/users/timfitzzz/subscriptions",
//                 organizations_url:
//                   "https://api.github.com/users/timfitzzz/orgs",
//                 repos_url: "https://api.github.com/users/timfitzzz/repos",
//                 events_url:
//                   "https://api.github.com/users/timfitzzz/events{/privacy}",
//                 received_events_url:
//                   "https://api.github.com/users/timfitzzz/received_events",
//                 type: "User",
//                 site_admin: false,
//               },
//             ],
//             milestone: null,
//             comments: 1,
//             created_at: "2020-12-27T19:49:07Z",
//             updated_at: "2020-12-27T20:51:54Z",
//             closed_at: null,
//             author_association: "OWNER",
//             active_lock_reason: null,
//             body: "need to move mongodb contents to online test location",
//             performed_via_github_app: null,
//           },
//           comment: {
//             url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/comments/751514653",
//             html_url:
//               "https://github.com/timfitzzz/stemmy/issues/13#issuecomment-751514653",
//             issue_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/13",
//             id: 751514653,
//             node_id: "MDEyOklzc3VlQ29tbWVudDc1MTUxNDY1Mw==",
//             user: {
//               login: "timfitzzz",
//               id: 3611294,
//               node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//               avatar_url:
//                 "https://avatars1.githubusercontent.com/u/3611294?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/timfitzzz",
//               html_url: "https://github.com/timfitzzz",
//               followers_url: "https://api.github.com/users/timfitzzz/followers",
//               following_url:
//                 "https://api.github.com/users/timfitzzz/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/timfitzzz/subscriptions",
//               organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//               repos_url: "https://api.github.com/users/timfitzzz/repos",
//               events_url:
//                 "https://api.github.com/users/timfitzzz/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/timfitzzz/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             created_at: "2020-12-27T20:51:54Z",
//             updated_at: "2020-12-27T20:51:54Z",
//             author_association: "OWNER",
//             body:
//               "done, will include settings in commit. env file needed for creds and test server configuration.",
//             performed_via_github_app: null,
//           },
//         },
//         public: false,
//         created_at: "2020-12-27T20:51:54Z",
//       },
//       {
//         id: "15249892908",
//         type: "IssueCommentEvent",
//         actor: {
//           id: 3611294,
//           login: "timfitzzz",
//           display_login: "timfitzzz",
//           gravatar_id: "",
//           url: "https://api.github.com/users/timfitzzz",
//           avatar_url: "https://avatars.githubusercontent.com/u/3611294?",
//         },
//         repo: {
//           id: 289771653,
//           name: "timfitzzz/stemmy",
//           url: "https://api.github.com/repos/timfitzzz/stemmy",
//         },
//         payload: {
//           action: "created",
//           issue: {
//             url: "https://api.github.com/repos/timfitzzz/stemmy/issues/15",
//             repository_url: "https://api.github.com/repos/timfitzzz/stemmy",
//             labels_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/15/labels{/name}",
//             comments_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/15/comments",
//             events_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/15/events",
//             html_url: "https://github.com/timfitzzz/stemmy/issues/15",
//             id: 775098154,
//             node_id: "MDU6SXNzdWU3NzUwOTgxNTQ=",
//             number: 15,
//             title:
//               "update stemmy-web dev configuration to point to test stemmy-server",
//             user: {
//               login: "timfitzzz",
//               id: 3611294,
//               node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//               avatar_url: "https://avatars.githubusercontent.com/u/3611294?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/timfitzzz",
//               html_url: "https://github.com/timfitzzz",
//               followers_url: "https://api.github.com/users/timfitzzz/followers",
//               following_url:
//                 "https://api.github.com/users/timfitzzz/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/timfitzzz/subscriptions",
//               organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//               repos_url: "https://api.github.com/users/timfitzzz/repos",
//               events_url:
//                 "https://api.github.com/users/timfitzzz/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/timfitzzz/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             labels: [
//               {
//                 id: 2567918464,
//                 node_id: "MDU6TGFiZWwyNTY3OTE4NDY0",
//                 url:
//                   "https://api.github.com/repos/timfitzzz/stemmy/labels/deployment",
//                 name: "deployment",
//                 color: "edd62d",
//                 default: false,
//                 description: "related to deployment",
//               },
//               {
//                 id: 2567917476,
//                 node_id: "MDU6TGFiZWwyNTY3OTE3NDc2",
//                 url:
//                   "https://api.github.com/repos/timfitzzz/stemmy/labels/stemmy-web",
//                 name: "stemmy-web",
//                 color: "fef2c0",
//                 default: false,
//                 description: "on the front-end",
//               },
//             ],
//             state: "open",
//             locked: false,
//             assignee: {
//               login: "timfitzzz",
//               id: 3611294,
//               node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//               avatar_url: "https://avatars.githubusercontent.com/u/3611294?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/timfitzzz",
//               html_url: "https://github.com/timfitzzz",
//               followers_url: "https://api.github.com/users/timfitzzz/followers",
//               following_url:
//                 "https://api.github.com/users/timfitzzz/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/timfitzzz/subscriptions",
//               organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//               repos_url: "https://api.github.com/users/timfitzzz/repos",
//               events_url:
//                 "https://api.github.com/users/timfitzzz/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/timfitzzz/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             assignees: [
//               {
//                 login: "timfitzzz",
//                 id: 3611294,
//                 node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//                 avatar_url:
//                   "https://avatars.githubusercontent.com/u/3611294?v=4",
//                 gravatar_id: "",
//                 url: "https://api.github.com/users/timfitzzz",
//                 html_url: "https://github.com/timfitzzz",
//                 followers_url:
//                   "https://api.github.com/users/timfitzzz/followers",
//                 following_url:
//                   "https://api.github.com/users/timfitzzz/following{/other_user}",
//                 gists_url:
//                   "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//                 starred_url:
//                   "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//                 subscriptions_url:
//                   "https://api.github.com/users/timfitzzz/subscriptions",
//                 organizations_url:
//                   "https://api.github.com/users/timfitzzz/orgs",
//                 repos_url: "https://api.github.com/users/timfitzzz/repos",
//                 events_url:
//                   "https://api.github.com/users/timfitzzz/events{/privacy}",
//                 received_events_url:
//                   "https://api.github.com/users/timfitzzz/received_events",
//                 type: "User",
//                 site_admin: false,
//               },
//             ],
//             milestone: null,
//             comments: 2,
//             created_at: "2020-12-27T19:54:38Z",
//             updated_at: "2021-02-19T20:23:36Z",
//             closed_at: null,
//             author_association: "OWNER",
//             active_lock_reason: null,
//             body: "",
//             performed_via_github_app: null,
//           },
//           comment: {
//             url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/comments/782321934",
//             html_url:
//               "https://github.com/timfitzzz/stemmy/issues/15#issuecomment-782321934",
//             issue_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/15",
//             id: 782321934,
//             node_id: "MDEyOklzc3VlQ29tbWVudDc4MjMyMTkzNA==",
//             user: {
//               login: "timfitzzz",
//               id: 3611294,
//               node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//               avatar_url: "https://avatars.githubusercontent.com/u/3611294?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/timfitzzz",
//               html_url: "https://github.com/timfitzzz",
//               followers_url: "https://api.github.com/users/timfitzzz/followers",
//               following_url:
//                 "https://api.github.com/users/timfitzzz/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/timfitzzz/subscriptions",
//               organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//               repos_url: "https://api.github.com/users/timfitzzz/repos",
//               events_url:
//                 "https://api.github.com/users/timfitzzz/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/timfitzzz/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             created_at: "2021-02-19T20:23:36Z",
//             updated_at: "2021-02-19T20:23:36Z",
//             author_association: "OWNER",
//             body: "Creating test comment #2",
//             performed_via_github_app: null,
//           },
//         },
//         public: false,
//         created_at: "2021-02-19T20:23:36Z",
//       },
//       {
//         id: "15249889994",
//         type: "IssueCommentEvent",
//         actor: {
//           id: 3611294,
//           login: "timfitzzz",
//           display_login: "timfitzzz",
//           gravatar_id: "",
//           url: "https://api.github.com/users/timfitzzz",
//           avatar_url: "https://avatars.githubusercontent.com/u/3611294?",
//         },
//         repo: {
//           id: 289771653,
//           name: "timfitzzz/stemmy",
//           url: "https://api.github.com/repos/timfitzzz/stemmy",
//         },
//         payload: {
//           action: "created",
//           issue: {
//             url: "https://api.github.com/repos/timfitzzz/stemmy/issues/15",
//             repository_url: "https://api.github.com/repos/timfitzzz/stemmy",
//             labels_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/15/labels{/name}",
//             comments_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/15/comments",
//             events_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/15/events",
//             html_url: "https://github.com/timfitzzz/stemmy/issues/15",
//             id: 775098154,
//             node_id: "MDU6SXNzdWU3NzUwOTgxNTQ=",
//             number: 15,
//             title:
//               "update stemmy-web dev configuration to point to test stemmy-server",
//             user: {
//               login: "timfitzzz",
//               id: 3611294,
//               node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//               avatar_url: "https://avatars.githubusercontent.com/u/3611294?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/timfitzzz",
//               html_url: "https://github.com/timfitzzz",
//               followers_url: "https://api.github.com/users/timfitzzz/followers",
//               following_url:
//                 "https://api.github.com/users/timfitzzz/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/timfitzzz/subscriptions",
//               organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//               repos_url: "https://api.github.com/users/timfitzzz/repos",
//               events_url:
//                 "https://api.github.com/users/timfitzzz/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/timfitzzz/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             labels: [
//               {
//                 id: 2567918464,
//                 node_id: "MDU6TGFiZWwyNTY3OTE4NDY0",
//                 url:
//                   "https://api.github.com/repos/timfitzzz/stemmy/labels/deployment",
//                 name: "deployment",
//                 color: "edd62d",
//                 default: false,
//                 description: "related to deployment",
//               },
//               {
//                 id: 2567917476,
//                 node_id: "MDU6TGFiZWwyNTY3OTE3NDc2",
//                 url:
//                   "https://api.github.com/repos/timfitzzz/stemmy/labels/stemmy-web",
//                 name: "stemmy-web",
//                 color: "fef2c0",
//                 default: false,
//                 description: "on the front-end",
//               },
//             ],
//             state: "open",
//             locked: false,
//             assignee: {
//               login: "timfitzzz",
//               id: 3611294,
//               node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//               avatar_url: "https://avatars.githubusercontent.com/u/3611294?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/timfitzzz",
//               html_url: "https://github.com/timfitzzz",
//               followers_url: "https://api.github.com/users/timfitzzz/followers",
//               following_url:
//                 "https://api.github.com/users/timfitzzz/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/timfitzzz/subscriptions",
//               organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//               repos_url: "https://api.github.com/users/timfitzzz/repos",
//               events_url:
//                 "https://api.github.com/users/timfitzzz/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/timfitzzz/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             assignees: [
//               {
//                 login: "timfitzzz",
//                 id: 3611294,
//                 node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//                 avatar_url:
//                   "https://avatars.githubusercontent.com/u/3611294?v=4",
//                 gravatar_id: "",
//                 url: "https://api.github.com/users/timfitzzz",
//                 html_url: "https://github.com/timfitzzz",
//                 followers_url:
//                   "https://api.github.com/users/timfitzzz/followers",
//                 following_url:
//                   "https://api.github.com/users/timfitzzz/following{/other_user}",
//                 gists_url:
//                   "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//                 starred_url:
//                   "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//                 subscriptions_url:
//                   "https://api.github.com/users/timfitzzz/subscriptions",
//                 organizations_url:
//                   "https://api.github.com/users/timfitzzz/orgs",
//                 repos_url: "https://api.github.com/users/timfitzzz/repos",
//                 events_url:
//                   "https://api.github.com/users/timfitzzz/events{/privacy}",
//                 received_events_url:
//                   "https://api.github.com/users/timfitzzz/received_events",
//                 type: "User",
//                 site_admin: false,
//               },
//             ],
//             milestone: null,
//             comments: 1,
//             created_at: "2020-12-27T19:54:38Z",
//             updated_at: "2021-02-19T20:23:18Z",
//             closed_at: null,
//             author_association: "OWNER",
//             active_lock_reason: null,
//             body: "",
//             performed_via_github_app: null,
//           },
//           comment: {
//             url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/comments/782321799",
//             html_url:
//               "https://github.com/timfitzzz/stemmy/issues/15#issuecomment-782321799",
//             issue_url:
//               "https://api.github.com/repos/timfitzzz/stemmy/issues/15",
//             id: 782321799,
//             node_id: "MDEyOklzc3VlQ29tbWVudDc4MjMyMTc5OQ==",
//             user: {
//               login: "timfitzzz",
//               id: 3611294,
//               node_id: "MDQ6VXNlcjM2MTEyOTQ=",
//               avatar_url: "https://avatars.githubusercontent.com/u/3611294?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/timfitzzz",
//               html_url: "https://github.com/timfitzzz",
//               followers_url: "https://api.github.com/users/timfitzzz/followers",
//               following_url:
//                 "https://api.github.com/users/timfitzzz/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/timfitzzz/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/timfitzzz/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/timfitzzz/subscriptions",
//               organizations_url: "https://api.github.com/users/timfitzzz/orgs",
//               repos_url: "https://api.github.com/users/timfitzzz/repos",
//               events_url:
//                 "https://api.github.com/users/timfitzzz/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/timfitzzz/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             created_at: "2021-02-19T20:23:18Z",
//             updated_at: "2021-02-19T20:23:18Z",
//             author_association: "OWNER",
//             body: "Adding test comment",
//             performed_via_github_app: null,
//           },
//         },
//         public: false,
//         created_at: "2021-02-19T20:23:18Z",
//       },
//     ],
//   },
// ]

export default IssueCommentEventTests;

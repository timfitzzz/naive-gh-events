import { TypeTestData } from '../../src/types';

const PushEventTests: TypeTestData = {
  testEvents: {
    none: [],
  },
};

PushEventTests.testEvents.none = [
  {
    propSets: [
      {
        date: new Date('2021-02-08T19:45:37Z'),
        private: true,
        type: 'PushEvent',
        actor: {
          id: 'timfitzzz',
          url: 'https://github.com/timfitzzz',
        },
        verb: 'pushed',
        result: ['commit', 'commits'],
        actionType: undefined,
        subject: {
          id: 'd4e5d71da8b6cd7b169c090458142527eeb3c0af',
          url:
            'https://github.com/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af',
          content: 'Added Labor Unions/Sindicals to endorsement section titles',
          desc: undefined,
          title: 'd4e5d71da8b6cd7b169c090458142527eeb3c0af',
          preposition: undefined,
        },
        target: {
          id: 'refs/heads/master',
          title: 'refs/heads/master',
          preposition: 'to',
          url: undefined,
          desc: undefined,
          content: undefined,
        },
        parent: {
          id: 'timfitzzz/nursefornyc',
          title: 'timfitzzz/nursefornyc',
          preposition: 'in',
          url: 'https://github.com/timfitzzz/nursefornyc',
          desc: undefined,
          content: undefined,
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 8, 2021',
          actor: 'timfitzzz',
          verb: 'pushed',
          subject: 'd4e5d71da8b6cd7b169c090458142527eeb3c0af',
          content: 'Added Labor Unions/Sindicals to endorsement section titles',
          target: 'to refs/heads/master',
          parent: 'in timfitzzz/nursefornyc',
        },
        md: {
          date: 'February 8, 2021',
          actor: '[timfitzzz](https://github.com/timfitzzz)',
          verb: 'pushed',
          subject:
            '[d4e5d71da8b6cd7b169c090458142527eeb3c0af](https://github.com/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af)',
          content: 'Added Labor Unions/Sindicals to endorsement section titles',
          target: 'to refs/heads/master',
          parent:
            'in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['February 8, 2021'],
            'timfitzzz pushed commit d4e5d71da8b6cd7b169c090458142527eeb3c0af to refs/heads/master in timfitzzz/nursefornyc',
            'Added Labor Unions/Sindicals to endorsement section titles',
          ],
          md: [
            ['February 8, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) pushed commit [d4e5d71da8b6cd7b169c090458142527eeb3c0af](https://github.com/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af) to refs/heads/master in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
            'Added Labor Unions/Sindicals to endorsement section titles',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 8, 2021'],
            'timfitzzz pushed commit d4e5d71da8b6cd7b169c090458142527eeb3c0af to refs/heads/master in timfitzzz/nursefornyc',
            'Added Labor Unions/Sindicals to endorsement section titles',
          ],
          md: [
            ['February 8, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) pushed commit [d4e5d71da8b6cd7b169c090458142527eeb3c0af](https://github.com/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af) to refs/heads/master in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
            'Added Labor Unions/Sindicals to endorsement section titles',
          ],
        },
      ],
    },
    events: [
      {
        id: '15110828004',
        type: 'PushEvent',
        actor: {
          id: 3611294,
          login: 'timfitzzz',
          display_login: 'timfitzzz',
          gravatar_id: '',
          url: 'https://api.github.com/users/timfitzzz',
          avatar_url: 'https://avatars.githubusercontent.com/u/3611294?',
        },
        repo: {
          id: 277394326,
          name: 'timfitzzz/nursefornyc',
          url: 'https://api.github.com/repos/timfitzzz/nursefornyc',
        },
        payload: {
          push_id: 6496663910,
          size: 1,
          distinct_size: 1,
          ref: 'refs/heads/master',
          head: 'd4e5d71da8b6cd7b169c090458142527eeb3c0af',
          before: 'b8fe3cfef2055a150b3af1c9d47911d1d0368c65',
          commits: [
            {
              sha: 'd4e5d71da8b6cd7b169c090458142527eeb3c0af',
              author: { email: 'diceytroop@gmail.com', name: 'Tim Fitzgerald' },
              message:
                'Added Labor Unions/Sindicals to endorsement section titles',
              distinct: true,
              url:
                'https://api.github.com/repos/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af',
            },
          ],
        },
        public: false,
        created_at: '2021-02-08T19:45:37Z',
      },
    ],
  },
];

PushEventTests.testEvents.multiple = [
  {
    propSets: [
      {
        date: new Date('2021-02-08T19:45:37.000Z'),
        private: true,
        verb: 'pushed',
        type: 'PushEvent',
        result: ['commit', 'commits'],
        actionType: undefined,
        subject: {
          preposition: undefined,
          id: 'd4e5d71da8b6cd7b169c090458142527eeb3c0af',
          url:
            'https://github.com/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af',
          title: 'd4e5d71da8b6cd7b169c090458142527eeb3c0af',
          desc: undefined,
          content: 'Added Labor Unions/Sindicals to endorsement section titles',
        },
        actor: { id: 'timfitzzz', url: 'https://github.com/timfitzzz' },
        target: {
          id: 'refs/heads/master',
          title: 'refs/heads/master',
          preposition: 'to',
          url: undefined,
          desc: undefined,
          content: undefined,
        },
        parent: {
          id: 'timfitzzz/nursefornyc',
          title: 'timfitzzz/nursefornyc',
          preposition: 'in',
          url: 'https://github.com/timfitzzz/nursefornyc',
          desc: undefined,
          content: undefined,
        },
      },
      {
        date: new Date('2021-02-08T17:59:04.000Z'),
        private: true,
        verb: 'pushed',
        type: 'PushEvent',
        result: ['commit', 'commits'],
        actionType: undefined,
        subject: {
          preposition: undefined,
          id: 'a0579605d2829a54f58b86a6e9b5f8a412cfa76a',
          url:
            'https://github.com/timfitzzz/nursefornyc/commits/a0579605d2829a54f58b86a6e9b5f8a412cfa76a',
          title: 'a0579605d2829a54f58b86a6e9b5f8a412cfa76a',
          desc: undefined,
          content:
            "Platform/en: Added intro section and finessed the 'more' arrows",
        },
        actor: { id: 'timfitzzz', url: 'https://github.com/timfitzzz' },
        target: {
          id: 'refs/heads/newPlatformDesign',
          title: 'refs/heads/newPlatformDesign',
          preposition: 'to',
          url: undefined,
          desc: undefined,
          content: undefined,
        },
        parent: {
          id: 'timfitzzz/nursefornyc',
          title: 'timfitzzz/nursefornyc',
          preposition: 'in',
          url: 'https://github.com/timfitzzz/nursefornyc',
          desc: undefined,
          content: undefined,
        },
      },
      {
        date: new Date('2021-02-08T17:23:27.000Z'),
        private: true,
        verb: 'pushed',
        type: 'PushEvent',
        result: ['commit', 'commits'],
        actionType: undefined,
        subject: {
          preposition: undefined,
          id: 'b8fe3cfef2055a150b3af1c9d47911d1d0368c65',
          url:
            'https://github.com/timfitzzz/nursefornyc/commits/b8fe3cfef2055a150b3af1c9d47911d1d0368c65',
          title: 'b8fe3cfef2055a150b3af1c9d47911d1d0368c65',
          desc: undefined,
          content: 'Added new Endorsements',
        },
        actor: { id: 'timfitzzz', url: 'https://github.com/timfitzzz' },
        target: {
          id: 'refs/heads/master',
          title: 'refs/heads/master',
          preposition: 'to',
          url: undefined,
          desc: undefined,
          content: undefined,
        },
        parent: {
          id: 'timfitzzz/nursefornyc',
          title: 'timfitzzz/nursefornyc',
          preposition: 'in',
          url: 'https://github.com/timfitzzz/nursefornyc',
          desc: undefined,
          content: undefined,
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 8, 2021',
          actor: 'timfitzzz',
          verb: 'pushed',
          subject: 'd4e5d71da8b6cd7b169c090458142527eeb3c0af',
          content: 'Added Labor Unions/Sindicals to endorsement section titles',
          target: 'to refs/heads/master',
          parent: 'in timfitzzz/nursefornyc',
        },
        md: {
          date: 'February 8, 2021',
          actor: '[timfitzzz](https://github.com/timfitzzz)',
          verb: 'pushed',
          subject:
            '[d4e5d71da8b6cd7b169c090458142527eeb3c0af](https://github.com/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af)',
          content: 'Added Labor Unions/Sindicals to endorsement section titles',
          target: 'to refs/heads/master',
          parent:
            'in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
        },
      },
      {
        plain: {
          date: 'February 8, 2021',
          actor: 'timfitzzz',
          verb: 'pushed',
          subject: 'a0579605d2829a54f58b86a6e9b5f8a412cfa76a',
          content:
            "Platform/en: Added intro section and finessed the 'more' arrows",
          target: 'to refs/heads/newPlatformDesign',
          parent: 'in timfitzzz/nursefornyc',
        },
        md: {
          date: 'February 8, 2021',
          actor: '[timfitzzz](https://github.com/timfitzzz)',
          verb: 'pushed',
          subject:
            '[a0579605d2829a54f58b86a6e9b5f8a412cfa76a](https://github.com/timfitzzz/nursefornyc/commits/a0579605d2829a54f58b86a6e9b5f8a412cfa76a)',
          content:
            "Platform/en: Added intro section and finessed the 'more' arrows",
          target: 'to refs/heads/newPlatformDesign',
          parent:
            'in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
        },
      },
      {
        plain: {
          date: 'February 8, 2021',
          actor: 'timfitzzz',
          verb: 'pushed',
          subject: 'b8fe3cfef2055a150b3af1c9d47911d1d0368c65',
          content: 'Added new Endorsements',
          target: 'to refs/heads/master',
          parent: 'in timfitzzz/nursefornyc',
        },
        md: {
          date: 'February 8, 2021',
          actor: '[timfitzzz](https://github.com/timfitzzz)',
          verb: 'pushed',
          subject:
            '[b8fe3cfef2055a150b3af1c9d47911d1d0368c65](https://github.com/timfitzzz/nursefornyc/commits/b8fe3cfef2055a150b3af1c9d47911d1d0368c65)',
          content: 'Added new Endorsements',
          target: 'to refs/heads/master',
          parent:
            'in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['February 8, 2021'],
            'timfitzzz pushed 2 commits to refs/heads/master in timfitzzz/nursefornyc',
            'd4e5d71da8b6cd7b169c090458142527eeb3c0af: Added Labor Unions/Sindicals to endorsement section titles',
            'b8fe3cfef2055a150b3af1c9d47911d1d0368c65: Added new Endorsements',
          ],
          md: [
            ['February 8, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) pushed 2 commits to refs/heads/master in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
            '[d4e5d71da8b6cd7b169c090458142527eeb3c0af](https://github.com/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af): Added Labor Unions/Sindicals to endorsement section titles',
            '[b8fe3cfef2055a150b3af1c9d47911d1d0368c65](https://github.com/timfitzzz/nursefornyc/commits/b8fe3cfef2055a150b3af1c9d47911d1d0368c65): Added new Endorsements',
          ],
        },
        {
          plain: [
            ['February 8, 2021'],
            'timfitzzz pushed commit a0579605d2829a54f58b86a6e9b5f8a412cfa76a to refs/heads/newPlatformDesign in timfitzzz/nursefornyc',
            "Platform/en: Added intro section and finessed the 'more' arrows",
          ],
          md: [
            ['February 8, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) pushed commit [a0579605d2829a54f58b86a6e9b5f8a412cfa76a](https://github.com/timfitzzz/nursefornyc/commits/a0579605d2829a54f58b86a6e9b5f8a412cfa76a) to refs/heads/newPlatformDesign in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
            "Platform/en: Added intro section and finessed the 'more' arrows",
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 8, 2021'],
            'timfitzzz pushed commit d4e5d71da8b6cd7b169c090458142527eeb3c0af to refs/heads/master in timfitzzz/nursefornyc',
            'Added Labor Unions/Sindicals to endorsement section titles',
          ],
          md: [
            ['February 8, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) pushed commit [d4e5d71da8b6cd7b169c090458142527eeb3c0af](https://github.com/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af) to refs/heads/master in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
            'Added Labor Unions/Sindicals to endorsement section titles',
          ],
        },
        {
          plain: [
            ['February 8, 2021'],
            'timfitzzz pushed commit a0579605d2829a54f58b86a6e9b5f8a412cfa76a to refs/heads/newPlatformDesign in timfitzzz/nursefornyc',
            "Platform/en: Added intro section and finessed the 'more' arrows",
          ],
          md: [
            ['February 8, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) pushed commit [a0579605d2829a54f58b86a6e9b5f8a412cfa76a](https://github.com/timfitzzz/nursefornyc/commits/a0579605d2829a54f58b86a6e9b5f8a412cfa76a) to refs/heads/newPlatformDesign in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
            "Platform/en: Added intro section and finessed the 'more' arrows",
          ],
        },
        {
          plain: [
            ['February 8, 2021'],
            'timfitzzz pushed commit b8fe3cfef2055a150b3af1c9d47911d1d0368c65 to refs/heads/master in timfitzzz/nursefornyc',
            'Added new Endorsements',
          ],
          md: [
            ['February 8, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) pushed commit [b8fe3cfef2055a150b3af1c9d47911d1d0368c65](https://github.com/timfitzzz/nursefornyc/commits/b8fe3cfef2055a150b3af1c9d47911d1d0368c65) to refs/heads/master in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
            'Added new Endorsements',
          ],
        },
      ],
    },
    events: [
      {
        id: '15110828004',
        type: 'PushEvent',
        actor: {
          id: 3611294,
          login: 'timfitzzz',
          display_login: 'timfitzzz',
          gravatar_id: '',
          url: 'https://api.github.com/users/timfitzzz',
          avatar_url: 'https://avatars.githubusercontent.com/u/3611294?',
        },
        repo: {
          id: 277394326,
          name: 'timfitzzz/nursefornyc',
          url: 'https://api.github.com/repos/timfitzzz/nursefornyc',
        },
        payload: {
          push_id: 6496663910,
          size: 1,
          distinct_size: 1,
          ref: 'refs/heads/master',
          head: 'd4e5d71da8b6cd7b169c090458142527eeb3c0af',
          before: 'b8fe3cfef2055a150b3af1c9d47911d1d0368c65',
          commits: [
            {
              sha: 'd4e5d71da8b6cd7b169c090458142527eeb3c0af',
              author: {
                email: 'diceytroop@gmail.com',
                name: 'Tim Fitzgerald',
              },
              message:
                'Added Labor Unions/Sindicals to endorsement section titles',
              distinct: true,
              url:
                'https://api.github.com/repos/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af',
            },
          ],
        },
        public: false,
        created_at: '2021-02-08T19:45:37Z',
      },
      {
        id: '15109540626',
        type: 'PushEvent',
        actor: {
          id: 3611294,
          login: 'timfitzzz',
          display_login: 'timfitzzz',
          gravatar_id: '',
          url: 'https://api.github.com/users/timfitzzz',
          avatar_url: 'https://avatars.githubusercontent.com/u/3611294?',
        },
        repo: {
          id: 277394326,
          name: 'timfitzzz/nursefornyc',
          url: 'https://api.github.com/repos/timfitzzz/nursefornyc',
        },
        payload: {
          push_id: 6496053134,
          size: 1,
          distinct_size: 1,
          ref: 'refs/heads/newPlatformDesign',
          head: 'a0579605d2829a54f58b86a6e9b5f8a412cfa76a',
          before: '18fafcb17689f6d7bfb12a058c21dbe9360646b2',
          commits: [
            {
              sha: 'a0579605d2829a54f58b86a6e9b5f8a412cfa76a',
              author: {
                email: 'diceytroop@gmail.com',
                name: 'Tim Fitzgerald',
              },
              message:
                "Platform/en: Added intro section and finessed the 'more' arrows",
              distinct: true,
              url:
                'https://api.github.com/repos/timfitzzz/nursefornyc/commits/a0579605d2829a54f58b86a6e9b5f8a412cfa76a',
            },
          ],
        },
        public: false,
        created_at: '2021-02-08T17:59:04Z',
      },
      {
        id: '15109079448',
        type: 'PushEvent',
        actor: {
          id: 3611294,
          login: 'timfitzzz',
          display_login: 'timfitzzz',
          gravatar_id: '',
          url: 'https://api.github.com/users/timfitzzz',
          avatar_url: 'https://avatars.githubusercontent.com/u/3611294?',
        },
        repo: {
          id: 277394326,
          name: 'timfitzzz/nursefornyc',
          url: 'https://api.github.com/repos/timfitzzz/nursefornyc',
        },
        payload: {
          push_id: 6495837013,
          size: 1,
          distinct_size: 1,
          ref: 'refs/heads/master',
          head: 'b8fe3cfef2055a150b3af1c9d47911d1d0368c65',
          before: '49d021c1c4cecedb0620d17c4e3e3b27fcd7fa62',
          commits: [
            {
              sha: 'b8fe3cfef2055a150b3af1c9d47911d1d0368c65',
              author: {
                email: 'diceytroop@gmail.com',
                name: 'Tim Fitzgerald',
              },
              message: 'Added new Endorsements',
              distinct: true,
              url:
                'https://api.github.com/repos/timfitzzz/nursefornyc/commits/b8fe3cfef2055a150b3af1c9d47911d1d0368c65',
            },
          ],
        },
        public: false,
        created_at: '2021-02-08T17:23:27Z',
      },
    ],
  },
];
// PushEventTests["testEvents"] = [
//   {
//     resultingPropSets: 1,
//     testStrings: {
//       summary: {
//         plain:
//           "timfitzzz pushed commit d4e5d71da8b6cd7b169c090458142527eeb3c0af to timfitzzz/nursefornyc",
//         md:
//           "[timfitzzz](https://github.com/timfitzzz) pushed commit [d4e5d71da8b6cd7b169c090458142527eeb3c0af](https://github.com/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af) to [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)",
//       },
//       actionTypes: [],
//       verbs: ["pushed"],
//       actor: {
//         plain: `timfitzzz pushed`,
//         md: `[timfitzzz](https://github.com/timfitzzz) pushed`,
//       },
//       result: "commit",
//       subject: {
//         plain: [
//           [
//             "d4e5d71da8b6cd7b169c090458142527eeb3c0af",
//             "Added Labor Unions/Sindicals to endorsement section titles",
//           ],
//         ],
//         md: [
//           [
//             "[d4e5d71da8b6cd7b169c090458142527eeb3c0af](https://github.com/timfitzzz/nursefornyc/commits/d4e5d71da8b6cd7b169c090458142527eeb3c0af)",
//             "Added Labor Unions/Sindicals to endorsement section titles",
//           ],
//         ],
//       },
//       target: {
//         plain: [["to timfitzzz/nursefornyc"]],
//         md: [
//           [
//             "to [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)",
//           ],
//         ],
//       },
//     },
//     event: ,
//   },
// ]

export default PushEventTests;

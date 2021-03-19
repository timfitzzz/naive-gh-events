import { TypeTestData } from '../../src/types';

const DeleteEventTests: TypeTestData = {
  testEvents: {
    branch: [],
  },
};

DeleteEventTests.testEvents.branch = [
  {
    propSets: [
      {
        date: new Date('2021-02-13T05:22:50Z'),
        private: false,
        type: 'DeleteEvent',
        verb: 'deleted',
        result: ['a branch', 'branches'],
        actionType: 'branch',
        subject: {
          id: 'feature/dirs-with-spaces',
          url: undefined,
          content: undefined,
          desc: undefined,
          preposition: undefined,
          title: 'feature/dirs-with-spaces',
        },
        actor: {
          id: 'rixtech',
          url: 'https://github.com/rixtech',
        },
        target: undefined,
        parent: {
          id: 'rixtech/webp2gif',
          url: 'https://github.com/rixtech/webp2gif',
          desc: undefined,
          preposition: 'in',
          content: undefined,
          title: 'rixtech/webp2gif',
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 13, 2021',
          actor: 'rixtech',
          verb: 'deleted',
          subject: 'feature/dirs-with-spaces',
          content: undefined,
          target: undefined,
          parent: 'in rixtech/webp2gif',
        },
        md: {
          date: 'February 13, 2021',
          actor: '[rixtech](https://github.com/rixtech)',
          verb: 'deleted',
          subject: 'feature/dirs-with-spaces',
          content: undefined,
          target: undefined,
          parent: 'in [rixtech/webp2gif](https://github.com/rixtech/webp2gif)',
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['February 13, 2021'],
            'rixtech deleted a branch feature/dirs-with-spaces in rixtech/webp2gif',
          ],
          md: [
            ['February 13, 2021'],
            '[rixtech](https://github.com/rixtech) deleted a branch feature/dirs-with-spaces in [rixtech/webp2gif](https://github.com/rixtech/webp2gif)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 13, 2021'],
            'rixtech deleted a branch feature/dirs-with-spaces in rixtech/webp2gif',
          ],
          md: [
            ['February 13, 2021'],
            '[rixtech](https://github.com/rixtech) deleted a branch feature/dirs-with-spaces in [rixtech/webp2gif](https://github.com/rixtech/webp2gif)',
          ],
        },
      ],
    },
    events: [
      {
        id: '15171804601',
        type: 'DeleteEvent',
        actor: {
          id: 13712342,
          login: 'rixtech',
          display_login: 'rixtech',
          gravatar_id: '',
          url: 'https://api.github.com/users/rixtech',
          avatar_url: 'https://avatars.githubusercontent.com/u/13712342?',
        },
        repo: {
          id: 334330660,
          name: 'rixtech/webp2gif',
          url: 'https://api.github.com/repos/rixtech/webp2gif',
        },
        payload: {
          ref: 'feature/dirs-with-spaces',
          ref_type: 'branch',
          pusher_type: 'user',
        },
        public: true,
        created_at: '2021-02-13T05:22:50Z',
      },
    ],
  },
  // {
  //   resultingPropSets: 1,
  //   testStrings: {
  //     summary: {
  //       plain:
  //         "rixtech deleted a branch feature/dirs-with-spaces in rixtech/webp2gif",
  //       md:
  //         "[rixtech](https://github.com/rixtech) deleted a branch feature/dirs-with-spaces in [rixtech/webp2gif](https://github.com/rixtech/webp2gif)",
  //     },
  //     verbs: ["deleted"],
  //     actionTypes: ["branch"],
  //     actor: {
  //       plain: "rixtech deleted",
  //       md: "[rixtech](https://github.com/rixtech) deleted",
  //     },
  //     result: "a branch",
  //     subject: {
  //       plain: [["feature/dirs-with-spaces"]],
  //       md: [["feature/dirs-with-spaces"]],
  //     },
  //     parent: {
  //       plain: [["in rixtech/webp2gif"]],
  //       md: [["in [rixtech/webp2gif](https://github.com/rixtech/webp2gif)"]],
  //     },
  //   },
  //   event: ,
  // },
];

export default DeleteEventTests;

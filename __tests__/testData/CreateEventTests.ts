import { TypeTestData } from '../../src/types';

const CreateEventTests: TypeTestData = {
  testEvents: {
    branch: [],
  },
};

CreateEventTests.testEvents.branch = [
  {
    propSets: [
      {
        date: new Date('2021-01-25T23:13:10Z'),
        private: true,
        type: 'CreateEvent',
        verb: 'created',
        result: ['a branch', 'branches'],
        actionType: 'branch',
        subject: {
          id: 'newPlatformDesign',
          url: undefined,
          content: undefined,
          desc: undefined,
          preposition: undefined,
          title: undefined,
        },
        actor: {
          id: 'timfitzzz',
          url: 'https://github.com/timfitzzz',
        },
        target: undefined,
        parent: {
          id: 'timfitzzz/nursefornyc',
          url: 'https://github.com/timfitzzz/nursefornyc',
          desc: undefined,
          preposition: 'in',
          content: undefined,
          title: 'timfitzzz/nursefornyc',
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'January 25, 2021',
          actor: 'timfitzzz',
          verb: 'created',
          subject: 'newPlatformDesign',
          content: undefined,
          target: undefined,
          parent: 'in timfitzzz/nursefornyc',
        },
        md: {
          date: 'January 25, 2021',
          actor: '[timfitzzz](https://github.com/timfitzzz)',
          verb: 'created',
          subject: 'newPlatformDesign',
          content: undefined,
          target: undefined,
          parent:
            'in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['January 25, 2021'],
            'timfitzzz created a branch newPlatformDesign in timfitzzz/nursefornyc',
          ],
          md: [
            ['January 25, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) created a branch newPlatformDesign in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['January 25, 2021'],
            'timfitzzz created a branch newPlatformDesign in timfitzzz/nursefornyc',
          ],
          md: [
            ['January 25, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) created a branch newPlatformDesign in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
          ],
        },
      ],
    },
    events: [
      {
        id: '14943514016',
        type: 'CreateEvent',
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
          ref: 'newPlatformDesign',
          ref_type: 'branch',
          master_branch: 'master',
          description: 'Sandy Nurse for NY City Council campaign site',
          pusher_type: 'user',
        },
        public: false,
        created_at: '2021-01-25T23:13:10Z',
      },
    ],
  },
];

export default CreateEventTests;

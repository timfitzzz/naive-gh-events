import { isUndefined } from 'lodash';
import { TypeTestData } from './';

const CreateEventTests: TypeTestData = {
  testEvents: {
    branch: [],
    repository: [],
  },
};

CreateEventTests.testEvents.repository = [
  {
    propSets: [
      {
        date: new Date('2021-02-23T18:48:45Z'),
        private: false,
        type: 'CreateEvent',
        actor: {
          id: 'pgillan145',
          url: 'https://github.com/pgillan145',
        },
        verb: 'created',
        result: ['repository', 'repositories'],
        actionType: 'repository',
        subject: {
          id: 'pgillan145/AudioPulse',
          title: 'pgillan145/AudioPulse',
          url: 'https://github.com/pgillan145/AudioPulse',
          preposition: undefined,
          desc: undefined,
          content: undefined,
        },
        target: undefined,
        parent: undefined,
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 23, 2021',
          actor: 'pgillan145',
          verb: 'created',
          subject: 'pgillan145/AudioPulse',
          content: undefined,
          target: undefined,
          parent: undefined,
        },
        md: {
          date: 'February 23, 2021',
          actor: '[pgillan145](https://github.com/pgillan145)',
          verb: 'created',
          subject:
            '[pgillan145/AudioPulse](https://github.com/pgillan145/AudioPulse)',
          content: undefined,
          target: undefined,
          parent: undefined,
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['February 23, 2021'],
            'pgillan145 created repository pgillan145/AudioPulse',
          ],
          md: [
            ['February 23, 2021'],
            '[pgillan145](https://github.com/pgillan145) created repository [pgillan145/AudioPulse](https://github.com/pgillan145/AudioPulse)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 23, 2021'],
            'pgillan145 created repository pgillan145/AudioPulse',
          ],
          md: [
            ['February 23, 2021'],
            '[pgillan145](https://github.com/pgillan145) created repository [pgillan145/AudioPulse](https://github.com/pgillan145/AudioPulse)',
          ],
        },
      ],
    },
    events: [
      {
        id: '15289978092',
        type: 'CreateEvent',
        actor: {
          id: 18201040,
          login: 'pgillan145',
          display_login: 'pgillan145',
          gravatar_id: '',
          url: 'https://api.github.com/users/pgillan145',
          avatar_url: 'https://avatars.githubusercontent.com/u/18201040?',
        },
        repo: {
          id: 341655928,
          name: 'pgillan145/AudioPulse',
          url: 'https://api.github.com/repos/pgillan145/AudioPulse',
        },
        payload: {
          ref: null,
          ref_type: 'repository',
          master_branch: 'main',
          description: null,
          pusher_type: 'user',
        },
        public: true,
        created_at: '2021-02-23T18:48:45Z',
      },
    ],
  },
];

CreateEventTests.testEvents.branch = [
  {
    propSets: [
      {
        date: new Date('2021-01-25T23:13:10Z'),
        private: true,
        type: 'CreateEvent',
        verb: 'created',
        result: ['branch', 'branches'],
        actionType: 'branch',
        subject: {
          id: 'newPlatformDesign',
          url: undefined,
          content: undefined,
          desc: undefined,
          preposition: undefined,
          title: 'newPlatformDesign',
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
            'timfitzzz created branch newPlatformDesign in timfitzzz/nursefornyc',
          ],
          md: [
            ['January 25, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) created branch newPlatformDesign in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['January 25, 2021'],
            'timfitzzz created branch newPlatformDesign in timfitzzz/nursefornyc',
          ],
          md: [
            ['January 25, 2021'],
            '[timfitzzz](https://github.com/timfitzzz) created branch newPlatformDesign in [timfitzzz/nursefornyc](https://github.com/timfitzzz/nursefornyc)',
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

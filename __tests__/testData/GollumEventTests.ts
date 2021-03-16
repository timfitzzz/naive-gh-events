import { TypeTestData } from '../../src/types';

const GollumEventTests: TypeTestData = {
  testEvents: {
    created: [],
    edited: [],
  },
};

GollumEventTests.testEvents.created = [
  {
    propSets: [
      {
        date: new Date('2021-02-19T19:12:30Z'),
        private: false,
        type: 'GollumEvent',
        verb: 'created',
        result: ['wiki page', 'wiki pages'],
        actionType: 'created',
        actor: {
          id: 'kii-chan-reloaded',
          url: 'https://github.com/kii-chan-reloaded',
        },
        subject: {
          id: 'Pain',
          url:
            'https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain',
          title: 'Pain',
          desc: undefined,
          preposition: undefined,
          content: undefined,
        },
        target: undefined,
        parent: {
          id: 'kii-chan-reloaded/GeneticChickengineering',
          url: 'https://github.com/kii-chan-reloaded/GeneticChickengineering',
          desc: undefined,
          preposition: 'in',
          content: undefined,
          title: 'kii-chan-reloaded/GeneticChickengineering',
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 19, 2021',
          actor: 'kii-chan-reloaded',
          verb: 'created',
          subject: 'Pain',
          target: undefined,
          parent: 'in kii-chan-reloaded/GeneticChickengineering',
          content: undefined,
        },
        md: {
          date: 'February 19, 2021',
          actor: '[kii-chan-reloaded](https://github.com/kii-chan-reloaded)',
          verb: 'created',
          subject:
            '[Pain](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain)',
          target: undefined,
          parent:
            'in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          content: undefined,
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['February 19, 2021'],
            'kii-chan-reloaded created wiki page Pain in kii-chan-reloaded/GeneticChickengineering',
          ],
          md: [
            ['February 19, 2021'],
            '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) created wiki page [Pain](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain) in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 19, 2021'],
            'kii-chan-reloaded created wiki page Pain in kii-chan-reloaded/GeneticChickengineering',
          ],
          md: [
            ['February 19, 2021'],
            '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) created wiki page [Pain](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain) in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          ],
        },
      ],
    },
    events: [
      {
        id: '15249156818',
        type: 'GollumEvent',
        actor: {
          id: 15570802,
          login: 'kii-chan-reloaded',
          display_login: 'kii-chan-reloaded',
          gravatar_id: '',
          url: 'https://api.github.com/users/kii-chan-reloaded',
          avatar_url: 'https://avatars.githubusercontent.com/u/15570802?',
        },
        repo: {
          id: 330191424,
          name: 'kii-chan-reloaded/GeneticChickengineering',
          url:
            'https://api.github.com/repos/kii-chan-reloaded/GeneticChickengineering',
        },
        payload: {
          pages: [
            {
              page_name: 'Pain',
              title: 'Pain',
              summary: null,
              action: 'created',
              sha: '000ee63bea0b1033b85af5aa84f68c531ec32e5f',
              html_url:
                'https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain',
            },
          ],
        },
        public: true,
        created_at: '2021-02-19T19:12:30Z',
      },
    ],
  },
];

GollumEventTests.testEvents.edited = [
  {
    propSets: [
      {
        date: new Date('2021-02-19T19:13:30Z'),
        private: false,
        type: 'GollumEvent',
        verb: 'edited',
        result: ['wiki page', 'wiki pages'],
        actionType: 'edited',
        actor: {
          id: 'kii-chan-reloaded',
          url: 'https://github.com/kii-chan-reloaded',
        },
        subject: {
          id: 'Home',
          url:
            'https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home',
          title: 'Home',
          desc: undefined,
          preposition: undefined,
          content: undefined,
        },
        target: undefined,
        parent: {
          id: 'kii-chan-reloaded/GeneticChickengineering',
          url: 'https://github.com/kii-chan-reloaded/GeneticChickengineering',
          desc: undefined,
          preposition: 'in',
          content: undefined,
          title: 'kii-chan-reloaded/GeneticChickengineering',
        },
      },
      {
        date: new Date('2021-02-19T19:13:30Z'),
        private: false,
        type: 'GollumEvent',
        verb: 'edited',
        result: ['wiki page', 'wiki pages'],
        actionType: 'edited',
        actor: {
          id: 'kii-chan-reloaded',
          url: 'https://github.com/kii-chan-reloaded',
        },
        subject: {
          id: 'Settings',
          url:
            'https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings',
          title: 'Settings',
          desc: undefined,
          preposition: undefined,
          content: undefined,
        },
        target: undefined,
        parent: {
          id: 'kii-chan-reloaded/GeneticChickengineering',
          url: 'https://github.com/kii-chan-reloaded/GeneticChickengineering',
          desc: undefined,
          preposition: 'in',
          content: undefined,
          title: 'kii-chan-reloaded/GeneticChickengineering',
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 19, 2021',
          actor: 'kii-chan-reloaded',
          verb: 'edited',
          subject: 'Home',
          target: undefined,
          parent: 'in kii-chan-reloaded/GeneticChickengineering',
          content: undefined,
        },
        md: {
          date: 'February 19, 2021',
          actor: '[kii-chan-reloaded](https://github.com/kii-chan-reloaded)',
          verb: 'edited',
          subject:
            '[Home](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home)',
          target: undefined,
          parent:
            'in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          content: undefined,
        },
      },
      {
        plain: {
          date: 'February 19, 2021',
          actor: 'kii-chan-reloaded',
          verb: 'edited',
          subject: 'Settings',
          target: undefined,
          parent: 'in kii-chan-reloaded/GeneticChickengineering',
          content: undefined,
        },
        md: {
          date: 'February 19, 2021',
          actor: '[kii-chan-reloaded](https://github.com/kii-chan-reloaded)',
          verb: 'edited',
          subject:
            '[Settings](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)',
          target: undefined,
          parent:
            'in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          content: undefined,
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['February 19, 2021', 'February 19, 2021'],
            'kii-chan-reloaded edited 2 wiki pages in kii-chan-reloaded/GeneticChickengineering',
            'Home (https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home)',
            'Settings (https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)',
          ],
          md: [
            ['February 19, 2021', 'February 19, 2021'],
            '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) edited 2 wiki pages in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
            '[Home](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home)',
            '[Settings](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 19, 2021'],
            'kii-chan-reloaded edited wiki page Home in kii-chan-reloaded/GeneticChickengineering',
          ],
          md: [
            ['February 19, 2021'],
            '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) edited wiki page [Home](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home) in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          ],
        },
        {
          plain: [
            ['February 19, 2021'],
            'kii-chan-reloaded edited wiki page Settings in kii-chan-reloaded/GeneticChickengineering',
          ],
          md: [
            ['February 19, 2021'],
            '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) created wiki page [Settings](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings) in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          ],
        },
      ],
    },
    events: [
      {
        id: '15249156818',
        type: 'GollumEvent',
        actor: {
          id: 15570802,
          login: 'kii-chan-reloaded',
          display_login: 'kii-chan-reloaded',
          gravatar_id: '',
          url: 'https://api.github.com/users/kii-chan-reloaded',
          avatar_url: 'https://avatars.githubusercontent.com/u/15570802?',
        },
        repo: {
          id: 330191424,
          name: 'kii-chan-reloaded/GeneticChickengineering',
          url:
            'https://api.github.com/repos/kii-chan-reloaded/GeneticChickengineering',
        },
        payload: {
          pages: [
            {
              page_name: 'Home',
              title: 'Home',
              summary: null,
              action: 'edited',
              sha: '000ee63bea0b1033b85af5aa84f68c531ec32e5f',
              html_url:
                'https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home',
            },
            {
              page_name: 'Settings',
              title: 'Settings',
              summary: null,
              action: 'edited',
              sha: '000ee63bea0b1033b85af5aa84f68c531ec32e5f',
              html_url:
                'https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings',
            },
          ],
        },
        public: true,
        created_at: '2021-02-19T19:13:30Z',
      },
    ],
  },
];

GollumEventTests.testEvents.multiple = [
  {
    propSets: [
      {
        date: new Date('2021-02-19T19:14:30Z'),
        private: false,
        type: 'GollumEvent',
        verb: 'created',
        result: ['a wiki page', 'wiki pages'],
        actionType: 'created',
        actor: {
          id: 'kii-chan-reloaded',
          url: 'https://github.com/kii-chan-reloaded',
        },
        subject: {
          id: 'Pain',
          url:
            'https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain',
          title: 'Pain',
          desc: undefined,
          preposition: undefined,
          content: undefined,
        },
        target: undefined,
        parent: {
          id: 'kii-chan-reloaded/GeneticChickengineering',
          url: 'https://github.com/kii-chan-reloaded/GeneticChickengineering',
          desc: undefined,
          preposition: 'in',
          content: undefined,
          title: 'kii-chan-reloaded/GeneticChickengineering',
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 19, 2021',
          actor: 'kii-chan-reloaded',
          verb: 'created',
          subject: 'Pain',
          target: undefined,
          parent: 'kii-chan-reloaded/GeneticChickengineering',
          content: undefined,
        },
        md: {
          date: 'February 19, 2021',
          actor: '[kii-chan-reloaded](https://github.com/kii-chan-reloaded)',
          verb: 'created',
          subject:
            '[Pain](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain)',
          target: undefined,
          parent:
            'in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          content: undefined,
        },
      },
      {
        plain: {
          date: 'February 19, 2021',
          actor: 'kii-chan-reloaded',
          verb: 'edited',
          subject: 'Home',
          target: undefined,
          parent: 'kii-chan-reloaded/GeneticChickengineering',
          content: undefined,
        },
        md: {
          date: 'February 19, 2021',
          actor: '[kii-chan-reloaded](https://github.com/kii-chan-reloaded)',
          verb: 'edited',
          subject:
            '[Home](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home)',
          target: undefined,
          parent:
            'in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          content: undefined,
        },
      },
      {
        plain: {
          date: 'February 19, 2021',
          actor: 'kii-chan-reloaded',
          verb: 'edited',
          subject: 'Settings',
          target: undefined,
          parent: 'kii-chan-reloaded/GeneticChickengineering',
          content: undefined,
        },
        md: {
          date: 'February 19, 2021',
          actor: '[kii-chan-reloaded](https://github.com/kii-chan-reloaded)',
          verb: 'edited',
          subject:
            '[Settings](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)',
          target: undefined,
          parent:
            'in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          content: undefined,
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['February 19, 2021'],
            'kii-chan-reloaded created wiki page Pain in kii-chan-reloaded/GeneticChickengineering',
          ],
          md: [
            ['February 19, 2021'],
            '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) created wiki page [Pain](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain) in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          ],
        },
        {
          plain: [
            ['February 19, 2021', 'February 19, 2021'],
            'kii-chan-reloaded edited 2 wiki pages in kii-chan-reloaded/GeneticChickengineering',
            'Home (https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home)',
            'Settings (https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)',
          ],
          md: [
            ['February 19, 2021', 'February 19, 2021'],
            '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) edited 2 wiki pages in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
            '[Home](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home)',
            '[Settings](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 19, 2021'],
            'kii-chan-reloaded created wiki page Pain in kii-chan-reloaded/GeneticChickengineering',
          ],
          md: [
            ['February 19, 2021'],
            '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) created wiki page [Pain](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain) in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          ],
        },
        {
          plain: [
            ['February 19, 2021'],
            'kii-chan-reloaded edited wiki page Home in kii-chan-reloaded/GeneticChickengineering',
          ],
          md: [
            ['February 19, 2021'],
            '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) edited wiki page [Home](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home) in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          ],
        },
        {
          plain: [
            ['February 19, 2021'],
            'kii-chan-reloaded edited wiki page Settings in kii-chan-reloaded/GeneticChickengineering',
          ],
          md: [
            ['February 19, 2021'],
            '[kii-chan-reloaded](https://github.com/kii-chan-reloaded) created wiki page [Settings](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings) in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)',
          ],
        },
      ],
    },
    events: [
      {
        id: '15249156818',
        type: 'GollumEvent',
        actor: {
          id: 15570802,
          login: 'kii-chan-reloaded',
          display_login: 'kii-chan-reloaded',
          gravatar_id: '',
          url: 'https://api.github.com/users/kii-chan-reloaded',
          avatar_url: 'https://avatars.githubusercontent.com/u/15570802?',
        },
        repo: {
          id: 330191424,
          name: 'kii-chan-reloaded/GeneticChickengineering',
          url:
            'https://api.github.com/repos/kii-chan-reloaded/GeneticChickengineering',
        },
        payload: {
          pages: [
            {
              page_name: 'Pain',
              title: 'Pain',
              summary: null,
              action: 'created',
              sha: '000ee63bea0b1033b85af5aa84f68c531ec32e5f',
              html_url:
                'https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain',
            },
            {
              page_name: 'Home',
              title: 'Home',
              summary: null,
              action: 'edited',
              sha: '000ee63bea0b1033b85af5aa84f68c531ec32e5f',
              html_url:
                'https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home',
            },
            {
              page_name: 'Settings',
              title: 'Settings',
              summary: null,
              action: 'edited',
              sha: '000ee63bea0b1033b85af5aa84f68c531ec32e5f',
              html_url:
                'https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings',
            },
          ],
        },
        public: true,
        created_at: '2021-02-19T19:14:30Z',
      },
    ],
  },
];

export default GollumEventTests;

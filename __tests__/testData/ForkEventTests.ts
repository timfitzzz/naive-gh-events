import { TypeTestData } from '../../src/types';

const ForkEventTests: TypeTestData = {
  testEvents: {
    none: [],
  },
};

ForkEventTests.testEvents.none = [
  {
    propSets: [
      {
        date: new Date('2021-02-13T05:22:52Z'),
        private: false,
        type: 'ForkEvent',
        verb: 'forked',
        result: ['repository', 'repositories'],
        actionType: undefined,
        subject: {
          id: 298321273,
          title: 'errodringer/ransomware',
          url: 'https://github.com/errodringer/ransomware',
          desc: undefined,
          preposition: undefined,
          content: undefined,
        },
        actor: {
          id: 'shangow',
          url: 'https://github.com/shangow',
        },
        target: {
          title: 'shangow/ransomware',
          url: 'https://github.com/shangow/ransomware',
          desc: 'new repository',
          preposition: 'to',
          id: 338503682,
          content: undefined,
        },
        parent: undefined,
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 13, 2021',
          actor: 'shangow',
          verb: 'forked',
          subject: 'errodringer/ransomware',
          target: 'to new repository shangow/ransomware',
          parent: undefined,
          content: undefined,
        },
        md: {
          date: 'February 13, 2021',
          actor: '[shangow](https://github.com/shangow)',
          verb: 'forked',
          subject:
            '[errodringer/ransomware](https://github.com/errodringer/ransomware)',
          target:
            'to new repository [shangow/ransomware](https://github.com/shangow/ransomware)',
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
            'shangow forked repository errodringer/ransomware to new repository shangow/ransomware',
          ],
          md: [
            ['February 13, 2021'],
            '[shangow](https://github.com/shangow) forked repository [errodringer/ransomware](https://github.com/errodringer/ransomware) to new repository [shangow/ransomware](https://github.com/shangow/ransomware)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 13, 2021'],
            'shangow forked repository errodringer/ransomware to new repository shangow/ransomware',
          ],
          md: [
            ['February 13, 2021'],
            '[shangow](https://github.com/shangow) forked repository [errodringer/ransomware](https://github.com/errodringer/ransomware) to new repository [shangow/ransomware](https://github.com/shangow/ransomware)',
          ],
        },
      ],
    },
    events: [
      {
        id: '15171804647',
        type: 'ForkEvent',
        actor: {
          id: 33128932,
          login: 'shangow',
          display_login: 'shangow',
          gravatar_id: '',
          url: 'https://api.github.com/users/shangow',
          avatar_url: 'https://avatars.githubusercontent.com/u/33128932?',
        },
        repo: {
          id: 298321273,
          name: 'errodringer/ransomware',
          url: 'https://api.github.com/repos/errodringer/ransomware',
        },
        payload: {
          forkee: {
            id: 338503682,
            node_id: 'MDEwOlJlcG9zaXRvcnkzMzg1MDM2ODI=',
            name: 'ransomware',
            full_name: 'shangow/ransomware',
            private: false,
            owner: {
              login: 'shangow',
              id: 33128932,
              node_id: 'MDQ6VXNlcjMzMTI4OTMy',
              avatar_url:
                'https://avatars.githubusercontent.com/u/33128932?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/shangow',
              html_url: 'https://github.com/shangow',
              followers_url: 'https://api.github.com/users/shangow/followers',
              following_url:
                'https://api.github.com/users/shangow/following{/other_user}',
              gists_url: 'https://api.github.com/users/shangow/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/shangow/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/shangow/subscriptions',
              organizations_url: 'https://api.github.com/users/shangow/orgs',
              repos_url: 'https://api.github.com/users/shangow/repos',
              events_url:
                'https://api.github.com/users/shangow/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/shangow/received_events',
              type: 'User',
              site_admin: false,
            },
            html_url: 'https://github.com/shangow/ransomware',
            description: 'Ransomware programado en Python',
            fork: true,
            url: 'https://api.github.com/repos/shangow/ransomware',
            forks_url: 'https://api.github.com/repos/shangow/ransomware/forks',
            keys_url:
              'https://api.github.com/repos/shangow/ransomware/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/shangow/ransomware/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/shangow/ransomware/teams',
            hooks_url: 'https://api.github.com/repos/shangow/ransomware/hooks',
            issue_events_url:
              'https://api.github.com/repos/shangow/ransomware/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/shangow/ransomware/events',
            assignees_url:
              'https://api.github.com/repos/shangow/ransomware/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/shangow/ransomware/branches{/branch}',
            tags_url: 'https://api.github.com/repos/shangow/ransomware/tags',
            blobs_url:
              'https://api.github.com/repos/shangow/ransomware/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/shangow/ransomware/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/shangow/ransomware/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/shangow/ransomware/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/shangow/ransomware/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/shangow/ransomware/languages',
            stargazers_url:
              'https://api.github.com/repos/shangow/ransomware/stargazers',
            contributors_url:
              'https://api.github.com/repos/shangow/ransomware/contributors',
            subscribers_url:
              'https://api.github.com/repos/shangow/ransomware/subscribers',
            subscription_url:
              'https://api.github.com/repos/shangow/ransomware/subscription',
            commits_url:
              'https://api.github.com/repos/shangow/ransomware/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/shangow/ransomware/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/shangow/ransomware/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/shangow/ransomware/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/shangow/ransomware/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/shangow/ransomware/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/shangow/ransomware/merges',
            archive_url:
              'https://api.github.com/repos/shangow/ransomware/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/shangow/ransomware/downloads',
            issues_url:
              'https://api.github.com/repos/shangow/ransomware/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/shangow/ransomware/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/shangow/ransomware/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/shangow/ransomware/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/shangow/ransomware/labels{/name}',
            releases_url:
              'https://api.github.com/repos/shangow/ransomware/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/shangow/ransomware/deployments',
            created_at: '2021-02-13T05:22:51Z',
            updated_at: '2021-02-07T05:20:54Z',
            pushed_at: '2020-10-08T13:16:16Z',
            git_url: 'git://github.com/shangow/ransomware.git',
            ssh_url: 'git@github.com:shangow/ransomware.git',
            clone_url: 'https://github.com/shangow/ransomware.git',
            svn_url: 'https://github.com/shangow/ransomware',
            homepage: null,
            size: 5049,
            stargazers_count: 0,
            watchers_count: 0,
            language: null,
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'main',
            public: true,
          },
        },
        public: true,
        created_at: '2021-02-13T05:22:52Z',
      },
    ],
  },
];
// ForkEventTests["testEvents"] = [
//   {
//     resultingPropSets: 1,
//     testStrings: {
//       summary: {
//         plain:
//           "shangow forked a repo errodringer/ransomware to new repo shangow/ransomware",
//         md:
//           "[shangow](https://github.com/shangow) forked a repo [errodringer/ransomware](https://github.com/errodringer/ransomware) to new repo [shangow/ransomware](https://github.com/shangow/ransomware)",
//       },
//       actor: {
//         plain: "shangow forked",
//         md: "[shangow](https://github.com/shangow) forked",
//       },
//       verbs: ["forked"],
//       actionTypes: [],
//       result: "a repo",
//       subject: {
//         plain: [["errodringer/ransomware"]],
//         md: [
//           [
//             "[errodringer/ransomware](https://github.com/errodringer/ransomware)",
//           ],
//         ],
//       },
//       target: {
//         plain: [["to new repo shangow/ransomware"]],
//         md: [
//           [
//             "to new repo [shangow/ransomware](https://github.com/shangow/ransomware)",
//           ],
//         ],
//       },
//     },
//     event:
//   },
// ]

export default ForkEventTests;

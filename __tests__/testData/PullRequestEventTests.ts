import { TypeTestData } from './';

const PullRequestEventTests: TypeTestData = {
  testEvents: {
    closed: [],
  },
};

PullRequestEventTests.testEvents.closed = [
  {
    propSets: [
      {
        date: new Date('2020-12-15T19:24:20Z'),
        private: false,
        type: 'PullRequestEvent',
        actor: {
          id: 'timfitzzz',
          url: 'https://github.com/timfitzzz',
        },
        verb: 'closed',
        result: ['pull request', 'pull requests'],
        actionType: 'closed',
        subject: {
          id: 1,
          title: 'Bringing up to date with current version',
          url: 'https://github.com/timfitzzz/gatsby-theme-localization/pull/1',
          desc: undefined,
          preposition: undefined,
          content: undefined,
        },
        target: undefined,
        parent: {
          id: 'timfitzzz/gatsby-theme-localization',
          url: 'https://github.com/timfitzzz/gatsby-theme-localization',
          desc: undefined,
          preposition: 'in',
          content: undefined,
          title: 'timfitzzz/gatsby-theme-localization',
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'December 15, 2020',
          actor: 'timfitzzz',
          verb: 'closed',
          subject: 'Bringing up to date with current version',
          content: undefined,
          target: undefined,
          parent: 'in timfitzzz/gatsby-theme-localization',
        },
        md: {
          date: 'December 15, 2020',
          actor: '[timfitzzz](https://github.com/timfitzzz)',
          verb: 'closed',
          subject:
            '[Bringing up to date with current version](https://github.com/timfitzzz/gatsby-theme-localization/pull/1)',
          content: undefined,
          target: undefined,
          parent:
            'in [timfitzzz/gatsby-theme-localization](https://github.com/timfitzzz/gatsby-theme-localization)',
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['December 15, 2020'],
            'timfitzzz closed pull request Bringing up to date with current version in timfitzzz/gatsby-theme-localization',
          ],
          md: [
            ['December 15, 2020'],
            '[timfitzzz](https://github.com/timfitzzz) closed pull request [Bringing up to date with current version](https://github.com/timfitzzz/gatsby-theme-localization/pull/1) in [timfitzzz/gatsby-theme-localization](https://github.com/timfitzzz/gatsby-theme-localization)',
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['December 15, 2020'],
            'timfitzzz closed pull request Bringing up to date with current version in timfitzzz/gatsby-theme-localization',
          ],
          md: [
            ['December 15, 2020'],
            '[timfitzzz](https://github.com/timfitzzz) closed pull request [Bringing up to date with current version](https://github.com/timfitzzz/gatsby-theme-localization/pull/1) in [timfitzzz/gatsby-theme-localization](https://github.com/timfitzzz/gatsby-theme-localization)',
          ],
        },
      ],
    },
    events: [
      {
        id: '14545273529',
        type: 'PullRequestEvent',
        actor: {
          id: 3611294,
          login: 'timfitzzz',
          display_login: 'timfitzzz',
          gravatar_id: '',
          url: 'https://api.github.com/users/timfitzzz',
          avatar_url: 'https://avatars.githubusercontent.com/u/3611294?',
        },
        repo: {
          id: 279427650,
          name: 'timfitzzz/gatsby-theme-localization',
          url:
            'https://api.github.com/repos/timfitzzz/gatsby-theme-localization',
        },
        payload: {
          action: 'closed',
          number: 1,
          pull_request: {
            url:
              'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/pulls/1',
            id: 540608017,
            node_id: 'MDExOlB1bGxSZXF1ZXN0NTQwNjA4MDE3',
            html_url:
              'https://github.com/timfitzzz/gatsby-theme-localization/pull/1',
            diff_url:
              'https://github.com/timfitzzz/gatsby-theme-localization/pull/1.diff',
            patch_url:
              'https://github.com/timfitzzz/gatsby-theme-localization/pull/1.patch',
            issue_url:
              'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/issues/1',
            number: 1,
            state: 'closed',
            locked: false,
            title: 'Bringing up to date with current version',
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
            body: '',
            created_at: '2020-12-15T19:23:48Z',
            updated_at: '2020-12-15T19:24:19Z',
            closed_at: '2020-12-15T19:24:19Z',
            merged_at: '2020-12-15T19:24:19Z',
            merge_commit_sha: 'e81f83cfb8f488a2837b4260c926f6319ee358a8',
            assignee: null,
            assignees: [],
            requested_reviewers: [],
            requested_teams: [],
            labels: [],
            milestone: null,
            draft: false,
            commits_url:
              'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/pulls/1/commits',
            review_comments_url:
              'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/pulls/1/comments',
            review_comment_url:
              'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/pulls/comments{/number}',
            comments_url:
              'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/issues/1/comments',
            statuses_url:
              'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/statuses/f087c57b4efaed83904a737e3da4b58617628795',
            head: {
              label: 'onestopjs:master',
              ref: 'master',
              sha: 'f087c57b4efaed83904a737e3da4b58617628795',
              user: {
                login: 'onestopjs',
                id: 50118937,
                node_id: 'MDQ6VXNlcjUwMTE4OTM3',
                avatar_url:
                  'https://avatars1.githubusercontent.com/u/50118937?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/onestopjs',
                html_url: 'https://github.com/onestopjs',
                followers_url:
                  'https://api.github.com/users/onestopjs/followers',
                following_url:
                  'https://api.github.com/users/onestopjs/following{/other_user}',
                gists_url:
                  'https://api.github.com/users/onestopjs/gists{/gist_id}',
                starred_url:
                  'https://api.github.com/users/onestopjs/starred{/owner}{/repo}',
                subscriptions_url:
                  'https://api.github.com/users/onestopjs/subscriptions',
                organizations_url:
                  'https://api.github.com/users/onestopjs/orgs',
                repos_url: 'https://api.github.com/users/onestopjs/repos',
                events_url:
                  'https://api.github.com/users/onestopjs/events{/privacy}',
                received_events_url:
                  'https://api.github.com/users/onestopjs/received_events',
                type: 'User',
                site_admin: false,
              },
              repo: {
                id: 203991426,
                node_id: 'MDEwOlJlcG9zaXRvcnkyMDM5OTE0MjY=',
                name: 'gatsby-theme-localization',
                full_name: 'onestopjs/gatsby-theme-localization',
                private: false,
                owner: {
                  login: 'onestopjs',
                  id: 50118937,
                  node_id: 'MDQ6VXNlcjUwMTE4OTM3',
                  avatar_url:
                    'https://avatars1.githubusercontent.com/u/50118937?v=4',
                  gravatar_id: '',
                  url: 'https://api.github.com/users/onestopjs',
                  html_url: 'https://github.com/onestopjs',
                  followers_url:
                    'https://api.github.com/users/onestopjs/followers',
                  following_url:
                    'https://api.github.com/users/onestopjs/following{/other_user}',
                  gists_url:
                    'https://api.github.com/users/onestopjs/gists{/gist_id}',
                  starred_url:
                    'https://api.github.com/users/onestopjs/starred{/owner}{/repo}',
                  subscriptions_url:
                    'https://api.github.com/users/onestopjs/subscriptions',
                  organizations_url:
                    'https://api.github.com/users/onestopjs/orgs',
                  repos_url: 'https://api.github.com/users/onestopjs/repos',
                  events_url:
                    'https://api.github.com/users/onestopjs/events{/privacy}',
                  received_events_url:
                    'https://api.github.com/users/onestopjs/received_events',
                  type: 'User',
                  site_admin: false,
                },
                html_url:
                  'https://github.com/onestopjs/gatsby-theme-localization',
                description: 'Opionated solution for Gatsby localization',
                fork: false,
                url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization',
                forks_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/forks',
                keys_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/keys{/key_id}',
                collaborators_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/collaborators{/collaborator}',
                teams_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/teams',
                hooks_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/hooks',
                issue_events_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/issues/events{/number}',
                events_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/events',
                assignees_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/assignees{/user}',
                branches_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/branches{/branch}',
                tags_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/tags',
                blobs_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/git/blobs{/sha}',
                git_tags_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/git/tags{/sha}',
                git_refs_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/git/refs{/sha}',
                trees_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/git/trees{/sha}',
                statuses_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/statuses/{sha}',
                languages_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/languages',
                stargazers_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/stargazers',
                contributors_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/contributors',
                subscribers_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/subscribers',
                subscription_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/subscription',
                commits_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/commits{/sha}',
                git_commits_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/git/commits{/sha}',
                comments_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/comments{/number}',
                issue_comment_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/issues/comments{/number}',
                contents_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/contents/{+path}',
                compare_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/compare/{base}...{head}',
                merges_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/merges',
                archive_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/{archive_format}{/ref}',
                downloads_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/downloads',
                issues_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/issues{/number}',
                pulls_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/pulls{/number}',
                milestones_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/milestones{/number}',
                notifications_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/notifications{?since,all,participating}',
                labels_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/labels{/name}',
                releases_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/releases{/id}',
                deployments_url:
                  'https://api.github.com/repos/onestopjs/gatsby-theme-localization/deployments',
                created_at: '2019-08-23T12:09:38Z',
                updated_at: '2020-11-23T16:08:00Z',
                pushed_at: '2020-12-11T19:10:52Z',
                git_url:
                  'git://github.com/onestopjs/gatsby-theme-localization.git',
                ssh_url:
                  'git@github.com:onestopjs/gatsby-theme-localization.git',
                clone_url:
                  'https://github.com/onestopjs/gatsby-theme-localization.git',
                svn_url:
                  'https://github.com/onestopjs/gatsby-theme-localization',
                homepage: 'https://npmjs.com/package/gatsby-theme-localization',
                size: 4263,
                stargazers_count: 11,
                watchers_count: 11,
                language: 'TypeScript',
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                forks_count: 3,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 3,
                license: {
                  key: 'mit',
                  name: 'MIT License',
                  spdx_id: 'MIT',
                  url: 'https://api.github.com/licenses/mit',
                  node_id: 'MDc6TGljZW5zZTEz',
                },
                forks: 3,
                open_issues: 3,
                watchers: 11,
                default_branch: 'master',
              },
            },
            base: {
              label: 'timfitzzz:master',
              ref: 'master',
              sha: 'b52302d84f1360a68dd5fa6f16ebc7a87dfc1ca0',
              user: {
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
              repo: {
                id: 279427650,
                node_id: 'MDEwOlJlcG9zaXRvcnkyNzk0Mjc2NTA=',
                name: 'gatsby-theme-localization',
                full_name: 'timfitzzz/gatsby-theme-localization',
                private: false,
                owner: {
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
                html_url:
                  'https://github.com/timfitzzz/gatsby-theme-localization',
                description: 'Opionated solution for Gatsby localization',
                fork: true,
                url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization',
                forks_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/forks',
                keys_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/keys{/key_id}',
                collaborators_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/collaborators{/collaborator}',
                teams_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/teams',
                hooks_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/hooks',
                issue_events_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/issues/events{/number}',
                events_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/events',
                assignees_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/assignees{/user}',
                branches_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/branches{/branch}',
                tags_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/tags',
                blobs_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/git/blobs{/sha}',
                git_tags_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/git/tags{/sha}',
                git_refs_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/git/refs{/sha}',
                trees_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/git/trees{/sha}',
                statuses_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/statuses/{sha}',
                languages_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/languages',
                stargazers_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/stargazers',
                contributors_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/contributors',
                subscribers_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/subscribers',
                subscription_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/subscription',
                commits_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/commits{/sha}',
                git_commits_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/git/commits{/sha}',
                comments_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/comments{/number}',
                issue_comment_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/issues/comments{/number}',
                contents_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/contents/{+path}',
                compare_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/compare/{base}...{head}',
                merges_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/merges',
                archive_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/{archive_format}{/ref}',
                downloads_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/downloads',
                issues_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/issues{/number}',
                pulls_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/pulls{/number}',
                milestones_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/milestones{/number}',
                notifications_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/notifications{?since,all,participating}',
                labels_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/labels{/name}',
                releases_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/releases{/id}',
                deployments_url:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/deployments',
                created_at: '2020-07-13T22:48:32Z',
                updated_at: '2020-07-13T22:48:34Z',
                pushed_at: '2020-12-15T19:24:19Z',
                git_url:
                  'git://github.com/timfitzzz/gatsby-theme-localization.git',
                ssh_url:
                  'git@github.com:timfitzzz/gatsby-theme-localization.git',
                clone_url:
                  'https://github.com/timfitzzz/gatsby-theme-localization.git',
                svn_url:
                  'https://github.com/timfitzzz/gatsby-theme-localization',
                homepage: 'https://npmjs.com/package/gatsby-theme-localization',
                size: 3385,
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
                license: {
                  key: 'mit',
                  name: 'MIT License',
                  spdx_id: 'MIT',
                  url: 'https://api.github.com/licenses/mit',
                  node_id: 'MDc6TGljZW5zZTEz',
                },
                forks: 0,
                open_issues: 0,
                watchers: 0,
                default_branch: 'master',
              },
            },
            _links: {
              self: {
                href:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/pulls/1',
              },
              html: {
                href:
                  'https://github.com/timfitzzz/gatsby-theme-localization/pull/1',
              },
              issue: {
                href:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/issues/1',
              },
              comments: {
                href:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/issues/1/comments',
              },
              review_comments: {
                href:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/pulls/1/comments',
              },
              review_comment: {
                href:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/pulls/comments{/number}',
              },
              commits: {
                href:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/pulls/1/commits',
              },
              statuses: {
                href:
                  'https://api.github.com/repos/timfitzzz/gatsby-theme-localization/statuses/f087c57b4efaed83904a737e3da4b58617628795',
              },
            },
            author_association: 'OWNER',
            active_lock_reason: null,
            merged: true,
            mergeable: null,
            rebaseable: null,
            mergeable_state: 'unknown',
            merged_by: {
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
            comments: 0,
            review_comments: 0,
            maintainer_can_modify: false,
            commits: 5,
            additions: 14,
            deletions: 14,
            changed_files: 3,
          },
        },
        public: true,
        created_at: '2020-12-15T19:24:20Z',
      },
    ],
  },
];

// PullRequestEventTests["testEvents"]["closed"] = [
//   {
//     resultingPropSets: 1,
//     testStrings: {
//       summary: {
//         plain:
//           "timfitzzz closed pull request Bringing up to date with current version in timfitzzz/gatsby-theme-localization",
//         md:
//           "[timfitzzz](https://github.com/timfitzzz) closed pull request [Bringing up to date with current version](https://github.com/timfitzzz/gatsby-theme-localization/pull/1) in [timfitzzz/gatsby-theme-localization](https://github.com/timfitzzz/gatsby-theme-localization)",
//       },
//       actionTypes: ["closed"],
//       verbs: ["closed"],
//       actor: {
//         plain: `timfitzzz closed`,
//         md: `[timfitzzz](https://github.com/timfitzzz) closed`,
//       },
//       result: "pull request",
//       subject: {
//         plain: [["Bringing up to date with current version"]],
//         md: [
//           [
//             "[Bringing up to date with current version](https://github.com/timfitzzz/gatsby-theme-localization/pull/1)",
//           ],
//         ],
//       },
//       target: {
//         plain: [[""]],
//         md: [[""]],
//       },
//       parent: {
//         plain: [["in timfitzzz/gatsby-theme-localization"]],
//         md: [
//           [
//             "in [timfitzzz/gatsby-theme-localization](https://github.com/timfitzzz/gatsby-theme-localization)",
//           ],
//         ],
//       },
//     },
//     event:
//   },
// ]

export default PullRequestEventTests;

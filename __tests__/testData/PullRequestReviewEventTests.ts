import { TypeTestData } from './';

const PullRequestReviewEventTests: TypeTestData = {
  testEvents: {
    created: [],
  },
};

PullRequestReviewEventTests.testEvents.created = [
  {
    propSets: [
      {
        date: new Date('2021-02-13T05:22:49Z'),
        private: false,
        type: 'PullRequestReviewEvent',
        actor: {
          id: 'Grandolf49',
          url: 'https://github.com/Grandolf49',
        },
        verb: 'added',
        actionType: 'created',
        result: ['a review', 'reviews'],
        subject: {
          id: 589944777,
          url:
            'https://github.com/openMF/android-client/pull/1539#pullrequestreview-589944777',
          content:
            "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
          desc: undefined,
          preposition: undefined,
          title: undefined,
        },
        target: {
          id: 470196126,
          url: 'https://github.com/openMF/android-client/pull/1539',
          title: 'Conversion:Survey related fragments and activities',
          desc: 'pull request',
          preposition: 'of',
          content: undefined,
        },
        parent: {
          id: 'openMF/android-client',
          title: 'openMF/android-client',
          url: 'https://github.com/openMF/android-client',
          desc: undefined,
          preposition: 'in',
          content: undefined,
        },
      },
    ],
    renderedPropSets: [
      {
        plain: {
          date: 'February 13, 2021',
          actor: 'Grandolf49',
          verb: 'added',
          subject: '589944777',
          content:
            "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
          target:
            'of pull request Conversion:Survey related fragments and activities',
          parent: 'in openMF/android-client',
        },
        md: {
          date: 'February 13, 2021',
          actor: '[Grandolf49](https://github.com/Grandolf49)',
          verb: 'added',
          subject:
            '[589944777](https://github.com/openMF/android-client/pull/1539#pullrequestreview-589944777)',
          content:
            "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
          target:
            'of pull request [Conversion:Survey related fragments and activities](https://github.com/openMF/android-client/pull/1539)',
          parent:
            'in [openMF/android-client](https://github.com/openMF/android-client)',
        },
      },
    ],
    renderedEventsTextSets: {
      collapsed: [
        {
          plain: [
            ['February 13, 2021'],
            'Grandolf49 added a review 589944777 of pull request Conversion:Survey related fragments and activities in openMF/android-client',
            "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
          ],
          md: [
            ['February 13, 2021'],
            '[Grandolf49](https://github.com/Grandolf49) added a review [589944777](https://github.com/openMF/android-client/pull/1539#pullrequestreview-589944777) of pull request [Conversion:Survey related fragments and activities](https://github.com/openMF/android-client/pull/1539) in [openMF/android-client](https://github.com/openMF/android-client)',
            "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
          ],
        },
      ],
      individual: [
        {
          plain: [
            ['February 13, 2021'],
            'Grandolf49 added a review 589944777 of pull request Conversion:Survey related fragments and activities in openMF/android-client',
            "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
          ],
          md: [
            ['February 13, 2021'],
            '[Grandolf49](https://github.com/Grandolf49) added a review [589944777](https://github.com/openMF/android-client/pull/1539#pullrequestreview-589944777) of pull request [Conversion:Survey related fragments and activities](https://github.com/openMF/android-client/pull/1539) in [openMF/android-client](https://github.com/openMF/android-client)',
            "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
          ],
        },
      ],
    },
    events: [
      {
        id: '15171804536',
        type: 'PullRequestReviewEvent',
        actor: {
          id: 30969403,
          login: 'Grandolf49',
          display_login: 'Grandolf49',
          gravatar_id: '',
          url: 'https://api.github.com/users/Grandolf49',
          avatar_url: 'https://avatars.githubusercontent.com/u/30969403?',
        },
        repo: {
          id: 18864134,
          name: 'openMF/android-client',
          url: 'https://api.github.com/repos/openMF/android-client',
        },
        payload: {
          action: 'created',
          review: {
            id: 589944777,
            node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3NTg5OTQ0Nzc3',
            user: {
              login: 'Grandolf49',
              id: 30969403,
              node_id: 'MDQ6VXNlcjMwOTY5NDAz',
              avatar_url:
                'https://avatars.githubusercontent.com/u/30969403?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/Grandolf49',
              html_url: 'https://github.com/Grandolf49',
              followers_url:
                'https://api.github.com/users/Grandolf49/followers',
              following_url:
                'https://api.github.com/users/Grandolf49/following{/other_user}',
              gists_url:
                'https://api.github.com/users/Grandolf49/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/Grandolf49/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/Grandolf49/subscriptions',
              organizations_url: 'https://api.github.com/users/Grandolf49/orgs',
              repos_url: 'https://api.github.com/users/Grandolf49/repos',
              events_url:
                'https://api.github.com/users/Grandolf49/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/Grandolf49/received_events',
              type: 'User',
              site_admin: false,
            },
            body:
              "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
            commit_id: 'ea4857905e48ba11e0f4a591121842f6c88024e9',
            submitted_at: '2021-02-13T05:22:49Z',
            state: 'changes_requested',
            html_url:
              'https://github.com/openMF/android-client/pull/1539#pullrequestreview-589944777',
            pull_request_url:
              'https://api.github.com/repos/openMF/android-client/pulls/1539',
            author_association: 'COLLABORATOR',
            _links: {
              html: {
                href:
                  'https://github.com/openMF/android-client/pull/1539#pullrequestreview-589944777',
              },
              pull_request: {
                href:
                  'https://api.github.com/repos/openMF/android-client/pulls/1539',
              },
            },
          },
          pull_request: {
            url:
              'https://api.github.com/repos/openMF/android-client/pulls/1539',
            id: 470196126,
            node_id: 'MDExOlB1bGxSZXF1ZXN0NDcwMTk2MTI2',
            html_url: 'https://github.com/openMF/android-client/pull/1539',
            diff_url: 'https://github.com/openMF/android-client/pull/1539.diff',
            patch_url:
              'https://github.com/openMF/android-client/pull/1539.patch',
            issue_url:
              'https://api.github.com/repos/openMF/android-client/issues/1539',
            number: 1539,
            state: 'open',
            locked: false,
            title: 'Conversion:Survey related fragments and activities',
            user: {
              login: 'robustTechie',
              id: 52889867,
              node_id: 'MDQ6VXNlcjUyODg5ODY3',
              avatar_url:
                'https://avatars.githubusercontent.com/u/52889867?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/robustTechie',
              html_url: 'https://github.com/robustTechie',
              followers_url:
                'https://api.github.com/users/robustTechie/followers',
              following_url:
                'https://api.github.com/users/robustTechie/following{/other_user}',
              gists_url:
                'https://api.github.com/users/robustTechie/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/robustTechie/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/robustTechie/subscriptions',
              organizations_url:
                'https://api.github.com/users/robustTechie/orgs',
              repos_url: 'https://api.github.com/users/robustTechie/repos',
              events_url:
                'https://api.github.com/users/robustTechie/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/robustTechie/received_events',
              type: 'User',
              site_admin: false,
            },
            body:
              "Fixes #Issue_Number\r\n\r\nConverted the following classes which were previously in Java, to Kotlin -\r\n1. SurveyQuestionActivity\r\n2. SurveyQuestionFragment\r\n3. SurveySubmitFragment\r\n4. SurveySubmitMvpView\r\n5. SurveySubmitPresenter\r\n6. SurveyListFragment\r\n7. SurveyListMvpView\r\n8. SurveyListPresenter\r\n\r\nPlease make sure these boxes are checked before submitting your pull request - thanks!\r\n\r\n- [x] Apply the `MifosStyle.xml` style template to your code in Android Studio.\r\n\r\n- [x] Run the unit tests with `./gradlew check` to make sure you didn't break anything\r\n\r\n- [x] If you have multiple commits please combine them into one commit by squashing them.",
            created_at: '2020-08-19T14:17:35Z',
            updated_at: '2021-02-13T05:22:49Z',
            closed_at: null,
            merged_at: null,
            merge_commit_sha: 'a9754b37043ae01e79992bc111e6c1c7f07b2dc2',
            assignee: null,
            assignees: [],
            requested_reviewers: [],
            requested_teams: [],
            labels: [],
            milestone: null,
            draft: false,
            commits_url:
              'https://api.github.com/repos/openMF/android-client/pulls/1539/commits',
            review_comments_url:
              'https://api.github.com/repos/openMF/android-client/pulls/1539/comments',
            review_comment_url:
              'https://api.github.com/repos/openMF/android-client/pulls/comments{/number}',
            comments_url:
              'https://api.github.com/repos/openMF/android-client/issues/1539/comments',
            statuses_url:
              'https://api.github.com/repos/openMF/android-client/statuses/ea4857905e48ba11e0f4a591121842f6c88024e9',
            head: {
              label: 'robustTechie:surveyConversion',
              ref: 'surveyConversion',
              sha: 'ea4857905e48ba11e0f4a591121842f6c88024e9',
              user: {
                login: 'robustTechie',
                id: 52889867,
                node_id: 'MDQ6VXNlcjUyODg5ODY3',
                avatar_url:
                  'https://avatars.githubusercontent.com/u/52889867?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/robustTechie',
                html_url: 'https://github.com/robustTechie',
                followers_url:
                  'https://api.github.com/users/robustTechie/followers',
                following_url:
                  'https://api.github.com/users/robustTechie/following{/other_user}',
                gists_url:
                  'https://api.github.com/users/robustTechie/gists{/gist_id}',
                starred_url:
                  'https://api.github.com/users/robustTechie/starred{/owner}{/repo}',
                subscriptions_url:
                  'https://api.github.com/users/robustTechie/subscriptions',
                organizations_url:
                  'https://api.github.com/users/robustTechie/orgs',
                repos_url: 'https://api.github.com/users/robustTechie/repos',
                events_url:
                  'https://api.github.com/users/robustTechie/events{/privacy}',
                received_events_url:
                  'https://api.github.com/users/robustTechie/received_events',
                type: 'User',
                site_admin: false,
              },
              repo: {
                id: 229601655,
                node_id: 'MDEwOlJlcG9zaXRvcnkyMjk2MDE2NTU=',
                name: 'android-client',
                full_name: 'robustTechie/android-client',
                private: false,
                owner: {
                  login: 'robustTechie',
                  id: 52889867,
                  node_id: 'MDQ6VXNlcjUyODg5ODY3',
                  avatar_url:
                    'https://avatars.githubusercontent.com/u/52889867?v=4',
                  gravatar_id: '',
                  url: 'https://api.github.com/users/robustTechie',
                  html_url: 'https://github.com/robustTechie',
                  followers_url:
                    'https://api.github.com/users/robustTechie/followers',
                  following_url:
                    'https://api.github.com/users/robustTechie/following{/other_user}',
                  gists_url:
                    'https://api.github.com/users/robustTechie/gists{/gist_id}',
                  starred_url:
                    'https://api.github.com/users/robustTechie/starred{/owner}{/repo}',
                  subscriptions_url:
                    'https://api.github.com/users/robustTechie/subscriptions',
                  organizations_url:
                    'https://api.github.com/users/robustTechie/orgs',
                  repos_url: 'https://api.github.com/users/robustTechie/repos',
                  events_url:
                    'https://api.github.com/users/robustTechie/events{/privacy}',
                  received_events_url:
                    'https://api.github.com/users/robustTechie/received_events',
                  type: 'User',
                  site_admin: false,
                },
                html_url: 'https://github.com/robustTechie/android-client',
                description: 'An android client for the MifosX platform',
                fork: true,
                url: 'https://api.github.com/repos/robustTechie/android-client',
                forks_url:
                  'https://api.github.com/repos/robustTechie/android-client/forks',
                keys_url:
                  'https://api.github.com/repos/robustTechie/android-client/keys{/key_id}',
                collaborators_url:
                  'https://api.github.com/repos/robustTechie/android-client/collaborators{/collaborator}',
                teams_url:
                  'https://api.github.com/repos/robustTechie/android-client/teams',
                hooks_url:
                  'https://api.github.com/repos/robustTechie/android-client/hooks',
                issue_events_url:
                  'https://api.github.com/repos/robustTechie/android-client/issues/events{/number}',
                events_url:
                  'https://api.github.com/repos/robustTechie/android-client/events',
                assignees_url:
                  'https://api.github.com/repos/robustTechie/android-client/assignees{/user}',
                branches_url:
                  'https://api.github.com/repos/robustTechie/android-client/branches{/branch}',
                tags_url:
                  'https://api.github.com/repos/robustTechie/android-client/tags',
                blobs_url:
                  'https://api.github.com/repos/robustTechie/android-client/git/blobs{/sha}',
                git_tags_url:
                  'https://api.github.com/repos/robustTechie/android-client/git/tags{/sha}',
                git_refs_url:
                  'https://api.github.com/repos/robustTechie/android-client/git/refs{/sha}',
                trees_url:
                  'https://api.github.com/repos/robustTechie/android-client/git/trees{/sha}',
                statuses_url:
                  'https://api.github.com/repos/robustTechie/android-client/statuses/{sha}',
                languages_url:
                  'https://api.github.com/repos/robustTechie/android-client/languages',
                stargazers_url:
                  'https://api.github.com/repos/robustTechie/android-client/stargazers',
                contributors_url:
                  'https://api.github.com/repos/robustTechie/android-client/contributors',
                subscribers_url:
                  'https://api.github.com/repos/robustTechie/android-client/subscribers',
                subscription_url:
                  'https://api.github.com/repos/robustTechie/android-client/subscription',
                commits_url:
                  'https://api.github.com/repos/robustTechie/android-client/commits{/sha}',
                git_commits_url:
                  'https://api.github.com/repos/robustTechie/android-client/git/commits{/sha}',
                comments_url:
                  'https://api.github.com/repos/robustTechie/android-client/comments{/number}',
                issue_comment_url:
                  'https://api.github.com/repos/robustTechie/android-client/issues/comments{/number}',
                contents_url:
                  'https://api.github.com/repos/robustTechie/android-client/contents/{+path}',
                compare_url:
                  'https://api.github.com/repos/robustTechie/android-client/compare/{base}...{head}',
                merges_url:
                  'https://api.github.com/repos/robustTechie/android-client/merges',
                archive_url:
                  'https://api.github.com/repos/robustTechie/android-client/{archive_format}{/ref}',
                downloads_url:
                  'https://api.github.com/repos/robustTechie/android-client/downloads',
                issues_url:
                  'https://api.github.com/repos/robustTechie/android-client/issues{/number}',
                pulls_url:
                  'https://api.github.com/repos/robustTechie/android-client/pulls{/number}',
                milestones_url:
                  'https://api.github.com/repos/robustTechie/android-client/milestones{/number}',
                notifications_url:
                  'https://api.github.com/repos/robustTechie/android-client/notifications{?since,all,participating}',
                labels_url:
                  'https://api.github.com/repos/robustTechie/android-client/labels{/name}',
                releases_url:
                  'https://api.github.com/repos/robustTechie/android-client/releases{/id}',
                deployments_url:
                  'https://api.github.com/repos/robustTechie/android-client/deployments',
                created_at: '2019-12-22T17:04:16Z',
                updated_at: '2020-12-23T07:31:56Z',
                pushed_at: '2021-02-11T06:01:10Z',
                git_url: 'git://github.com/robustTechie/android-client.git',
                ssh_url: 'git@github.com:robustTechie/android-client.git',
                clone_url: 'https://github.com/robustTechie/android-client.git',
                svn_url: 'https://github.com/robustTechie/android-client',
                homepage: 'https://openmf.github.io/mobileapps.github.io/',
                size: 102268,
                stargazers_count: 2,
                watchers_count: 2,
                language: 'Java',
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
                  key: 'mpl-2.0',
                  name: 'Mozilla Public License 2.0',
                  spdx_id: 'MPL-2.0',
                  url: 'https://api.github.com/licenses/mpl-2.0',
                  node_id: 'MDc6TGljZW5zZTE0',
                },
                forks: 0,
                open_issues: 0,
                watchers: 2,
                default_branch: 'master',
              },
            },
            base: {
              label: 'openMF:kotlin-conversion',
              ref: 'kotlin-conversion',
              sha: 'c59191c030e4f00487d5c524b826b1ae5e53f234',
              user: {
                login: 'openMF',
                id: 3473607,
                node_id: 'MDEyOk9yZ2FuaXphdGlvbjM0NzM2MDc=',
                avatar_url:
                  'https://avatars.githubusercontent.com/u/3473607?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/openMF',
                html_url: 'https://github.com/openMF',
                followers_url: 'https://api.github.com/users/openMF/followers',
                following_url:
                  'https://api.github.com/users/openMF/following{/other_user}',
                gists_url:
                  'https://api.github.com/users/openMF/gists{/gist_id}',
                starred_url:
                  'https://api.github.com/users/openMF/starred{/owner}{/repo}',
                subscriptions_url:
                  'https://api.github.com/users/openMF/subscriptions',
                organizations_url: 'https://api.github.com/users/openMF/orgs',
                repos_url: 'https://api.github.com/users/openMF/repos',
                events_url:
                  'https://api.github.com/users/openMF/events{/privacy}',
                received_events_url:
                  'https://api.github.com/users/openMF/received_events',
                type: 'Organization',
                site_admin: false,
              },
              repo: {
                id: 18864134,
                node_id: 'MDEwOlJlcG9zaXRvcnkxODg2NDEzNA==',
                name: 'android-client',
                full_name: 'openMF/android-client',
                private: false,
                owner: {
                  login: 'openMF',
                  id: 3473607,
                  node_id: 'MDEyOk9yZ2FuaXphdGlvbjM0NzM2MDc=',
                  avatar_url:
                    'https://avatars.githubusercontent.com/u/3473607?v=4',
                  gravatar_id: '',
                  url: 'https://api.github.com/users/openMF',
                  html_url: 'https://github.com/openMF',
                  followers_url:
                    'https://api.github.com/users/openMF/followers',
                  following_url:
                    'https://api.github.com/users/openMF/following{/other_user}',
                  gists_url:
                    'https://api.github.com/users/openMF/gists{/gist_id}',
                  starred_url:
                    'https://api.github.com/users/openMF/starred{/owner}{/repo}',
                  subscriptions_url:
                    'https://api.github.com/users/openMF/subscriptions',
                  organizations_url: 'https://api.github.com/users/openMF/orgs',
                  repos_url: 'https://api.github.com/users/openMF/repos',
                  events_url:
                    'https://api.github.com/users/openMF/events{/privacy}',
                  received_events_url:
                    'https://api.github.com/users/openMF/received_events',
                  type: 'Organization',
                  site_admin: false,
                },
                html_url: 'https://github.com/openMF/android-client',
                description: 'An android client for the MifosX platform',
                fork: false,
                url: 'https://api.github.com/repos/openMF/android-client',
                forks_url:
                  'https://api.github.com/repos/openMF/android-client/forks',
                keys_url:
                  'https://api.github.com/repos/openMF/android-client/keys{/key_id}',
                collaborators_url:
                  'https://api.github.com/repos/openMF/android-client/collaborators{/collaborator}',
                teams_url:
                  'https://api.github.com/repos/openMF/android-client/teams',
                hooks_url:
                  'https://api.github.com/repos/openMF/android-client/hooks',
                issue_events_url:
                  'https://api.github.com/repos/openMF/android-client/issues/events{/number}',
                events_url:
                  'https://api.github.com/repos/openMF/android-client/events',
                assignees_url:
                  'https://api.github.com/repos/openMF/android-client/assignees{/user}',
                branches_url:
                  'https://api.github.com/repos/openMF/android-client/branches{/branch}',
                tags_url:
                  'https://api.github.com/repos/openMF/android-client/tags',
                blobs_url:
                  'https://api.github.com/repos/openMF/android-client/git/blobs{/sha}',
                git_tags_url:
                  'https://api.github.com/repos/openMF/android-client/git/tags{/sha}',
                git_refs_url:
                  'https://api.github.com/repos/openMF/android-client/git/refs{/sha}',
                trees_url:
                  'https://api.github.com/repos/openMF/android-client/git/trees{/sha}',
                statuses_url:
                  'https://api.github.com/repos/openMF/android-client/statuses/{sha}',
                languages_url:
                  'https://api.github.com/repos/openMF/android-client/languages',
                stargazers_url:
                  'https://api.github.com/repos/openMF/android-client/stargazers',
                contributors_url:
                  'https://api.github.com/repos/openMF/android-client/contributors',
                subscribers_url:
                  'https://api.github.com/repos/openMF/android-client/subscribers',
                subscription_url:
                  'https://api.github.com/repos/openMF/android-client/subscription',
                commits_url:
                  'https://api.github.com/repos/openMF/android-client/commits{/sha}',
                git_commits_url:
                  'https://api.github.com/repos/openMF/android-client/git/commits{/sha}',
                comments_url:
                  'https://api.github.com/repos/openMF/android-client/comments{/number}',
                issue_comment_url:
                  'https://api.github.com/repos/openMF/android-client/issues/comments{/number}',
                contents_url:
                  'https://api.github.com/repos/openMF/android-client/contents/{+path}',
                compare_url:
                  'https://api.github.com/repos/openMF/android-client/compare/{base}...{head}',
                merges_url:
                  'https://api.github.com/repos/openMF/android-client/merges',
                archive_url:
                  'https://api.github.com/repos/openMF/android-client/{archive_format}{/ref}',
                downloads_url:
                  'https://api.github.com/repos/openMF/android-client/downloads',
                issues_url:
                  'https://api.github.com/repos/openMF/android-client/issues{/number}',
                pulls_url:
                  'https://api.github.com/repos/openMF/android-client/pulls{/number}',
                milestones_url:
                  'https://api.github.com/repos/openMF/android-client/milestones{/number}',
                notifications_url:
                  'https://api.github.com/repos/openMF/android-client/notifications{?since,all,participating}',
                labels_url:
                  'https://api.github.com/repos/openMF/android-client/labels{/name}',
                releases_url:
                  'https://api.github.com/repos/openMF/android-client/releases{/id}',
                deployments_url:
                  'https://api.github.com/repos/openMF/android-client/deployments',
                created_at: '2014-04-17T02:35:44Z',
                updated_at: '2021-02-05T14:06:35Z',
                pushed_at: '2021-02-12T11:24:13Z',
                git_url: 'git://github.com/openMF/android-client.git',
                ssh_url: 'git@github.com:openMF/android-client.git',
                clone_url: 'https://github.com/openMF/android-client.git',
                svn_url: 'https://github.com/openMF/android-client',
                homepage: 'https://openmf.github.io/mobileapps.github.io/',
                size: 101972,
                stargazers_count: 147,
                watchers_count: 147,
                language: 'Java',
                has_issues: true,
                has_projects: true,
                has_downloads: true,
                has_wiki: true,
                has_pages: false,
                forks_count: 462,
                mirror_url: null,
                archived: false,
                disabled: false,
                open_issues_count: 650,
                license: {
                  key: 'mpl-2.0',
                  name: 'Mozilla Public License 2.0',
                  spdx_id: 'MPL-2.0',
                  url: 'https://api.github.com/licenses/mpl-2.0',
                  node_id: 'MDc6TGljZW5zZTE0',
                },
                forks: 462,
                open_issues: 650,
                watchers: 147,
                default_branch: 'master',
              },
            },
            _links: {
              self: {
                href:
                  'https://api.github.com/repos/openMF/android-client/pulls/1539',
              },
              html: {
                href: 'https://github.com/openMF/android-client/pull/1539',
              },
              issue: {
                href:
                  'https://api.github.com/repos/openMF/android-client/issues/1539',
              },
              comments: {
                href:
                  'https://api.github.com/repos/openMF/android-client/issues/1539/comments',
              },
              review_comments: {
                href:
                  'https://api.github.com/repos/openMF/android-client/pulls/1539/comments',
              },
              review_comment: {
                href:
                  'https://api.github.com/repos/openMF/android-client/pulls/comments{/number}',
              },
              commits: {
                href:
                  'https://api.github.com/repos/openMF/android-client/pulls/1539/commits',
              },
              statuses: {
                href:
                  'https://api.github.com/repos/openMF/android-client/statuses/ea4857905e48ba11e0f4a591121842f6c88024e9',
              },
            },
            author_association: 'CONTRIBUTOR',
            auto_merge: null,
            active_lock_reason: null,
          },
        },
        public: true,
        created_at: '2021-02-13T05:22:49Z',
        org: {
          id: 3473607,
          login: 'openMF',
          gravatar_id: '',
          url: 'https://api.github.com/orgs/openMF',
          avatar_url: 'https://avatars.githubusercontent.com/u/3473607?',
        },
      },
    ],
  },
];
// PullRequestReviewEventTests["testEvents"]["created"] = [
//   {
//     resultingPropSets: 1,
//     testStrings: {
//       summary: {
//         plain:
//           "Grandolf49 added a review 589944777 of a pull request (470196126) in openMF/android-client",
//         md:
//           "[Grandolf49](https://github.com/Grandolf49) added a review [589944777](https://github.com/openMF/android-client/pull/1539#pullrequestreview-589944777) of [a pull request](https://github.com/openMF/android-client/pull/1539) in [openMF/android-client](https://github.com/openMF/android-client)",
//       },
//       actionTypes: ["created"],
//       verbs: ["created"],
//       actor: {
//         plain: "Grandolf49 added",
//         md: "[Grandolf49](https://github.com/Grandolf49) added",
//       },
//       result: "a review",
//       subject: {
//         plain: [
//           [
//             "589944777",
//             "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
//           ],
//         ],
//         md: [
//           [
//             "[589944777](https://github.com/openMF/android-client/pull/1539#pullrequestreview-589944777)",
//             "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
//           ],
//         ],
//       },
//       target: {
//         plain: [["of a pull request (470196126)"]],
//         md: [
//           [
//             "of [a pull request](https://github.com/openMF/android-client/pull/1539)",
//           ],
//         ],
//       },
//       parent: {
//         plain: [["in openMF/android-client"]],
//         md: [
//           [
//             "in [openMF/android-client](https://github.com/openMF/android-client)",
//           ],
//         ],
//       },
//     },
//     event: {
//       id: "15171804536",
//       type: "PullRequestReviewEvent",
//       actor: {
//         id: 30969403,
//         login: "Grandolf49",
//         display_login: "Grandolf49",
//         gravatar_id: "",
//         url: "https://api.github.com/users/Grandolf49",
//         avatar_url: "https://avatars.githubusercontent.com/u/30969403?",
//       },
//       repo: {
//         id: 18864134,
//         name: "openMF/android-client",
//         url: "https://api.github.com/repos/openMF/android-client",
//       },
//       payload: {
//         action: "created",
//         review: {
//           id: 589944777,
//           node_id: "MDE3OlB1bGxSZXF1ZXN0UmV2aWV3NTg5OTQ0Nzc3",
//           user: {
//             login: "Grandolf49",
//             id: 30969403,
//             node_id: "MDQ6VXNlcjMwOTY5NDAz",
//             avatar_url: "https://avatars.githubusercontent.com/u/30969403?v=4",
//             gravatar_id: "",
//             url: "https://api.github.com/users/Grandolf49",
//             html_url: "https://github.com/Grandolf49",
//             followers_url: "https://api.github.com/users/Grandolf49/followers",
//             following_url:
//               "https://api.github.com/users/Grandolf49/following{/other_user}",
//             gists_url:
//               "https://api.github.com/users/Grandolf49/gists{/gist_id}",
//             starred_url:
//               "https://api.github.com/users/Grandolf49/starred{/owner}{/repo}",
//             subscriptions_url:
//               "https://api.github.com/users/Grandolf49/subscriptions",
//             organizations_url: "https://api.github.com/users/Grandolf49/orgs",
//             repos_url: "https://api.github.com/users/Grandolf49/repos",
//             events_url:
//               "https://api.github.com/users/Grandolf49/events{/privacy}",
//             received_events_url:
//               "https://api.github.com/users/Grandolf49/received_events",
//             type: "User",
//             site_admin: false,
//           },
//           body:
//             "@robustTechie We'll need to remove the `mifosng-android/gradle/wrapper/gradle-wrapper.jar` as well!",
//           commit_id: "ea4857905e48ba11e0f4a591121842f6c88024e9",
//           submitted_at: "2021-02-13T05:22:49Z",
//           state: "changes_requested",
//           html_url:
//             "https://github.com/openMF/android-client/pull/1539#pullrequestreview-589944777",
//           pull_request_url:
//             "https://api.github.com/repos/openMF/android-client/pulls/1539",
//           author_association: "COLLABORATOR",
//           _links: {
//             html: {
//               href:
//                 "https://github.com/openMF/android-client/pull/1539#pullrequestreview-589944777",
//             },
//             pull_request: {
//               href:
//                 "https://api.github.com/repos/openMF/android-client/pulls/1539",
//             },
//           },
//         },
//         pull_request: {
//           url: "https://api.github.com/repos/openMF/android-client/pulls/1539",
//           id: 470196126,
//           node_id: "MDExOlB1bGxSZXF1ZXN0NDcwMTk2MTI2",
//           html_url: "https://github.com/openMF/android-client/pull/1539",
//           diff_url: "https://github.com/openMF/android-client/pull/1539.diff",
//           patch_url: "https://github.com/openMF/android-client/pull/1539.patch",
//           issue_url:
//             "https://api.github.com/repos/openMF/android-client/issues/1539",
//           number: 1539,
//           state: "open",
//           locked: false,
//           title: "Conversion:Survey related fragments and activities",
//           user: {
//             login: "robustTechie",
//             id: 52889867,
//             node_id: "MDQ6VXNlcjUyODg5ODY3",
//             avatar_url: "https://avatars.githubusercontent.com/u/52889867?v=4",
//             gravatar_id: "",
//             url: "https://api.github.com/users/robustTechie",
//             html_url: "https://github.com/robustTechie",
//             followers_url:
//               "https://api.github.com/users/robustTechie/followers",
//             following_url:
//               "https://api.github.com/users/robustTechie/following{/other_user}",
//             gists_url:
//               "https://api.github.com/users/robustTechie/gists{/gist_id}",
//             starred_url:
//               "https://api.github.com/users/robustTechie/starred{/owner}{/repo}",
//             subscriptions_url:
//               "https://api.github.com/users/robustTechie/subscriptions",
//             organizations_url: "https://api.github.com/users/robustTechie/orgs",
//             repos_url: "https://api.github.com/users/robustTechie/repos",
//             events_url:
//               "https://api.github.com/users/robustTechie/events{/privacy}",
//             received_events_url:
//               "https://api.github.com/users/robustTechie/received_events",
//             type: "User",
//             site_admin: false,
//           },
//           body:
//             "Fixes #Issue_Number\r\n\r\nConverted the following classes which were previously in Java, to Kotlin -\r\n1. SurveyQuestionActivity\r\n2. SurveyQuestionFragment\r\n3. SurveySubmitFragment\r\n4. SurveySubmitMvpView\r\n5. SurveySubmitPresenter\r\n6. SurveyListFragment\r\n7. SurveyListMvpView\r\n8. SurveyListPresenter\r\n\r\nPlease make sure these boxes are checked before submitting your pull request - thanks!\r\n\r\n- [x] Apply the `MifosStyle.xml` style template to your code in Android Studio.\r\n\r\n- [x] Run the unit tests with `./gradlew check` to make sure you didn't break anything\r\n\r\n- [x] If you have multiple commits please combine them into one commit by squashing them.",
//           created_at: "2020-08-19T14:17:35Z",
//           updated_at: "2021-02-13T05:22:49Z",
//           closed_at: null,
//           merged_at: null,
//           merge_commit_sha: "a9754b37043ae01e79992bc111e6c1c7f07b2dc2",
//           assignee: null,
//           assignees: [],
//           requested_reviewers: [],
//           requested_teams: [],
//           labels: [],
//           milestone: null,
//           draft: false,
//           commits_url:
//             "https://api.github.com/repos/openMF/android-client/pulls/1539/commits",
//           review_comments_url:
//             "https://api.github.com/repos/openMF/android-client/pulls/1539/comments",
//           review_comment_url:
//             "https://api.github.com/repos/openMF/android-client/pulls/comments{/number}",
//           comments_url:
//             "https://api.github.com/repos/openMF/android-client/issues/1539/comments",
//           statuses_url:
//             "https://api.github.com/repos/openMF/android-client/statuses/ea4857905e48ba11e0f4a591121842f6c88024e9",
//           head: {
//             label: "robustTechie:surveyConversion",
//             ref: "surveyConversion",
//             sha: "ea4857905e48ba11e0f4a591121842f6c88024e9",
//             user: {
//               login: "robustTechie",
//               id: 52889867,
//               node_id: "MDQ6VXNlcjUyODg5ODY3",
//               avatar_url:
//                 "https://avatars.githubusercontent.com/u/52889867?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/robustTechie",
//               html_url: "https://github.com/robustTechie",
//               followers_url:
//                 "https://api.github.com/users/robustTechie/followers",
//               following_url:
//                 "https://api.github.com/users/robustTechie/following{/other_user}",
//               gists_url:
//                 "https://api.github.com/users/robustTechie/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/robustTechie/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/robustTechie/subscriptions",
//               organizations_url:
//                 "https://api.github.com/users/robustTechie/orgs",
//               repos_url: "https://api.github.com/users/robustTechie/repos",
//               events_url:
//                 "https://api.github.com/users/robustTechie/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/robustTechie/received_events",
//               type: "User",
//               site_admin: false,
//             },
//             repo: {
//               id: 229601655,
//               node_id: "MDEwOlJlcG9zaXRvcnkyMjk2MDE2NTU=",
//               name: "android-client",
//               full_name: "robustTechie/android-client",
//               private: false,
//               owner: {
//                 login: "robustTechie",
//                 id: 52889867,
//                 node_id: "MDQ6VXNlcjUyODg5ODY3",
//                 avatar_url:
//                   "https://avatars.githubusercontent.com/u/52889867?v=4",
//                 gravatar_id: "",
//                 url: "https://api.github.com/users/robustTechie",
//                 html_url: "https://github.com/robustTechie",
//                 followers_url:
//                   "https://api.github.com/users/robustTechie/followers",
//                 following_url:
//                   "https://api.github.com/users/robustTechie/following{/other_user}",
//                 gists_url:
//                   "https://api.github.com/users/robustTechie/gists{/gist_id}",
//                 starred_url:
//                   "https://api.github.com/users/robustTechie/starred{/owner}{/repo}",
//                 subscriptions_url:
//                   "https://api.github.com/users/robustTechie/subscriptions",
//                 organizations_url:
//                   "https://api.github.com/users/robustTechie/orgs",
//                 repos_url: "https://api.github.com/users/robustTechie/repos",
//                 events_url:
//                   "https://api.github.com/users/robustTechie/events{/privacy}",
//                 received_events_url:
//                   "https://api.github.com/users/robustTechie/received_events",
//                 type: "User",
//                 site_admin: false,
//               },
//               html_url: "https://github.com/robustTechie/android-client",
//               description: "An android client for the MifosX platform",
//               fork: true,
//               url: "https://api.github.com/repos/robustTechie/android-client",
//               forks_url:
//                 "https://api.github.com/repos/robustTechie/android-client/forks",
//               keys_url:
//                 "https://api.github.com/repos/robustTechie/android-client/keys{/key_id}",
//               collaborators_url:
//                 "https://api.github.com/repos/robustTechie/android-client/collaborators{/collaborator}",
//               teams_url:
//                 "https://api.github.com/repos/robustTechie/android-client/teams",
//               hooks_url:
//                 "https://api.github.com/repos/robustTechie/android-client/hooks",
//               issue_events_url:
//                 "https://api.github.com/repos/robustTechie/android-client/issues/events{/number}",
//               events_url:
//                 "https://api.github.com/repos/robustTechie/android-client/events",
//               assignees_url:
//                 "https://api.github.com/repos/robustTechie/android-client/assignees{/user}",
//               branches_url:
//                 "https://api.github.com/repos/robustTechie/android-client/branches{/branch}",
//               tags_url:
//                 "https://api.github.com/repos/robustTechie/android-client/tags",
//               blobs_url:
//                 "https://api.github.com/repos/robustTechie/android-client/git/blobs{/sha}",
//               git_tags_url:
//                 "https://api.github.com/repos/robustTechie/android-client/git/tags{/sha}",
//               git_refs_url:
//                 "https://api.github.com/repos/robustTechie/android-client/git/refs{/sha}",
//               trees_url:
//                 "https://api.github.com/repos/robustTechie/android-client/git/trees{/sha}",
//               statuses_url:
//                 "https://api.github.com/repos/robustTechie/android-client/statuses/{sha}",
//               languages_url:
//                 "https://api.github.com/repos/robustTechie/android-client/languages",
//               stargazers_url:
//                 "https://api.github.com/repos/robustTechie/android-client/stargazers",
//               contributors_url:
//                 "https://api.github.com/repos/robustTechie/android-client/contributors",
//               subscribers_url:
//                 "https://api.github.com/repos/robustTechie/android-client/subscribers",
//               subscription_url:
//                 "https://api.github.com/repos/robustTechie/android-client/subscription",
//               commits_url:
//                 "https://api.github.com/repos/robustTechie/android-client/commits{/sha}",
//               git_commits_url:
//                 "https://api.github.com/repos/robustTechie/android-client/git/commits{/sha}",
//               comments_url:
//                 "https://api.github.com/repos/robustTechie/android-client/comments{/number}",
//               issue_comment_url:
//                 "https://api.github.com/repos/robustTechie/android-client/issues/comments{/number}",
//               contents_url:
//                 "https://api.github.com/repos/robustTechie/android-client/contents/{+path}",
//               compare_url:
//                 "https://api.github.com/repos/robustTechie/android-client/compare/{base}...{head}",
//               merges_url:
//                 "https://api.github.com/repos/robustTechie/android-client/merges",
//               archive_url:
//                 "https://api.github.com/repos/robustTechie/android-client/{archive_format}{/ref}",
//               downloads_url:
//                 "https://api.github.com/repos/robustTechie/android-client/downloads",
//               issues_url:
//                 "https://api.github.com/repos/robustTechie/android-client/issues{/number}",
//               pulls_url:
//                 "https://api.github.com/repos/robustTechie/android-client/pulls{/number}",
//               milestones_url:
//                 "https://api.github.com/repos/robustTechie/android-client/milestones{/number}",
//               notifications_url:
//                 "https://api.github.com/repos/robustTechie/android-client/notifications{?since,all,participating}",
//               labels_url:
//                 "https://api.github.com/repos/robustTechie/android-client/labels{/name}",
//               releases_url:
//                 "https://api.github.com/repos/robustTechie/android-client/releases{/id}",
//               deployments_url:
//                 "https://api.github.com/repos/robustTechie/android-client/deployments",
//               created_at: "2019-12-22T17:04:16Z",
//               updated_at: "2020-12-23T07:31:56Z",
//               pushed_at: "2021-02-11T06:01:10Z",
//               git_url: "git://github.com/robustTechie/android-client.git",
//               ssh_url: "git@github.com:robustTechie/android-client.git",
//               clone_url: "https://github.com/robustTechie/android-client.git",
//               svn_url: "https://github.com/robustTechie/android-client",
//               homepage: "https://openmf.github.io/mobileapps.github.io/",
//               size: 102268,
//               stargazers_count: 2,
//               watchers_count: 2,
//               language: "Java",
//               has_issues: false,
//               has_projects: true,
//               has_downloads: true,
//               has_wiki: true,
//               has_pages: false,
//               forks_count: 0,
//               mirror_url: null,
//               archived: false,
//               disabled: false,
//               open_issues_count: 0,
//               license: {
//                 key: "mpl-2.0",
//                 name: "Mozilla Public License 2.0",
//                 spdx_id: "MPL-2.0",
//                 url: "https://api.github.com/licenses/mpl-2.0",
//                 node_id: "MDc6TGljZW5zZTE0",
//               },
//               forks: 0,
//               open_issues: 0,
//               watchers: 2,
//               default_branch: "master",
//             },
//           },
//           base: {
//             label: "openMF:kotlin-conversion",
//             ref: "kotlin-conversion",
//             sha: "c59191c030e4f00487d5c524b826b1ae5e53f234",
//             user: {
//               login: "openMF",
//               id: 3473607,
//               node_id: "MDEyOk9yZ2FuaXphdGlvbjM0NzM2MDc=",
//               avatar_url: "https://avatars.githubusercontent.com/u/3473607?v=4",
//               gravatar_id: "",
//               url: "https://api.github.com/users/openMF",
//               html_url: "https://github.com/openMF",
//               followers_url: "https://api.github.com/users/openMF/followers",
//               following_url:
//                 "https://api.github.com/users/openMF/following{/other_user}",
//               gists_url: "https://api.github.com/users/openMF/gists{/gist_id}",
//               starred_url:
//                 "https://api.github.com/users/openMF/starred{/owner}{/repo}",
//               subscriptions_url:
//                 "https://api.github.com/users/openMF/subscriptions",
//               organizations_url: "https://api.github.com/users/openMF/orgs",
//               repos_url: "https://api.github.com/users/openMF/repos",
//               events_url:
//                 "https://api.github.com/users/openMF/events{/privacy}",
//               received_events_url:
//                 "https://api.github.com/users/openMF/received_events",
//               type: "Organization",
//               site_admin: false,
//             },
//             repo: {
//               id: 18864134,
//               node_id: "MDEwOlJlcG9zaXRvcnkxODg2NDEzNA==",
//               name: "android-client",
//               full_name: "openMF/android-client",
//               private: false,
//               owner: {
//                 login: "openMF",
//                 id: 3473607,
//                 node_id: "MDEyOk9yZ2FuaXphdGlvbjM0NzM2MDc=",
//                 avatar_url:
//                   "https://avatars.githubusercontent.com/u/3473607?v=4",
//                 gravatar_id: "",
//                 url: "https://api.github.com/users/openMF",
//                 html_url: "https://github.com/openMF",
//                 followers_url: "https://api.github.com/users/openMF/followers",
//                 following_url:
//                   "https://api.github.com/users/openMF/following{/other_user}",
//                 gists_url:
//                   "https://api.github.com/users/openMF/gists{/gist_id}",
//                 starred_url:
//                   "https://api.github.com/users/openMF/starred{/owner}{/repo}",
//                 subscriptions_url:
//                   "https://api.github.com/users/openMF/subscriptions",
//                 organizations_url: "https://api.github.com/users/openMF/orgs",
//                 repos_url: "https://api.github.com/users/openMF/repos",
//                 events_url:
//                   "https://api.github.com/users/openMF/events{/privacy}",
//                 received_events_url:
//                   "https://api.github.com/users/openMF/received_events",
//                 type: "Organization",
//                 site_admin: false,
//               },
//               html_url: "https://github.com/openMF/android-client",
//               description: "An android client for the MifosX platform",
//               fork: false,
//               url: "https://api.github.com/repos/openMF/android-client",
//               forks_url:
//                 "https://api.github.com/repos/openMF/android-client/forks",
//               keys_url:
//                 "https://api.github.com/repos/openMF/android-client/keys{/key_id}",
//               collaborators_url:
//                 "https://api.github.com/repos/openMF/android-client/collaborators{/collaborator}",
//               teams_url:
//                 "https://api.github.com/repos/openMF/android-client/teams",
//               hooks_url:
//                 "https://api.github.com/repos/openMF/android-client/hooks",
//               issue_events_url:
//                 "https://api.github.com/repos/openMF/android-client/issues/events{/number}",
//               events_url:
//                 "https://api.github.com/repos/openMF/android-client/events",
//               assignees_url:
//                 "https://api.github.com/repos/openMF/android-client/assignees{/user}",
//               branches_url:
//                 "https://api.github.com/repos/openMF/android-client/branches{/branch}",
//               tags_url:
//                 "https://api.github.com/repos/openMF/android-client/tags",
//               blobs_url:
//                 "https://api.github.com/repos/openMF/android-client/git/blobs{/sha}",
//               git_tags_url:
//                 "https://api.github.com/repos/openMF/android-client/git/tags{/sha}",
//               git_refs_url:
//                 "https://api.github.com/repos/openMF/android-client/git/refs{/sha}",
//               trees_url:
//                 "https://api.github.com/repos/openMF/android-client/git/trees{/sha}",
//               statuses_url:
//                 "https://api.github.com/repos/openMF/android-client/statuses/{sha}",
//               languages_url:
//                 "https://api.github.com/repos/openMF/android-client/languages",
//               stargazers_url:
//                 "https://api.github.com/repos/openMF/android-client/stargazers",
//               contributors_url:
//                 "https://api.github.com/repos/openMF/android-client/contributors",
//               subscribers_url:
//                 "https://api.github.com/repos/openMF/android-client/subscribers",
//               subscription_url:
//                 "https://api.github.com/repos/openMF/android-client/subscription",
//               commits_url:
//                 "https://api.github.com/repos/openMF/android-client/commits{/sha}",
//               git_commits_url:
//                 "https://api.github.com/repos/openMF/android-client/git/commits{/sha}",
//               comments_url:
//                 "https://api.github.com/repos/openMF/android-client/comments{/number}",
//               issue_comment_url:
//                 "https://api.github.com/repos/openMF/android-client/issues/comments{/number}",
//               contents_url:
//                 "https://api.github.com/repos/openMF/android-client/contents/{+path}",
//               compare_url:
//                 "https://api.github.com/repos/openMF/android-client/compare/{base}...{head}",
//               merges_url:
//                 "https://api.github.com/repos/openMF/android-client/merges",
//               archive_url:
//                 "https://api.github.com/repos/openMF/android-client/{archive_format}{/ref}",
//               downloads_url:
//                 "https://api.github.com/repos/openMF/android-client/downloads",
//               issues_url:
//                 "https://api.github.com/repos/openMF/android-client/issues{/number}",
//               pulls_url:
//                 "https://api.github.com/repos/openMF/android-client/pulls{/number}",
//               milestones_url:
//                 "https://api.github.com/repos/openMF/android-client/milestones{/number}",
//               notifications_url:
//                 "https://api.github.com/repos/openMF/android-client/notifications{?since,all,participating}",
//               labels_url:
//                 "https://api.github.com/repos/openMF/android-client/labels{/name}",
//               releases_url:
//                 "https://api.github.com/repos/openMF/android-client/releases{/id}",
//               deployments_url:
//                 "https://api.github.com/repos/openMF/android-client/deployments",
//               created_at: "2014-04-17T02:35:44Z",
//               updated_at: "2021-02-05T14:06:35Z",
//               pushed_at: "2021-02-12T11:24:13Z",
//               git_url: "git://github.com/openMF/android-client.git",
//               ssh_url: "git@github.com:openMF/android-client.git",
//               clone_url: "https://github.com/openMF/android-client.git",
//               svn_url: "https://github.com/openMF/android-client",
//               homepage: "https://openmf.github.io/mobileapps.github.io/",
//               size: 101972,
//               stargazers_count: 147,
//               watchers_count: 147,
//               language: "Java",
//               has_issues: true,
//               has_projects: true,
//               has_downloads: true,
//               has_wiki: true,
//               has_pages: false,
//               forks_count: 462,
//               mirror_url: null,
//               archived: false,
//               disabled: false,
//               open_issues_count: 650,
//               license: {
//                 key: "mpl-2.0",
//                 name: "Mozilla Public License 2.0",
//                 spdx_id: "MPL-2.0",
//                 url: "https://api.github.com/licenses/mpl-2.0",
//                 node_id: "MDc6TGljZW5zZTE0",
//               },
//               forks: 462,
//               open_issues: 650,
//               watchers: 147,
//               default_branch: "master",
//             },
//           },
//           _links: {
//             self: {
//               href:
//                 "https://api.github.com/repos/openMF/android-client/pulls/1539",
//             },
//             html: {
//               href: "https://github.com/openMF/android-client/pull/1539",
//             },
//             issue: {
//               href:
//                 "https://api.github.com/repos/openMF/android-client/issues/1539",
//             },
//             comments: {
//               href:
//                 "https://api.github.com/repos/openMF/android-client/issues/1539/comments",
//             },
//             review_comments: {
//               href:
//                 "https://api.github.com/repos/openMF/android-client/pulls/1539/comments",
//             },
//             review_comment: {
//               href:
//                 "https://api.github.com/repos/openMF/android-client/pulls/comments{/number}",
//             },
//             commits: {
//               href:
//                 "https://api.github.com/repos/openMF/android-client/pulls/1539/commits",
//             },
//             statuses: {
//               href:
//                 "https://api.github.com/repos/openMF/android-client/statuses/ea4857905e48ba11e0f4a591121842f6c88024e9",
//             },
//           },
//           author_association: "CONTRIBUTOR",
//           auto_merge: null,
//           active_lock_reason: null,
//         },
//       },
//       public: true,
//       created_at: "2021-02-13T05:22:49Z",
//       org: {
//         id: 3473607,
//         login: "openMF",
//         gravatar_id: "",
//         url: "https://api.github.com/orgs/openMF",
//         avatar_url: "https://avatars.githubusercontent.com/u/3473607?",
//       },
//     },
//   },
// ]

export default PullRequestReviewEventTests;

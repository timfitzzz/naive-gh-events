import { GithubPullRequest } from './';
import {
  GithubEventType,
  defaultActorPaths,
  repoParentPaths,
} from './helperTypes';

export const pullRequestPaths = {
  id: 'payload.pull_request.number',
  url: 'payload.pull_request.html_url',
  title: 'payload.pull_request.title',
};

const PullRequestEvent: GithubEventType = {
  config: {
    actionPropPath: 'payload.action',
    actionTypes: [
      'opened',
      'closed',
      'reopened',
      'assigned',
      'unassigned',
      'review_requested',
      'review_request_removed',
      'labeled',
      'unlabeled',
      'synchronize',
    ],
  },
  paths: {
    actor: defaultActorPaths,
    verb: {
      opened: 'opened',
      closed: 'closed',
      reopened: 'reopened',
      assigned: 'assigned',
      unassigned: 'unassigned',
      review_requested: 'requested',
      review_request_removed: 'rescinded',
      labeled: 'applied',
      unlabeled: 'removed',
      synchronize: 'synchronized',
    },
    result: {
      opened: ['pull request', 'pull requests'],
      closed: ['pull request', 'pull requests'],
      reopened: ['pull request', 'pull requests'],
      assigned: ['pull request', 'pull requests'],
      unassigned: ['pull request', 'pull requests'],
      review_requested: ['review of pull request', 'reviews of pull requests'],
      review_request_removed: [
        'request for review of pull request',
        'requests for review of pull requests',
      ],
      labeled: ['label', 'labels'],
      unlabeled: ['label', 'labels'],
      synchronize: ['pull request', 'pull request'],
    },
    subject: {
      opened: pullRequestPaths,
      closed: pullRequestPaths,
      reopened: pullRequestPaths,
      assigned: pullRequestPaths,
      unassigned: pullRequestPaths,
      review_requested: pullRequestPaths,
      review_request_removed: pullRequestPaths,
      labeled: {
        id: 'payload.label.name',
        url: 'payload.label.html_url',
      },
      unlabeled: {
        id: 'payload.label.name',
        url: 'payload.label.html_url',
      },
      synchronize: pullRequestPaths,
    },
    target: {
      labeled: {
        preposition: 'to',
        ...pullRequestPaths,
      },
      unlabeled: {
        preposition: 'from',
        ...pullRequestPaths,
      },
    },
    parent: repoParentPaths,
  },
};

export default PullRequestEvent;

export interface PullRequestEventPayload {
  action: string;
  number: number;
  pull_request: GithubPullRequest;
}

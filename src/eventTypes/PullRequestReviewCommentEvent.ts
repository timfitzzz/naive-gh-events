import { GithubPullRequest, GithubPullRequestComment } from '../types';
import {
  GithubEventType,
  repoParentPaths,
  defaultActorPaths,
} from './helperTypes';

const PullRequestReviewCommentEvent: GithubEventType = {
  config: {
    actionPropPath: 'payload.action',
    actionTypes: ['created', 'edited', 'deleted'],
  },
  paths: {
    actor: defaultActorPaths,
    verb: {
      created: 'added',
      edited: 'changed',
      deleted: 'removed',
    },
    result: {
      created: ['a comment', 'comments'],
      deleted: ['a comment', 'comments'],
      edited: ['a comment', 'comments'],
    },
    subject: {
      created: {
        id: 'payload.comment.id',
        url: 'payload.comment.html_url',
        content: 'payload.comment.body',
        title: 'payload.comment.id',
      },
      edited: {
        id: 'payload.comment.id',
        url: 'payload.comment.html_url',
        content: 'payload.changes',
      },
    },
    target: {
      created: {
        preposition: 'on',
        desc: 'pull request',
        id: 'payload.pull_request.id',
        title: 'payload.pull_request.title',
        url: 'payload.pull_request.html_url',
      },
      edited: {
        preposition: 'on',
        desc: 'pull request',
        id: 'payload.pull_request.id',
        title: 'payload.pull_request.title',
        url: 'payload.pull_request.html_url',
      },
    },
    parent: repoParentPaths,
  },
};

export default PullRequestReviewCommentEvent;

export interface PullRequestReviewCommentEventPayload {
  action: string;
  number: number;
  comment: GithubPullRequestComment;
  pull_request: GithubPullRequest;
}

import { GithubIssue, GithubEvent } from '../types';
import { GithubEventType } from './helperTypes';

const IssueCommentEvent: GithubEventType = {
  config: {
    actionPropPath: 'payload.action',
    // although this can theoretically have multiple action types,
    // only 'created' events seem to actually appear via the api
    actionTypes: ['created', 'edited', 'deleted'],
  },
  paths: {
    actor: {
      id: 'actor.login',
      url: 'actor.url',
    },
    verb: {
      created: 'created',
      edited: 'edited',
      deleted: 'deleted',
    },
    result: ['comment', 'comments'],
    subject: {
      id: 'payload.comment.id',
      content: 'payload.comment.body',
      url: 'payload.comment.html_url',
    },
    target: {
      preposition: 'on',
      desc: 'issue',
      id: 'payload.issue.number',
      url: 'payload.issue.html_url',
      title: 'payload.issue.title',
    },
    parent: {
      id: 'repo.name',
      url: 'repo.url',
      preposition: 'in',
      title: 'repo.name',
    },
  },
};

export default IssueCommentEvent;

export interface IssueCommentEventPayload {
  action: string;
  issue: GithubIssue;
  comment: GithubEvent['payload']['comment'];
}

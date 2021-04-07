import { GithubCommitComment } from './';
import { GithubEventType } from './helperTypes';

const CommitCommentEvent: GithubEventType = {
  config: {},
  paths: {
    actor: {
      id: 'payload.comment.user.login',
      url: 'payload.comment.user.html_url',
    },
    verb: 'created', // had actions defined here, but they apparently don't matter
    result: ['a comment', 'comments'],
    subject: {
      id: 'payload.comment.id',
      url: 'payload.comment.html_url',
      content: 'payload.comment.body',
    },
    target: {
      preposition: 'on',
      id: 'payload.comment.commit_id',
      desc: 'a commit',
      url: 'payload.comment.html_url',
    },
    parent: {
      id: 'repo.name',
      url: 'repo.url',
      preposition: 'in',
      title: 'repo.name',
    },
  },
};

export default CommitCommentEvent;

export interface CommitCommentEventPayload {
  comment: GithubCommitComment;
}

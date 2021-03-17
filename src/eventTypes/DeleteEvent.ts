import { GithubEventType, repoParentPaths } from './helperTypes';

const DeleteEvent: GithubEventType = {
  config: {
    actionPropPath: 'payload.ref_type',
    actionTypes: ['branch', 'tag', 'repository'],
  },
  paths: {
    actor: {
      id: 'actor.login',
      url: 'actor.url',
    },
    verb: 'deleted',
    result: {
      branch: ['a branch', 'branches'],
      tag: ['a tag', 'tags'],
      repository: ['repository', 'repositories'],
    },
    subject: {
      branch: {
        id: 'payload.ref',
      },
      tag: {
        id: 'payload.ref',
      },
      repository: {
        id: 'repo.name',
        url: 'repo.url',
        title: 'repo.name',
      },
    },
    parent: {
      branch: repoParentPaths,
      tag: repoParentPaths,
    },
  },
};

export default DeleteEvent;

export interface DeleteEventPayload {
  ref: string;
  ref_type: string;
  pusher_type: string;
}

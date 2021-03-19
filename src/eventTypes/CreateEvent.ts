import {
  defaultActorPaths,
  GithubEventType,
  repoParentPaths,
} from './helperTypes';

const CreateEvent: GithubEventType = {
  config: {
    actionPropPath: 'payload.ref_type',
    actionTypes: ['branch', 'tag', 'repository'],
  },
  paths: {
    actor: defaultActorPaths,
    verb: 'created',
    result: {
      branch: ['branch', 'branches'],
      tag: ['a tag', 'tags'],
      repository: ['repository', 'repositories'],
    },
    subject: {
      branch: {
        id: 'payload.ref',
        title: 'payload.ref',
      },
      tag: {
        id: 'payload.ref',
        title: 'payload.ref',
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

export default CreateEvent;

export interface CreateEventPayload {
  ref: string;
  ref_type: string;
  master_branch: string;
  description: string;
  pusher_type: string;
}

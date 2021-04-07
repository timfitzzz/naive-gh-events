import { GithubRepo } from './';
import { GithubEventType, defaultActorPaths } from './helperTypes';

const ForkEvent: GithubEventType = {
  config: {},
  paths: {
    actor: defaultActorPaths,
    verb: 'forked',
    result: ['repository', 'repositories'],
    subject: {
      id: 'repo.id',
      url: 'repo.url',
      title: 'repo.name',
    },
    target: {
      preposition: 'to',
      desc: 'new repository',
      id: 'payload.forkee.id',
      title: 'payload.forkee.full_name',
      url: 'payload.forkee.html_url',
    },
  },
};

export default ForkEvent;

export interface ForkEventPayload {
  forkee: GithubRepo;
}

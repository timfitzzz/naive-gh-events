import { defaultActorPaths, GithubEventType } from './helperTypes';

const PublicEvent: GithubEventType = {
  config: {},
  paths: {
    actor: defaultActorPaths,
    verb: 'set',
    result: ['repository', 'repositories'],
    subject: {
      id: 'repo.id',
      title: 'repo.name',
      url: 'repo.url',
    },
    target: {
      id: '',
      preposition: 'to',
      desc: "'public'",
    },
  },
};

export default PublicEvent;

export type PublicEventPayload = {}; // eslint-disable-line

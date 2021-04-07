import { defaultActorPaths, GithubEventType } from './helperTypes';

const WatchEvent: GithubEventType = {
  config: {},
  paths: {
    actor: defaultActorPaths,
    verb: 'started',
    result: ['watching', 'watching'],
    subject: {
      id: 'repo.id',
      title: 'repo.name',
      desc: 'repository',
      url: 'repo.url',
    },
  },
};

export default WatchEvent;

export interface WatchEventPayload {
  action: string;
}

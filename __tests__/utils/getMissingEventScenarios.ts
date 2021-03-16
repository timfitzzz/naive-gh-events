/*  eslint-disable no-console */

import { lookupActionTypes } from '../../src/getProps';
import { GHEvent } from '../../src';
const fs = require('fs');
const axios = require('axios');

var getConfig = () => ({
  method: 'get',
  url: `https://api.github.com/events`,
  headers: {
    Authorization: 'Bearer 04a9b0d7c9cacb9ea6399846086f478716557b4d',
  },
});

let neededTypes: { [key: string]: string[] } = {
  DeleteEvent: ['repository'],
  IssueCommentEvent: ['edited', 'deleted'],
  IssuesEvent: ['assigned', 'unassigned', 'labeled', 'unlabeled'],
  MemberEvent: ['edited', 'removed'],
  PullRequestEvent: [
    'assigned',
    'unassigned',
    'review_requested',
    'review_request_removed',
    'labeled',
    'unlabeled',
    'synchronize',
  ],
  PullRequestReviewEvent: ['edited', 'deleted'],
  PullRequestReviewCommentEvent: ['edited', 'deleted'],
  ReleaseEvent: ['edited'],
  SponsorshipData: [''],
};

function isNeeded(event: GHEvent): boolean {
  const needs = neededTypes[event.type];
  const actionType = lookupActionTypes(event);

  if (needs) {
    console.log(`-- found event with needed scenarios: ${event.type}`);
    console.log(`--- action types found: ${actionType}`);
    if (needs.length === 1 && needs[0] === '') {
      console.log(`--- event ${event.type} needs any scenario`);
      return true;
    } else {
      if (Array.isArray(actionType)) {
        let matches = actionType.filter((type) => needs.indexOf(type) !== -1);

        if (matches.length > 0) {
          console.log(
            `**** found matching scenarios ****: ${matches.join(', ')}`
          );
          return true;
        } else {
          console.log(`---- no matches, still looking for ${needs.join(', ')}`);
          return false;
        }
      } else {
        if (actionType && needs.indexOf(actionType) === -1) {
          console.log(`---- no matches, still looking for ${needs.join(', ')}`);
          return false;
        } else {
          console.log(`**** found matching scenarios ****: ${actionType}`);
          return true;
        }
      }
    }
  } else {
    return false;
  }
}

function removeFromNeeded(event: GHEvent): void {
  const actionType = lookupActionTypes(event);

  if (isNeeded(event)) {
    if (
      neededTypes[event.type].length === 1 &&
      neededTypes[event.type][0] === ''
    ) {
      let { [event.type]: discard, ...others } = neededTypes;
      console.log(`finished ${discard}`);
      neededTypes = others;
    } else {
      neededTypes[event.type] = neededTypes[event.type].filter((type) => {
        if (Array.isArray(actionType)) {
          if (actionType.indexOf(type) !== -1) {
            return true;
          } else {
            return false;
          }
        } else {
          if (actionType === type) {
            return false;
          } else {
            return true;
          }
        }
      });
      if (neededTypes[event.type].length === 0) {
        let { [event.type]: discard, ...others } = neededTypes;
        console.log(`finished ${discard}`);
        neededTypes = others;
      }
    }
  }
}

function saveEvent(event: GHEvent): void {
  let actionType = lookupActionTypes(event);
  let nameString: string;

  if (Array.isArray(actionType)) {
    nameString = actionType.join('-');
  } else {
    nameString = 'noactiontype';
  }

  fs.writeFileSync(
    `${__dirname}/newevents/${event.type}-${actionType}.json`,
    JSON.stringify(event)
  );
  console.log(`wrote ${event.type} with ${actionType}`);
}

export function getMissingEvents(): void {
  setInterval(() => {
    console.log('getting events');
    axios(getConfig()).then(function (response) {
      response.data.forEach(async (event) => {
        if (isNeeded(event)) {
          console.log('found needed event, type ', event.type);
          saveEvent(event);
          removeFromNeeded(event);
        }
      });
    });
  }, 10000);
}

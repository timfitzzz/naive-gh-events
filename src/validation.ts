import { InvalidResponse, ValidationResponse } from 'types';
import EventTypes, { GHEvent } from './eventTypes';

export function getKnownTypes(): string[] {
  return Object.getOwnPropertyNames(EventTypes);
}

export function validateEvent(
  event: GHEvent
): GHEvent | [event: any, explanation: string] {
  const knownTypes = getKnownTypes();

  if (
    event &&
    event.type &&
    knownTypes.indexOf(event.type) !== -1 &&
    event.created_at &&
    event.actor
  ) {
    return event;
  } else {
    if (!event || typeof event !== 'object' || Array.isArray(event))
      return [event, 'event cannot be processed: no event object found'];
    else if (!event.type)
      return [event, 'event cannot be processed: no type property'];
    else if (knownTypes.indexOf(event.type) == -1)
      return [
        event,
        `event cannot be processed: no mappings found for type ${event.type}`,
      ];
    else if (!event.created_at)
      return [event, `event cannot be processed: no created_at property`];
    else if (!event.actor)
      return [event, `event cannot be processed: no actor property`];
    else return [event, `event cannot be processed: unknown`];
  }
}

export function validateEvents(events: GHEvent[]): ValidationResponse {
  if (!Array.isArray(events)) {
    return {
      result: 'invalid',
      errReason: 'valid events must be provided in an array',
    };
  } else if (events.length === 0) {
    return {
      result: 'invalid',
      errReason: 'no events found in array',
    };
  }

  const validationResults = events.map((event: GHEvent) =>
    validateEvent(event)
  );

  const validEvents: GHEvent[] = validationResults.filter((result) =>
    result ? !Array.isArray(result) : false
  ) as GHEvent[];
  const invalidEvents: InvalidResponse[] = validationResults.filter((result) =>
    result ? Array.isArray(result) : false
  ) as InvalidResponse[];

  return {
    result: validEvents ? (invalidEvents ? 'partial' : 'valid') : 'invalid',
    validEvents,
    invalidEvents,
  };
}

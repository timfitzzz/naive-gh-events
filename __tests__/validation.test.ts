import { validateEvent, validateEvents } from '../src/validation';
import testData from './testData';

describe('validateEvent', () => {
  it('should return the expected error if given a null, undefined, string, number, or array input', () => {
    // @ts-ignore
    let nullResult = validateEvent(null);
    let undefResult = validateEvent(undefined);
    // @ts-ignore
    let stringResult = validateEvent('okay');
    // @ts-ignore
    let numResult = validateEvent(2);
    // @ts-ignore
    let arrResult = validateEvent([{}]);

    expect(nullResult).toStrictEqual([
      null,
      'event cannot be processed: no event object found',
    ]);
    expect(undefResult).toStrictEqual([
      undefined,
      'event cannot be processed: no event object found',
    ]);
    expect(stringResult).toStrictEqual([
      'okay',
      'event cannot be processed: no event object found',
    ]);
    expect(numResult).toStrictEqual([
      2,
      'event cannot be processed: no event object found',
    ]);
    expect(arrResult).toStrictEqual([
      [{}],
      'event cannot be processed: no event object found',
    ]);
  });

  it('should return the expected error if given an event with no type', () => {
    // @ts-ignore
    let typeless = validateEvent({ created_at: 'date', actor: {} });

    expect(typeless).toStrictEqual([
      { created_at: 'date', actor: {} },
      'event cannot be processed: no type property',
    ]);
  });

  it('should return the expected error if given an event with unknown type', () => {
    let badType = validateEvent({
      created_at: 'date',
      type: 'FakeType',
      // @ts-ignore
      actor: {},
    });

    expect(badType).toStrictEqual([
      { created_at: 'date', type: 'FakeType', actor: {} },
      'event cannot be processed: no mappings found for type FakeType',
    ]);
  });

  it('should return the expected error if given an event with no created_at date', () => {
    let undated = validateEvent({
      created_at: undefined,
      type: 'CreateEvent',
      // @ts-ignore
      actor: {},
    });

    expect(undated).toStrictEqual([
      { created_at: undefined, type: 'CreateEvent', actor: {} },
      `event cannot be processed: no created_at property`,
    ]);
  });

  it('should return the expected error if given an event with no actor', () => {
    // @ts-ignore
    let noActor = validateEvent({ created_at: 'date', type: 'CreateEvent' });

    expect(noActor).toStrictEqual([
      { created_at: 'date', type: 'CreateEvent' },
      `event cannot be processed: no actor property`,
    ]);
  });
});

describe('validateEvents', () => {
  it('should return the expected output for a collection of valid events', () => {
    let testCollection = [
      testData.CreateEvent.testEvents.branch[0].events[0],
      testData.DeleteEvent.testEvents.branch[0].events[0],
      testData.PushEvent.testEvents.none[0].events[0],
    ];

    let validationResponse = validateEvents(testCollection);

    expect(validationResponse.validEvents).toStrictEqual(testCollection);
  });

  it('should return the expected output for a mixed collection of valid and invalid events', () => {
    let testCollection = [
      testData.CreateEvent.testEvents.branch[0].events[0],
      'asdf',
      testData.DeleteEvent.testEvents.branch[0].events[0],
      testData.PushEvent.testEvents.none[0].events[0],
      {},
      [],
    ];

    // @ts-ignore
    let validationResponse = validateEvents(testCollection);

    expect(validationResponse.validEvents).toStrictEqual(
      testCollection.filter(
        // @ts-ignore
        (event) => event && typeof event.created_at === 'string'
      )
    );
    expect(validationResponse.invalidEvents).toStrictEqual([
      ['asdf', 'event cannot be processed: no event object found'],
      [{}, 'event cannot be processed: no type property'],
      [[], 'event cannot be processed: no event object found'],
    ]);
    expect(validationResponse.result).toBe('partial');
  });
});

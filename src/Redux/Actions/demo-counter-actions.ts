import { Action } from 'redux';

/**
 * Define all possible 'type' properties of redux actions associated with site settings
 */
export enum EDemoCounterActionTypes {
  SET_QUOTE = '[DemoCounter] Set Quote',
  INCREMENT = '[DemoCounter] Increment',
  RESET = '[DemoCounter] Reset'
}

/**
 * Define an 'action creator' for each type of action
 * Here we take the class-based approach to action creators
 */
export class DemoCounterIncrement implements Action {
  readonly type = EDemoCounterActionTypes.INCREMENT;
  constructor(public payload?: number) {
    return { ...this };
  }
}

export class DemoCounterReset implements Action {
  readonly type = EDemoCounterActionTypes.RESET;
  constructor() {
    return { ...this };
  }
}

export class DemoCounterSetQuote implements Action {
  readonly type = EDemoCounterActionTypes.SET_QUOTE;
  constructor(public payload: { author: string; quote: string }) {
    return { ...this };
  }
}

/**
 * Combine and export all action-creator class names into a single type
 */
export type DemoCounterActions = DemoCounterIncrement | DemoCounterReset | DemoCounterSetQuote;

import { Action } from 'redux';

export interface INameMatch {
  type: 'comet' | 'asteroid' | 'dust' | 'meteor';
  name: string;
}

/**
 * Define all possible 'types' of redux action associated with site settings
 */
export enum ESearchResultsActionTypes {
  SET_NAME_MATCHES = '[SearchResults] Set Name Matches',
  SELECT_OBJECT = '[SearchResults] Selecte Object'
}

/**
 * Define an 'action creator' for each type of action
 * Here we take the class-based approach to action creators
 */
export class SearchResultsSetNameMatches implements Action {
  readonly type = ESearchResultsActionTypes.SET_NAME_MATCHES;
  constructor(public payload: INameMatch[]) {
    return { ...this }; // return js object instead of class instance
  }
}

export class SearchResultsSelectObject implements Action {
  readonly type = ESearchResultsActionTypes.SELECT_OBJECT;
  constructor(public payload: INameMatch | undefined) {
    return { ...this }; // return js object instead of class instance
  }
}

/**
 * Combine and export all action-creator class names into a single type
 */
export type SearchResultsActions = SearchResultsSetNameMatches | SearchResultsSelectObject;

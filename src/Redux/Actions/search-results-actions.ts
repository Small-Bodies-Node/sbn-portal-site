import { Action } from 'redux';

export type TObjectTypes = 'comet' | 'asteroid' | 'dust' | 'meteor';

export interface INameMatch {
  type: TObjectTypes;
  name: string;
}

export interface IRegistryResult {
  name: string;
  type: TObjectTypes;
  alternate_types: string[];
  cross_ids: string[];
  mission_datasets: any[];
  roses_proposal_datasets: any[];
}

/**
 * Define all possible 'types' of redux action associated with site settings
 */
export enum ESearchResultsActionTypes {
  SET_NAME_MATCHES = '[SearchResults] Set Name Matches',
  SELECT_OBJECT = '[SearchResults] Select Object',
  SET_REGISTRY_RESULTS = '[SearchResults] Set Registry Results'
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

export class SearchResultsSetRegistryResults implements Action {
  readonly type = ESearchResultsActionTypes.SET_REGISTRY_RESULTS;
  constructor(public payload: IRegistryResult) {
    return { ...this }; // return js object instead of class instance
  }
}

/**
 * Combine and export all action-creator class names into a single type
 */
export type SearchResultsActions =
  | SearchResultsSetNameMatches
  | SearchResultsSelectObject
  | SearchResultsSetRegistryResults;

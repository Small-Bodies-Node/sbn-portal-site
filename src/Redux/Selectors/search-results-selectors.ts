import { createSelector } from 'reselect';

import { IState } from '..';
import { IRegistryResult } from '../Actions/search-results-actions';

/**
 * Elemental Selectors
 */

export const selectSearchResultsNameMatches = (state: IState) =>
  state.searchResultsSubstate.nameMatches;

export const selectSearchResultsSelectedObject = (state: IState) =>
  state.searchResultsSubstate.selectedObject;

export const selectSearchResultsRegistryResults = (name: string | undefined) => (state: IState) =>
  state.searchResultsSubstate.registryResults.find((el) => el.name === name);

/**
 * Compound Selectors
 */

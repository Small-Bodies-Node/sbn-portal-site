import { createSelector } from 'reselect';

import { IState } from '..';

/**
 * Elemental Selectors
 */

export const selectSearchResultsNameMatches = (state: IState) =>
  state.searchResultsSubstate.nameMatches;

export const selectSearchResultsSelectedObject = (state: IState) =>
  state.searchResultsSubstate.selectedObject;

/**
 * Compound Selectors
 */

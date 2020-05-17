import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { siteSettingsReducer, ISiteSettingsSubstate } from './Reducers/site-settings-reducer';
import { demoCounterReducer, IDemoCounterSubstate } from './Reducers/demo-counter-reducer';
import { searchResultsReducer, ISearchResultsSubstate } from './Reducers/search-results-reducer';

export interface IState {
  siteSettingsSubstate: ISiteSettingsSubstate;
  demoCounterSubstate: IDemoCounterSubstate;
  searchResultsSubstate: ISearchResultsSubstate;
}

export const rootReducer = combineReducers<IState>({
  siteSettingsSubstate: siteSettingsReducer,
  demoCounterSubstate: demoCounterReducer,
  searchResultsSubstate: searchResultsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

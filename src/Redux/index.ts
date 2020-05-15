import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { siteSettingsReducer, ISiteSettings } from './Reducers/site-settings-reducer';
import { demoCounterReducer, IDemoCounter } from './Reducers/demo-counter-reducer';

export interface IState {
  siteSettingsSubstate: ISiteSettings;
  demoCounterSubstate: IDemoCounter;
}

export const rootReducer = combineReducers<IState>({
  siteSettingsSubstate: siteSettingsReducer,
  demoCounterSubstate: demoCounterReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

import { createStore } from 'redux';
import { combineReducers } from 'redux';

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

export const store = createStore(rootReducer);

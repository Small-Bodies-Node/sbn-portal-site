import { DemoCounterActions, EDemoCounterActionTypes } from '../Actions/demo-counter-actions';

export interface IDemoCounter {
  count: number;
}

const initialState: IDemoCounter = {
  count: 0
};

export function demoCounterReducer(
  state: Readonly<IDemoCounter> = initialState,
  action: DemoCounterActions
): IDemoCounter {
  switch (action.type) {
    case EDemoCounterActionTypes.DemoCounterIncrement: {
      const incValue = action.payload || 1;
      return {
        ...state,
        count: state.count + incValue
      };
    }
    case EDemoCounterActionTypes.DemoCounterReset: {
      return {
        ...state,
        count: 0
      };
    }
    default:
      return state;
  }
}

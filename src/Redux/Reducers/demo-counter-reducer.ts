import { DemoCounterActions, EDemoCounterActionTypes } from '../Actions/demo-counter-actions';

export interface IDemoCounter {
  count: number;
  quote: string;
  author: string;
}

const initialState: IDemoCounter = {
  count: 0,
  quote: '',
  author: ''
};

export function demoCounterReducer(
  state: Readonly<IDemoCounter> = initialState,
  action: DemoCounterActions
): IDemoCounter {
  switch (action.type) {
    case EDemoCounterActionTypes.INCREMENT: {
      const incValue = action.payload || 1;
      return {
        ...state,
        count: state.count + incValue
      };
    }
    case EDemoCounterActionTypes.RESET: {
      return {
        ...state,
        count: 0
      };
    }
    case EDemoCounterActionTypes.SET_QUOTE: {
      return {
        ...state,
        author: action.payload.author,
        quote: action.payload.quote
      };
    }
    default:
      return state;
  }
}

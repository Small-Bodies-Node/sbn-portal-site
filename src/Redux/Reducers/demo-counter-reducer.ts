import { DemoCounterActions, EDemoCounterActionTypes } from '../Actions/demo-counter-actions';

export interface IDemoCounterSubstate {
  count: number;
  quote: string;
  author: string;
}

const initialState: IDemoCounterSubstate = {
  count: 0,
  quote: '',
  author: ''
};

export function demoCounterReducer(
  state: Readonly<IDemoCounterSubstate> = initialState,
  action: DemoCounterActions
): IDemoCounterSubstate {
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

import { INameMatch } from '../Actions/search-results-actions';
import { ESearchResultsActionTypes, SearchResultsActions } from '../Actions/search-results-actions';

export interface ISearchResults {
  nameMatches: INameMatch[];
  selectedObject?: INameMatch;
}

const initialState: ISearchResults = {
  nameMatches: [],
  selectedObject: undefined
};

export function searchResultsReducer(
  state: Readonly<ISearchResults> = initialState,
  action: SearchResultsActions
): ISearchResults {
  switch (action.type) {
    case ESearchResultsActionTypes.SET_NAME_MATCHES: {
      return {
        ...state,
        nameMatches: [...action.payload]
      };
    }
    case ESearchResultsActionTypes.SELECT_OBJECT: {
      return {
        ...state,
        selectedObject: action.payload
      };
    }

    default:
      return state;
  }
}

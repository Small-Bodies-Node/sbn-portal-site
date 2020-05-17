import { INameMatch } from '../Actions/search-results-actions';
import { ESearchResultsActionTypes, SearchResultsActions } from '../Actions/search-results-actions';
import { IRegistryResult } from '../Actions/search-results-actions';
import { uniqueArrayBy } from '../../Utils/uniqueArrayBy';

export interface ISearchResults {
  nameMatches: INameMatch[];
  selectedObject?: INameMatch;
  registryResults: IRegistryResult[];
}

const initialState: ISearchResults = {
  nameMatches: [],
  selectedObject: undefined,
  registryResults: []
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
    case ESearchResultsActionTypes.SET_REGISTRY_RESULTS: {
      const x = uniqueArrayBy([...state.registryResults, action.payload], 'name');
      console.log('x', x);
      return {
        ...state,
        registryResults: x
      };
    }
    default:
      return state;
  }
}

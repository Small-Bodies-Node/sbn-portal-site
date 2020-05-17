import { INameMatch } from '../Actions/search-results-actions';
import { ESearchResultsActionTypes, SearchResultsActions } from '../Actions/search-results-actions';
import { IRegistryResult } from '../Actions/search-results-actions';
import { uniqueArrayBy } from '../../Utils/uniqueArrayBy';

export interface ISearchResultsSubstate {
  nameMatches: INameMatch[];
  selectedObject?: INameMatch;
  registryResults: IRegistryResult[];
}

const initialState: ISearchResultsSubstate = {
  nameMatches: [],
  selectedObject: undefined,
  registryResults: []
};

export function searchResultsReducer(
  state: Readonly<ISearchResultsSubstate> = initialState,
  action: SearchResultsActions
): ISearchResultsSubstate {
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
      return {
        ...state,
        // Just add to registryResults then ensure array has objects unique by 'name' property
        registryResults: uniqueArrayBy([...state.registryResults, action.payload], 'name')
      };
    }
    default:
      return state;
  }
}

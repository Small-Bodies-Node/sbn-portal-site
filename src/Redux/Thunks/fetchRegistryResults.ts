import { SearchResultsSetRegistryResults, INameMatch } from '../Actions/search-results-actions';

const superSimpleJsonApiUrl =
  'https://raw.githubusercontent.com/Small-Bodies-Node/sbn-portal-site/simple-headless-cms/headless-cms/demo-results-elst-pizzaro-comet.json';

export function fetchRegistryResults(selectedObject: INameMatch) {
  // Mock fetch results
  return function (dispatch: any) {
    return fetch(superSimpleJsonApiUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log('data', data);
        dispatch(new SearchResultsSetRegistryResults(data));
      })
      .catch((err) => {
        // Handle errors
      });
  };
}

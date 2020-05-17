import { SearchResultsSetNameMatches } from '../Actions/search-results-actions';

const superSimpleJsonApiUrl =
  'https://raw.githubusercontent.com/Small-Bodies-Node/sbn-portal-site/simple-headless-cms/headless-cms/demo-name-matches.json';

export function fetchNameMatches(inputText: string) {
  console.log('inputText', inputText);
  if (!inputText) return (dispatch: any) => dispatch(new SearchResultsSetNameMatches([]));
  return function (dispatch: any) {
    return fetch(superSimpleJsonApiUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log('data', data.matches);
        dispatch(new SearchResultsSetNameMatches(data.matches));
      })
      .catch((err) => {
        // Handle errors
      });
  };
}

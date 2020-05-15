const superSimpleJsonApiUrl =
  'https://raw.githubusercontent.com/Small-Bodies-Node/sbn-portal-site/simple-headless-cms/headless-cms/demo-name-matches.json';

export function fetchNameMatches(inputText: string) {
  return function (dispatch: any) {
    return fetch(superSimpleJsonApiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
      })
      .catch((err) => {
        // Handle errors
      });
  };
}

//

import { DemoCounterSetQuote, DemoCounterIncrement } from '../Actions/demo-counter-actions';

export function fetchRandomTrumpQuote() {
  return function (dispatch: any) {
    return fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
      .then((res) => res.json())
      .then((data) => {
        const quote = data.message;
        console.log('text', quote);
        dispatch(new DemoCounterSetQuote({ quote, author: 'trump' }));
        dispatch(new DemoCounterIncrement());
      })
      .catch((err) => {
        // Handle errors
      });
  };
}

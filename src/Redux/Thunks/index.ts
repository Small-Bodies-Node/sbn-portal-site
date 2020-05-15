//

import { DemoCounterSetQuote, DemoCounterIncrement } from '../Actions/demo-counter-actions';

export function fetchLutherInsult() {
  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

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

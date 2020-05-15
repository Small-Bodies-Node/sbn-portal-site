import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Redux';

// Style setup
import './index.scss';
import 'typeface-roboto';

// App Setup
import * as serviceWorker from './serviceWorker';
import { AppEntry } from './AppEntry';
ReactDOM.render(
  <Provider store={store}>
    <AppEntry />
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import {
  selectSiteSettingsTheme,
  selectSiteSettingsIsHappyWithCookies
} from '../../Redux/Selectors/site-settings-selectors';
import {
  selectDemoCounterCount,
  selectDemoCounterQuote
} from '../../Redux/Selectors/demo-counter-selectors';
import {
  SiteSettingsSetTheme,
  SiteSettingsToggleIsHappyWithCookies
} from '../../Redux/Actions/site-settings-actions';
import { DemoCounterIncrement, DemoCounterReset } from '../../Redux/Actions/demo-counter-actions';

import { fetchLutherInsult } from '../../Redux/Thunks';

export const PageReduxDemo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useSelector(selectSiteSettingsTheme);
  const isHappyWithCookies = useSelector(selectSiteSettingsIsHappyWithCookies);
  const demoCounterCount = useSelector(selectDemoCounterCount);
  const { author, quote } = useSelector(selectDemoCounterQuote);

  return (
    <div className={classes.container}>
      <h1>Redux Demo Page</h1>
      <h4>Demo Site Settings</h4>
      <p> The theme is: {theme}</p>
      <p> Is the user happy with cookies: {isHappyWithCookies ? 'yes' : 'no'}</p>
      <button
        onClick={() => {
          dispatch(new SiteSettingsSetTheme('light'));
        }}
      >
        Make Theme Light
      </button>
      <button
        onClick={() => {
          dispatch(new SiteSettingsToggleIsHappyWithCookies());
        }}
      >
        Toggle Is Happy With Cookies
      </button>
      <h4>Demo Counter</h4>
      <div className={classes.data}>
        <div>
          <span>Author</span> : {author}
        </div>
        <div>
          <span>Quote</span> : {quote}
        </div>
        <div>
          <span>Count</span> : {demoCounterCount}
        </div>
      </div>
      <div style={{ margin: 5 }}>
        <button onClick={() => dispatch(new DemoCounterIncrement())}>Increase Count</button>
        <button onClick={() => dispatch(new DemoCounterReset())}>Reset Count</button>
        <button onClick={() => dispatch(fetchLutherInsult())}> Fetch Trump Quote</button>
      </div>
    </div>
  );
};

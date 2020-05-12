import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import theme from '../MaterialUI';
import { useStyles } from './styles';
import { PageHome } from '../Components/PageHome';
import { PageAbout } from '../Components/PageAbout';
import { Layout } from '../Components/Layout';

export const AppEntry = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router basename={process.env.REACT_APP_BASE_HREF || '/'}>
          <Layout>
            <Switch>
              <Route exact path="/">
                <PageHome />
              </Route>
              <Route path="/about">
                <PageAbout />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  );
};

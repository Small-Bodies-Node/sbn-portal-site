import React from 'react';

import { useStyles } from './styles';
import { Search } from '../Search';
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectSearchResultsSelectedObject } from '../../Redux/Selectors/search-results-selectors';
import { ResultsTitle } from '../ResultsTitle';
import { ResultsForRegistry } from '../ResultsForRegistry';
import { ResultsForCatch } from '../ResultsForCatch';

export const PageHome = () => {
  const classes = useStyles();
  const selectedObject = useSelector(selectSearchResultsSelectedObject);
  return (
    <div className={classes.container}>
      <h1>SBN Home Page</h1>

      {/* <Paper> */}
      <div className={classes.searchWrapper}>
        <Search />
      </div>

      {/* </Paper> */}

      {selectedObject && (
        <div className={classes.resultsWrapper}>
          <Paper>
            <ResultsForRegistry />
          </Paper>
          <Paper>
            <ResultsForCatch />
          </Paper>
        </div>
      )}
    </div>
  );
};

import React from 'react';

import { useStyles } from './styles';
import { Search } from '../Search';
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectSearchResultsSelectedObject } from '../../Redux/Selectors/search-results-selectors';
import { ResultsForRegistry } from '../ResultsForRegistry';
import { ResultsForCatch } from '../ResultsForCatch';
import { ResultsForFerret } from '../ResultsForFerret';

export const PageHome = () => {
  const classes = useStyles();
  const selectedObject = useSelector(selectSearchResultsSelectedObject);
  return (
    <div className={classes.container}>
      <h1>SBN Home Page</h1>

      <div className={classes.searchWrapper}>
        <Search />
      </div>

      {selectedObject && (
        <div className={classes.resultsWrapper}>
          <Paper>
            <ResultsForRegistry />
          </Paper>
          <Paper>
            <ResultsForCatch />
          </Paper>
          <Paper>
            <ResultsForFerret />
          </Paper>
        </div>
      )}
    </div>
  );
};

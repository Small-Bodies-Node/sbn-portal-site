import React from 'react';
import { useSelector } from 'react-redux';

import { useStyles } from './styles';
import { selectSearchResultsSelectedObject } from '../../Redux/Selectors/search-results-selectors';

export const ResultsForRegistry = () => {
  const selectedObject = useSelector(selectSearchResultsSelectedObject);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {selectedObject && (
        <>
          <h4 className={classes.title}>Registry Results</h4>
          <div>Here are some awesome registry results...</div>
        </>
      )}
    </div>
  );
};

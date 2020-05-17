import React from 'react';
import { useSelector } from 'react-redux';

import { useStyles } from './styles';
import { selectSearchResultsSelectedObject } from '../../Redux/Selectors/search-results-selectors';

export const ResultsForFerret = () => {
  const selectedObject = useSelector(selectSearchResultsSelectedObject);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {selectedObject && (
        <>
          <h4 className={classes.title}>Ferret Results</h4>
          <div>Here are some awesome Ferret results...</div>
        </>
      )}
    </div>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';

import { useStyles } from './styles';
import { selectSearchResultsSelectedObject } from '../../Redux/Selectors/search-results-selectors';

export const ResultsTitle = () => {
  const selectedObject = useSelector(selectSearchResultsSelectedObject);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {selectedObject && (
        <>
          {/* <h3 className={classes.title}>Search Results</h3> */}
          <div>Selected Object Name: {selectedObject.name}</div>
          <div>Selected Object Type: {selectedObject.type}</div>
        </>
      )}
    </div>
  );
};

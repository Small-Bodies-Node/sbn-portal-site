import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useStyles } from './styles';
import {
  selectSearchResultsSelectedObject,
  selectSearchResultsRegistryResults
} from '../../Redux/Selectors/search-results-selectors';
import { fetchRegistryResults } from '../../Redux/Thunks/fetchRegistryResults';
import { RegistryComet } from './RegistryComet';

export const ResultsForRegistry = () => {
  const dispatch = useDispatch();
  const selectedObject = useSelector(selectSearchResultsSelectedObject);

  const selectedObjectName = selectedObject && selectedObject.name;
  const registryResult = useSelector(selectSearchResultsRegistryResults(selectedObjectName));

  useEffect(() => {
    if (!!selectedObject) dispatch(fetchRegistryResults(selectedObject));
  }, [selectedObject, dispatch]);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {selectedObject && (
        <>
          <h4 className={classes.title}>Registry Results</h4>
          {registryResult?.type === 'comet' && <RegistryComet registryResult={registryResult} />}
          {registryResult?.type === 'asteroid' && <span>Asteroid Results</span>}
          {registryResult?.type === 'dust' && <span>Dust Results</span>}
          {registryResult?.type === 'meteor' && <span>Meteor Results</span>}
        </>
      )}
    </div>
  );
};

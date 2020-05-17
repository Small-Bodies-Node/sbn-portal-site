import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Card,
  useTheme,
  Paper
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStyles } from './styles';
import { IRegistryResult } from '../../../Redux/Actions/search-results-actions';

export const RegistryComet = ({ registryResult }: { registryResult: IRegistryResult }) => {
  const classes = useStyles();
  const theme = useTheme();

  // This component is specific to comet results
  if (registryResult.type !== 'comet') return <span className="error-has-occured"></span>;

  const missions = registryResult.mission_datasets
    .map((el) => el.mission)
    .filter((el, ind, arr) => arr.indexOf(el) === ind);

  const missionCounts = missions.map((mission) => ({
    mission,
    count: registryResult.mission_datasets.filter((el) => el.mission === mission).length
  }));

  console.log('missionCounts', missionCounts);

  return (
    <div className={classes.container}>
      {!!registryResult && (
        <>
          <div className={classes.item}>
            <span className={classes.itemLabel}> Cross Ids: </span>
            {registryResult.cross_ids.map((el, ind, arr) => (
              <span className={classes.itemEntry} key={ind}>
                {el}
                {ind === arr.length - 1 ? '. ' : ', '}
              </span>
            ))}
          </div>
          <div className={classes.item}>
            <span className={classes.itemLabel}>Alternate Types: </span>
            {registryResult.alternate_types.map((el, ind, arr) => (
              <span key={ind} className={classes.itemEntry}>
                {el}
                {ind === arr.length - 1 ? '. ' : ', '}
              </span>
            ))}
          </div>
          <div className={classes.item}>
            <div>
              <span className={classes.itemLabel}>
                Mission Datasets ({registryResult.mission_datasets.length}){' '}
              </span>
            </div>
            <div>
              <span className={classes.itemEntry} style={{ fontSize: 14 }}>
                <a href=""> Download All</a>
              </span>
            </div>
          </div>

          {/* <hr /> */}

          <div className={classes.item}>
            {/* <Paper
              color={'red'}
              style={{
                backgroundColor: theme.palette.background.default,
                padding: 0
              }}
            > */}
            {missions.map((mission, ind) => (
              <div key={ind}>
                <ExpansionPanel
                  color={theme.palette.primary.main}
                  style={{ marginBottom: 2 }}
                  elevation={2}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.expanderHeading}>{mission}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div style={{ width: '100%' }}>
                      {registryResult.mission_datasets
                        .filter((el) => el.mission === mission)
                        .map((el, ind2) => (
                          <div key={ind2} style={{ width: '100%' }}>
                            <hr />
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Link to server:</span>
                              <span className={classes.itemEntry}>
                                <a href=""> {el.link_to_file_server}</a>
                              </span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>LID:</span>
                              <span className={classes.itemEntry}>
                                <a href=""> {el.lid}</a>
                              </span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Date:</span>
                              <span className={classes.itemEntry}>
                                <a href=""> {el.date}</a>
                              </span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Data Type:</span>
                              <span className={classes.itemEntry}>
                                <a href=""> {el.data_type}</a>
                              </span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Thumbnails:</span>
                              <span className={classes.itemEntry}>
                                <a href=""> {el.thumbnail_collections}</a>
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            ))}
            {/* </Paper> */}
          </div>
        </>
      )}
    </div>
  );
};

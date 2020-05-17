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

  const missionCounts = missions.reduce((acc: any, mission, ind, arr) => {
    acc[mission] = registryResult.mission_datasets.filter((el) => el.mission === mission).length;
    return acc;
  }, {});

  const rosesProposals = registryResult.roses_proposal_datasets
    .map((el) => el.proposal)
    .filter((el, ind, arr) => arr.indexOf(el) === ind);

  const rosesProposalCounts = rosesProposals.reduce((acc: any, proposal, ind, arr) => {
    acc[proposal] = registryResult.roses_proposal_datasets.filter(
      (el) => el.proposal === proposal
    ).length;
    return acc;
  }, {});

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

          <div className={classes.item}>
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
                    <Typography
                      className={classes.expanderHeading}
                    >{`${mission} (${missionCounts[mission]})`}</Typography>
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
                                <a href={el.link_to_file_server}> {el.link_to_file_server}</a>
                              </span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>LID:</span>
                              <span className={classes.itemEntry}>{el.lid}</span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Date:</span>
                              <span className={classes.itemEntry}>{el.date}</span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Data Type:</span>
                              <span className={classes.itemEntry}>{el.data_type}</span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Thumbnails:</span>
                              <span className={classes.itemEntry}>
                                {el.thumbnail_collections.map((coll, ind3) => (
                                  <span key={ind3}>{coll.name}</span>
                                ))}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            ))}
          </div>

          <div className={classes.item} style={{ marginTop: 20 }}>
            <div>
              <span className={classes.itemLabel}>
                ROSES Proposal Datasets ({registryResult.roses_proposal_datasets.length}){' '}
              </span>
            </div>
            <div>
              <span className={classes.itemEntry} style={{ fontSize: 14 }}>
                <a href=""> Download All</a>
              </span>
            </div>
          </div>

          <div className={classes.item}>
            {rosesProposals.map((proposal, ind) => (
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
                    <Typography
                      className={classes.expanderHeading}
                    >{`${proposal} (${rosesProposalCounts[proposal]})`}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div style={{ width: '100%' }}>
                      {registryResult.roses_proposal_datasets
                        .filter((el) => el.proposal === proposal)
                        .map((el, ind2) => (
                          <div key={ind2} style={{ width: '100%' }}>
                            <hr />
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Link to server:</span>
                              <span className={classes.itemEntry}>
                                <a href={el.link_to_file_server}> {el.link_to_file_server}</a>
                              </span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>LID:</span>
                              <span className={classes.itemEntry}>{el.lid}</span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Date:</span>
                              <span className={classes.itemEntry}>{el.date}</span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Data Type:</span>
                              <span className={classes.itemEntry}>{el.data_type}</span>
                            </div>
                            <div className={classes.item}>
                              <span className={classes.itemLabel}>Thumbnails:</span>
                              <span className={classes.itemEntry}>
                                {el.thumbnail_collections.map((coll, ind3) => (
                                  <span key={ind3}>{coll.name}</span>
                                ))}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      overflow: 'auto'
    },
    title: {
      // marginTop: 0
    }
  }),
  { name: 'results-for-registry' }
);

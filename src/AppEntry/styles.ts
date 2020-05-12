import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      height: '100%',
      width: '100%'
    }
  }),
  { name: 'app-entry' }
);

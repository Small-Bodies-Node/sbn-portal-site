import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: '100%'
    },
    mainText: {
      color: 'red'
    }
  }),
  { name: 'template' }
);

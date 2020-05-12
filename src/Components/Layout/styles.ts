import { makeStyles, Theme } from '@material-ui/core';
import { contentPadding } from '../../Utils/constants';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
      // backgroundColor: 'red'
    },
    navWrapper: {
      height: 64
    },
    pageWrapper: {
      padding: contentPadding,
      paddingTop: 0,
      boxSizing: 'border-box',
      flex: 1
    },
    footerWrapper: {
      height: 50,
      backgroundColor: theme.palette.primary.dark
    }
  }),
  { name: 'layout' }
);

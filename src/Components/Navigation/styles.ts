import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme) => ({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.background.default,

      '& > header': {
        position: 'fixed',
        top: 0,
        height: 80,
        left: 0,
        right: 0,
        backgroundColor: 'blue'
      },
      '& > main': {
        marginTop: 80,
        backgroundColor: 'pink'
      },
      '& > footer': {
        backgroundColor: 'cyan'
      }
    }
  }),
  { name: 'navigation' }
);

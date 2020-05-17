import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme) => ({
    container: {
      width: '100%',
      height: '100%'
    },
    searchWrapper: {
      marginBottom: 10,
      padding: 20,
      paddingLeft: 0
    },
    resultsWrapper: {
      '& h1, h2, h3, h4, h5, h6': {
        marginTop: 5,
        marginBottom: 5
      },
      '& > .MuiPaper-root': {
        marginBottom: 10,
        padding: 20
      }
    }
  }),
  { name: 'page-home' }
);

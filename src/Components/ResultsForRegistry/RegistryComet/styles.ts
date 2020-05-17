import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: '100%'
    },
    item: {
      fontSize: 18,
      margin: 15
    },
    itemLabel: {
      fontWeight: 'bold'
    },
    itemEntry: {
      marginRight: 0
    },
    expanderHeading: {
      fontSize: 18,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'capitalize'
    }
  }),
  { name: 'registry-comet' }
);

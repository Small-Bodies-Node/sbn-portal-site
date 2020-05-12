import { makeStyles, Theme } from '@material-ui/core';
import { contentPadding } from '../../Utils/constants';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: 64,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      padding: `10px ${contentPadding}px`
    }
  }),
  {
    name: 'footer'
  }
);

import { makeStyles, Theme } from '@material-ui/core';
import { mobileWidthPxl } from '../../../Utils/constants';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      flexGrow: 1,
      '& a': {
        textDecoration: 'none',
        color: theme.palette.primary.contrastText
      }
    },
    menuButton: {
      display: 'inline-block'
    },
    title: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 0,
      maxWidth: 99999
    },
    links: {
      display: 'none',
      '& > ul': {
        marginLeft: 0,
        paddingLeft: 0
      }
    },
    listItem: {
      display: 'inline-block',
      marginLeft: 15
    },

    settingsButton: {
      display: 'inline-block'
    },

    // These styles apply when screen is MORE than mobileWidthPxl
    [`@media (min-width: ${mobileWidthPxl}px)`]: {
      container: {},
      title: {
        justifyContent: 'left',
        flexGrow: 0.1,
        paddingLeft: 12,
        maxWidth: 170
      },
      links: {
        flexGrow: 1,
        display: 'inline-block'
      },
      menuButton: {
        display: 'none'
      }
    }
  }),
  { name: 'menubar' }
);

import { makeStyles, Theme } from '@material-ui/core';

const borderWidth = 0;

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      width: '100%',
      height: '100%'
    },
    form: {
      border: `${borderWidth}px red solid`,
      width: '100%',
      maxWidth: 500
      // height: 100
    },
    textFieldWrapper: {
      width: '100%',
      height: '100%',
      padding: 0,
      border: `${borderWidth}px green solid`,
      boxSizing: 'border-box'
    },
    highlightedTextFieldWrapper: {
      '& .MuiFormHelperText-root': {
        color: 'green'
      }
    },
    option: {
      fontFamily: 'monospace',
      fontWeight: 'bold',
      whiteSpace: 'pre-wrap'
    }
  }),
  { name: 'search' }
);

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme) => {
    return {
      container: {
        width: 200,
        '& ul': {
          margin: 0,
          '& li': {
            '& a': {
              textDecoration: 'none'
            }
          }
        }
      }
    };
  },
  { name: 'menucolumn' }
);

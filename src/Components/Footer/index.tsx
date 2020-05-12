import React from 'react';

import { useStyles } from './styles';

/**
 * Footer Component
 * We use React.memo() to export it as a component that basically never re-renders
 */
export const Footer = React.memo(() => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>This is a footer</div>
    </>
  );
});

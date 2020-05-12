import React from 'react';

import { useStyles } from './styles';

export const SimpleFooter = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <>This is a simple Footer!</>
      </div>
    </>
  );
};

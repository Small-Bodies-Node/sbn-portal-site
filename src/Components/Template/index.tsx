import React from 'react';

import { useStyles } from './styles';

export const Template = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Template Page</h1>
      <p className={classes.mainText}>
        This is a template component! Copy and edit me to create a new component!
      </p>
    </div>
  );
};

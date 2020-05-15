import React from 'react';

import { useStyles } from './styles';
import { Search } from '../Search';

export const PageHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>SBN Home Page</h1>
      <p>Try searching for something!</p>

      <Search />
    </div>
  );
};

import React from 'react';

import { Footer } from '../Footer';
import { Navigation } from '../Navigation';
import { useStyles } from './styles';

export const Layout = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.navWrapper}>
        <Navigation />
      </div>

      <div className={classes.pageWrapper}>{props.children}</div>

      <div className={classes.navWrapper}>
        <Footer />
      </div>
    </div>
  );
};

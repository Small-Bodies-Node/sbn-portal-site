import React, { useState, useCallback } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { MenuBar } from './MenuBar';
import { MenuColumn } from './MenuColumn';
import { useStyles } from './styles';

const drawerDelay = 100;

/**
 * Component that renders menu bars, swipeable drawer, etc.
 * We use React.memo() to export it as a component that basically
 * never re-renders
 */
export const Navigation = React.memo(() => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = useCallback(() => setTimeout(() => setIsDrawerOpen(false), drawerDelay), []);
  const openDrawer = useCallback(() => setTimeout(() => setIsDrawerOpen(true), drawerDelay), []);

  return (
    <div role="presentation" className={classes.container}>
      <MenuBar openDrawer={openDrawer} closeDrawer={closeDrawer} />
      <SwipeableDrawer
        anchor={'left'}
        open={isDrawerOpen}
        onClose={closeDrawer}
        onOpen={() => console.log('opening')}
      >
        <MenuColumn onItemClick={closeDrawer} />
      </SwipeableDrawer>
    </div>
  );
});

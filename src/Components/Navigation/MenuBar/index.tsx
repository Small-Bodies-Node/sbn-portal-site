import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Settings from '@material-ui/icons/Settings';

import { useStyles } from './styles';
import { menuItems } from '../menuItems';
import { Link } from '@material-ui/core';
// import { Link } from 'react-router-dom';

interface IProps {
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const MenuBar = React.memo((props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={props.openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <li className={classes.listItem}>SBN Portal</li>
            </Link>
          </Typography>

          <Typography variant="subtitle1" className={classes.links}>
            <ul>
              {menuItems
                .filter((el) => el.label !== 'Home')
                .map((el, ind) => (
                  <Link key={ind} href={el.route}>
                    <li className={classes.listItem}>{el.label}</li>
                  </Link>
                ))}
            </ul>
          </Typography>

          <IconButton
            edge="start"
            className={classes.settingsButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              console.log('Sth happened!!!');
            }}
          >
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
});

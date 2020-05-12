import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';

import { useStyles } from './styles';
import { menuItems } from '../menuItems';

interface IProps {
  onItemClick: () => void;
}

export const MenuColumn = React.memo((props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes['container']}>
      <List>
        {menuItems.map((el, ind) => (
          <ListItem button component={Link} to={el.route} key={ind} onClick={props.onItemClick}>
            <ListItemIcon>{<el.icon />}</ListItemIcon>
            <ListItemText primary={el.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
});

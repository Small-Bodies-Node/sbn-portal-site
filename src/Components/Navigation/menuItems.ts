import React from 'react';

// Icons
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import Info from '@material-ui/icons/Info';
import Mail from '@material-ui/icons/Mail';
import Home from '@material-ui/icons/Home';

interface IMenuItem {
  label: string;
  route: string;
  icon: React.JSXElementConstructor<any>;
}

export const menuItems: IMenuItem[] = [
  {
    label: 'Home',
    route: '/',
    icon: Home
  },
  {
    label: 'About',
    route: '/about',
    icon: Info
  },
  {
    label: 'Contact',
    route: '/contact',
    icon: Mail
  }
];

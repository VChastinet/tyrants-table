
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../logo/Logo'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff3e0',
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const { root, menuButton, title } = useStyles();

  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={title}>
            <Logo />
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CachedIcon from '@material-ui/icons/Cached';
import { Button } from '@material-ui/core';
import UserProfileMenu from './UserProfileMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    backgroundColor: '#181B1F',
    textAlign:'center',
    paddingRight: 24, // keep right padding when drawer closed
  },
  title: {
    marginLeft: 50,
    fontSize: 22,
    flexGrow: 1,
    textDecoration:""
    },
  iconButton: {
    minWidth: 0,
    padding: 5,
    backgroundColor: "#24282B",
    color: '#AFB3B4',
    marginLeft: 9,

  },
}));

export default function HearderBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
        <Button
              edge="start"
              color="primary"
              component="span"
              className={classes.iconButton}
            >
              <CachedIcon fontSize="small" />
            </Button>
          <Typography component="h1" color="inherit" noWrap className={classes.title}>
           The Game Simulator
          </Typography>
          <UserProfileMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}
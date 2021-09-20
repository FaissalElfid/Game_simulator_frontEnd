import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import SideBar from './sideBarAdmin';
import HearderBar from '../appBar/headerAdminBar';
import { withRouter } from 'react-router-dom';
const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    marginTop: 64,
    position: 'relative',
    backgroundColor: '#F9FAFC',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

function Drawerr() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HearderBar />
        <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
        open={true}
      >
      <SideBar/>
      </Drawer>
      
    </div>
  );
}
export default withRouter(Drawerr);
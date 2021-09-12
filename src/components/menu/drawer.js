import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MainListItems from './listItems';
import SearchButton from './searchButton';
import HearderBar from '../appBar/headerBar';
import { withRouter } from 'react-router-dom';
const drawerWidth = 375;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    backgroundColor: '#181B1F',
    textAlign:'center',
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
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

function Drawerr(props) {
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
        <div className={classes.toolbarIcon}>
          <SearchButton />
        </div>
        <Divider />
        <List>
          <MainListItems/>
        </List>
      </Drawer>
    </div>
  );
}
export default withRouter(Drawerr);
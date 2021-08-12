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
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1,
    textDecoration:""
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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  iconButton: {
    minWidth: 0,
    padding: 5,
    backgroundColor: "#24282B",
    color: '#AFB3B4',
    marginLeft: 9,

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
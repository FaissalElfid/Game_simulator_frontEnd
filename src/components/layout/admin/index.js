import { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Drawer from '../../menu_admin/drawer';
import { makeStyles } from '@material-ui/styles';

const DashboardLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);
const useStyles = makeStyles((theme) => ({
  typogra: {
    color: '#fafafa',
  },
  main : {
    paddingTop: 64,
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'auto',
    height: '100%',
    // overflow: 'hidden',
  }
}))

const DashboardLayout = (props) => {
  const classes = useStyles();
  return (
    <DashboardLayoutRoot>
      <Drawer />
      <div className={classes.main}>
            {props.children}
      </div>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;

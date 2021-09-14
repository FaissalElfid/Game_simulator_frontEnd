import React from 'react';
import { withRouter } from "react-router-dom";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link as RouterLink } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {
  Avatar,
  Box,
  Divider,
  List,
  Typography
} from '@material-ui/core';
import NavItem from './navItem';
const user = {
  avatar: '/static/images/faissal.png',
  jobTitle: 'Software Engineer',
  name: 'Faissal EL FID'
};
const items = [
  {
    href: '/admin',
    icon: DashboardIcon,
    title: 'Dashboard'
  },
  {
    href: '/admin/users',
    icon: PeopleAltIcon,
    title: 'Users'
  },
  {
    href: '/admin/#',
    icon: ListAltIcon,
    title: 'Challenges'
  }]
function MainListItems(props){
     return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          style={{height: 80,width: 80, marginBottom: 15}}
          // sx={{
          //   cursor: 'pointer',
          //   width: 200,
          //   height: 200
          // }}
          to="/admin"
        />
        <Typography
          color="textPrimary"
          variant="h4"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      </Box>
    );
  }

  export default withRouter(MainListItems);
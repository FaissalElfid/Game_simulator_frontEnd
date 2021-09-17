import React from 'react';
import { withRouter } from "react-router-dom";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link as RouterLink } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  Avatar,
  Box,
  Divider,
  List,
  Typography
} from '@material-ui/core';
import NavItem from './navItem';
import { useSelector } from 'react-redux';
const userStatic = {
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
    href: '/admin/challengeType',
    icon: SportsBaseballIcon,
    title: 'Challenges Type'
  },
  {
    href: '/admin/challenge',
    icon: ListAltIcon,
    title: 'Challenges'
  }
  ,{
    href: '/admin/account',
    icon: AccountBoxIcon,
    title: 'My Account'
  },
  {
    href: '/admin/settings',
    icon: SettingsIcon,
    title: 'Settings'
  }
]
function MainListItems(props){
  const { user } = useSelector((state) => state.login);
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
          src={user ? user.profileImage : userStatic.avatar}
          style={{height: 80,width: 80, marginBottom: 15}}
          Link
          to="/admin"
        />
        <Typography
          color="textPrimary"
          variant="h4"
        >
          
          {user ? user.name+' '+user.lastName : "Faissal"}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.description}
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
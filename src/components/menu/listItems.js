import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import UnsubscribeIcon from '@material-ui/icons/Unsubscribe';
import { withRouter } from "react-router-dom";
import { Component } from 'react';
import CardChallenge from '../challenges/ChallengeCard';

class MainListItems extends Component {
  constuctor() {
    this.redirectHome = this.redirectHome.bind(this);
    this.redirectFollow = this.redirectFollow.bind(this);
    this.redirectUnfollow = this.redirectUnfollow.bind(this);
  }
  
  redirectHome = () =>{ 
    let path = `/`; 
    this.props.history.push(path);
  }
  redirectFollow = () =>{ 
    let path = `/follow`; 
    this.props.history.push(path);
  }
  redirectUnfollow = () =>{ 
    let path = `/unfollow`; 
    this.props.history.push(path);
  }
  render(){
    return (
      <div>
    
        <ListItem button onClick={this.redirectHome}>
            <CardChallenge />
          </ListItem>
        <ListItem button onClick={this.redirectFollow}>
          <ListItemIcon>
          <CardMembershipIcon style={{ color: "#2196F3"}} />
          </ListItemIcon>
          <ListItemText primary="challenge 2" />
        </ListItem>
        <ListItem button onClick={this.redirectUnfollow}>
          <ListItemIcon>
            <UnsubscribeIcon style={{ color: "#F50057" }}/>
          </ListItemIcon>
          <ListItemText primary="Challenge 2" />
        </ListItem>
      </div>
    );
  }

  }
  export default withRouter(MainListItems);
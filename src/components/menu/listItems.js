import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
    
        <ListItem  onClick={this.redirectHome}>
            <CardChallenge />
          </ListItem>
        <ListItem button onClick={this.redirectFollow}>
          <ListItemText primary="challenge 2" />
        </ListItem>
        <ListItem button onClick={this.redirectUnfollow}>
          <ListItemText primary="Challenge 3" />
        </ListItem>
      </div>
    );
  }

  }
  export default withRouter(MainListItems);
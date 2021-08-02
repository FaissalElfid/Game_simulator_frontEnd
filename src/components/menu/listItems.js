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
            <CardChallenge title="Réalise 50 pronos Foot toutes compétitions confondues" recurrent={10} coins={50}/>
          </ListItem>
        <ListItem button onClick={this.redirectFollow}>
        <CardChallenge title="Valide 25 pronos Foote toutes compétitions confondues" recurrent={25} coins={50}/>
        </ListItem>
        <ListItem button onClick={this.redirectUnfollow}>
        <CardChallenge title="Valide une cote comprise entre 3 et 3,99" reunlockable={2000} coins={50}/>
        </ListItem>
      </div>
    );
  }

  }
  export default withRouter(MainListItems);
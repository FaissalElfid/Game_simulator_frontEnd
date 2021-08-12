import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { withRouter } from "react-router-dom";
import CardChallenge from '../challenges/ChallengeCard';

function MainListItems(props){
     return (
      <div>
        {props.match.params.sport === 'Foot' &&
        <div>

        <ListItem>
            <CardChallenge title="Réalise 50 pronos Foot toutes compétitions confondues" recurrent={10} coins={50}/>
          </ListItem>
        <ListItem>
        <CardChallenge title="Valide 25 pronos Foote toutes compétitions confondues" recurrent={25} coins={50}/>
        </ListItem>
        <ListItem>
        <CardChallenge title="Valide une cote comprise entre 3 et 3,99" reunlockable={2000} coins={50}/>
        </ListItem></div>
}
      </div>
    );
  }

  export default withRouter(MainListItems);
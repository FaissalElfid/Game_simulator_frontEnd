import React, { useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { withRouter } from "react-router-dom";
import CardChallenge from '../challenges/ChallengeCard';
import { useSelector } from 'react-redux';

function CardList(props){
  return (
  <div>
    {props.items &&
      props.items.map((badge) => 
      <ListItem key={badge._id}>
        <CardChallenge _id={badge._id} image={badge.image} title={badge.description ? badge.description : badge.title} reunlockable={badge.reunlockable} recurrent={badge.recurrent} coins={badge.coins}/> 
    </ListItem>)
    }
  </div>
    
  )
}

function MainListItems(props){
  const {challenge} = useSelector(state => state.shared)
  useEffect(() => {
  }, [challenge])
     return (
      <div>
        <div>

        <CardList items={challenge.badges} />
        <CardList items={challenge.badgeSilver} />
        <CardList items={challenge.badgeGold} />
        {/* <ListItem>
        <CardChallenge title="Valide 25 pronos Foote toutes compétitions confondues" recurrent={25} coins={50}/>
        </ListItem>
        <ListItem>
        <CardChallenge title="Valide une cote comprise entre 3 et 3,99" reunlockable={2000} coins={50}/>
        </ListItem> 
        <CardChallenge title="Réalise 50 pronos Foot toutes compétitions confondues" recurrent={10} coins={50}/> 

        */}
        </div>
      </div>
    );
  }

  export default withRouter(MainListItems);
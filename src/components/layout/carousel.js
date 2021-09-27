import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import ChallengesLayout from "./challengesLayout";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import EmptyLayout from "./emptyLayout";


const useStyles = makeStyles((theme) => ({
    secondExample: {
        display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 1050,
    },
  }));

 function CarouselChallenges(props){
    const classes = useStyles();
    const {challenges} = useSelector(state => state.challenges)
    const specificChallenges = challenges.filter(item => item.challengeType.title === props.match.params.sport)
    return (
      <div style={{ marginTop: "5px", justifyContent:'center' }}>
        <Carousel
          className={classes.secondExample}
          autoPlay={false}
          animation={'slide'} // or fade
          indicators={true} 
          timeout={300} 
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
        >
          {specificChallenges.length > 0 ? specificChallenges.map((item, index) => {
            return <ChallengesLayout item={item} key={index} />;
          }) : <EmptyLayout />}
        </Carousel>

      </div>
    );
}
export default withRouter(CarouselChallenges)

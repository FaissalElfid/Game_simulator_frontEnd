import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import ChallengesLayout from "./challengesLayout";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Typography } from "@material-ui/core";
import EmptyLayout from "./emptyLayout";

// const items = [
//   {
//     title: "Défis foot général",
//     description: "A PDF Reader specially designed for musicians.",
//   },
//   {
//     title: "Défis du winner",
//     description:
//       "My Solution on the 2019 Hash Code by Google Slideshow problem.",
//   },
//   {
//     title: "Défis dba",
//     description: "A exciting mobile game game made in the Unity Engine.",
//   },
//   {
//     title: "Social Media Défis",
//     description: "A Generic carousel UI component for React using material ui.",
//   },
// ];

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

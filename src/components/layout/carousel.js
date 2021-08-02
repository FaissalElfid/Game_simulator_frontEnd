import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import ChallengesLayout from "./challengesLayout";

const items = [
  {
    name: "Défis foot général",
    description: "A PDF Reader specially designed for musicians.",
  },
  {
    name: "Défis du winner",
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow problem.",
  },
  {
    name: "Défis dba",
    description: "A exciting mobile game game made in the Unity Engine.",
  },
  {
    name: "Social Media Défis",
    description: "A Generic carousel UI component for React using material ui.",
  },
];

const useStyles = makeStyles((theme) => ({
    secondExample: {
        display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 1050,
    },
  }));

export default function CarouselChallenges(){
    const classes = useStyles();
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
          {items.map((item, index) => {
            return <ChallengesLayout item={item} key={index} />;
          })}
        </Carousel>

      </div>
    );
}

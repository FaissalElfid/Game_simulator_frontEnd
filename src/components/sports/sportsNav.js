import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link, withRouter  } from "react-router-dom";
import { useSelector } from 'react-redux'
import clsx from 'clsx';
import BackdropLoader from '../library/backdrop';
import SuspenseComponent from '../library/SuspenseComponent';
import ScreenTransition from '../library/ScreenTransition';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "#fff",
    justifyContent:"center",
  },
  chipNav:{
      margin: 16,
      padding: 16,
      backgroundColor: "#383E45",
      "&:hover": {
        backgroundColor: "#5B5B5D",
      },
      "&:focus": {
        backgroundColor: "#2F5EF9",
      }
  },
  chipActive:{
    backgroundColor: "#2F5EF9",
},
}));

function SportsNav(props) {
  const classes = useStyles();
  const {challengeTypes, loading} = useSelector(state => state.challengesTypes)
    const sportsData= challengeTypes.map((challengeType)=> {return challengeType.title})
    const sports = sportsData.map((sport, index) =>
<Chip label={sport} key={index} color="primary" component={Link} to={"/"+sport}  clickable className={clsx({[classes.chipActive]: sport === props.match.params.sport}, classes.chipNav)}/>
);
  return (
    <div className={classes.root}>
        {!loading ? sports : <BackdropLoader />} 
        {/* test */}
    </div>
  );

}
export default SuspenseComponent(ScreenTransition(withRouter(SportsNav)))

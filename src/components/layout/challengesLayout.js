import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Paper } from "@material-ui/core";
 
import ProgressChallenge from '../challenges/ProgressChallenge';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChallenge } from "../../redux/actions/shared";
const useStyles = makeStyles((theme) => ({
  paper: {
    width: 300,
  },
  main: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    height: "300",
    overflow: "hidden",
    width: 700,
    padding: "20px",
    backgroundColor: "#181B1F",
    color: "#FFF",
  },
  CheckButton: {
    marginTop: "40px",
    fontSize: 20,
    textTransform: "capitalize",
  },
  challengesContainer: {
      backgroundColor: "F9FAFC",
      width:'80%', 
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  challenge: {
      marginTop: 20,
      margin: 10,
      backgroundColor:'#5B5B5D',
      height: 120,
      width: 120,
  },
  row:{
    display:'flex',
  }
}));

export default function ChallengesLayout(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {url} = useSelector(state => state.shared)
  useEffect(() => {
    dispatch(setCurrentChallenge(props.item))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])
  return (
    <Paper className={classes.main} elevation={0}>
      <Paper className={classes.challengesContainer} elevation={10}>
          <Paper className={classes.challenge}></Paper>
        <h2 style={{}}>{props.item.title}</h2>
        <div className={classes.row}>
        <Paper className={classes.challenge}></Paper>
        <Paper className={classes.challenge}>
            <ProgressChallenge/>
        </Paper>
        <Paper className={classes.challenge}></Paper>
        </div>
        <div className={classes.row}>
        <Paper className={classes.challenge}></Paper>
        <Paper className={classes.challenge}></Paper>
        <Paper className={classes.challenge}></Paper>
        </div>
        <div className={classes.row} style={{marginBottom:10}}>
        <Paper className={classes.challenge}></Paper>
        <Paper className={classes.challenge}></Paper>
        <Paper className={classes.challenge}></Paper>
        </div>
      </Paper>
    </Paper>
  );
}

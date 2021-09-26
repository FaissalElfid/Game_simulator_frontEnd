import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Paper, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setCurrentChallenge } from "../../redux/actions/shared";
 const useStyles = makeStyles((theme) => ({
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
  challengesContainer: {
      backgroundColor: "F9FAFC",
      width:'80%', 
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
}));

export default function EmptyLayout(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentChallenge({}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Paper className={classes.main} elevation={0}>
      <Paper className={classes.challengesContainer} elevation={10}>
      <Paper className={classes.challenge}></Paper>
        <h2><Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          This Category is empty
        </Typography></h2>

      
      </Paper>
    </Paper>
  );
}

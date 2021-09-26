import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ChallengesCarousel from "../components/layout/carousel";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import ScreenTransition from "../components/library/ScreenTransition";
import SuspenseComponent from "../components/library/SuspenseComponent";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
  },
  fixedHeight: {
    backgroundColor: "#181B1F",
    paddingBottom: "50px",
    color: "#fafafa"
  },
}));
function Sport(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Paper className={fixedHeightPaper}>

    <Container component="main">
      <CssBaseline />
      <Grid container className={classes.paper}>
        <ChallengesCarousel /> 
      </Grid>

    </Container>
    </Paper>

  );
}

export default  SuspenseComponent(ScreenTransition(withRouter(Sport)));

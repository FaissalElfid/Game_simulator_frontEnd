import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ChallengesCarousel from "../components/layout/carousel";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  return (
    <Container component="main">
      <CssBaseline />
      <Grid container className={classes.paper}>
        <ChallengesCarousel />
      </Grid>

    </Container>
  );
}

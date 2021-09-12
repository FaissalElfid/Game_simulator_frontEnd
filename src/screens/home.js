import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SuspenseComponent from "../components/library/SuspenseComponent";
import ScreenTransition from "../components/library/ScreenTransition";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function SignUp() {
  const classes = useStyles();
  return (
    <Container component="main">
      <CssBaseline />
      <Grid container spacing={2} className={classes.paper}>
        <Grid item xs={12} sm={6}>
            heey
      </Grid>
      </Grid>

    </Container>
  );
}
export default SuspenseComponent(ScreenTransition(SignUp));

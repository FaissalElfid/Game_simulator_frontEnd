import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function SignUp() {
  const classes = useStyles();


  return (
    <Container component="main">
      <CssBaseline />
      {/* maxWidth= "sm"  className={classes.paper}*/}
      <Grid container spacing={2} className={classes.paper}>
        <Grid item xs={12} sm={6}>
            hola
      </Grid>
      </Grid>

    </Container>
  );
}

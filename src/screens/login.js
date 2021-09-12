import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Form from '../components/login/form';
import SuspenseComponent from "../components/library/SuspenseComponent";
import ScreenTransition from "../components/library/ScreenTransition";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <Container component="main">
      <CssBaseline />
      <Grid container spacing={2} maxWidth="sm" className={classes.paper}>
        <Grid item xs={12} sm={6}>
            <Form/>
      </Grid>
      </Grid>

    </Container>
  );
}
export default SuspenseComponent(ScreenTransition(Login));

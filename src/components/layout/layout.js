import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../copyright";
import Drawer from "../menu/drawer";

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor: "#282C34",
  },
  root: {
    display: "flex",
  },
  fixedHeight: {
    backgroundColor: "#181B1F",
    paddingBottom: "50px",
    color: "#fafafa",
  },
  copyright: {
    paddingTop: "70px",
  },
}));

export default function MainLayout(props) {
  const classes = useStyles();
  return (
      <div className={classes.root}>
    <Drawer />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {props.children}
            <Copyright />
          </Container>
        </main>
        </div>

  );
}

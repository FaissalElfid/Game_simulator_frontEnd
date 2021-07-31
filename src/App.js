import "./App.css";
import testFollow from "./screens/testFollow";
import testUnfollow from "./screens/testUnfollow";
import test1 from "./screens/test1";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "./components/copyright";
import Paper from "@material-ui/core/Paper";
import Drawer from "./components/menu/drawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SportsNav from "./components/sports/sportsNav";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor: "#282C34"
  },
  root: {
    display: "flex",
  },
  fixedHeight: {
    backgroundColor: "#181B1F",
    paddingBottom: "50px",
    color: "#fafafa"
  },
  copyright: {
    paddingTop: "70px",
  },
}));

function App() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Router>
        <Drawer />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
          <SportsNav />

            {/* Chart */}
            <Paper className={fixedHeightPaper}>
              <Switch>
                <Route path="/" exact component={test1} />
                <Route path="/follow" exact component={testFollow} />
                <Route path="/unfollow" exact component={testUnfollow} />
              </Switch>
            </Paper>
            <Copyright />
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;

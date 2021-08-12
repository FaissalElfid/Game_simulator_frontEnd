import "./App.css";
import aboutus from "./screens/aboutus";
import home from "./screens/home";
import Sport from "./screens/sport";
import NotFoundPage from "./screens/404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import SportsNav from "./components/sports/sportsNav";
import MainLayout from "./components/layout/layout";

// const useStyles = makeStyles((theme) => ({
// }));

function App() {
  const sportsData = [
    "Général",
    "Social",
    "Foot",
    "Tennis",
    "Basket",
    "Rugby",
    "Hockey",
  ];

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/aboutus" exact component={aboutus} />
          <Route path="/home" exact component={home} />
          <Route path="/404" component={NotFoundPage} />
          <Route
            exact
            path="/:sport"
            render={({ match }) => {
              if (sportsData.includes(match.params.sport)) {
                return (
                  <MainLayout>
                    <SportsNav sports={sportsData} />
                    <Sport />
                  </MainLayout>
                );
              } else {
                return <Redirect to="/404" />;
              }
            }}
          />
          <Redirect from="/" to="/Général" />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

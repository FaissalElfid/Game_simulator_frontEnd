import "../App.css";
import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BackdropLoader from "../components/library/backdrop";
import ProtectedRouteAuth from "../components/library/ProtectedRoute";
import Simulator from "../screens/simulator";


const home = lazy(() => import("../screens/home"));
const aboutus = lazy(() => import("../screens/aboutus"));
const Login = lazy(() => import("../screens/login"));
const Register = lazy(() => import("../screens/register"));
const adminDashboard = lazy(() => import("../screens/admin/Dashboard"));
const NotFoundPage = lazy(() => import("../screens/404"));
function Routes() {


  return (
    <Router>
      <Suspense fallback={<BackdropLoader />}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch >
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/aboutus" exact component={aboutus} />
            <Route path="/admin" exact component={adminDashboard} />
            <ProtectedRouteAuth path="/home" exact component={home} />
            <Route path="/404" component={NotFoundPage} />
            <ProtectedRouteAuth
              exact
              path="/:sport"
              component={Simulator}
            />
            <Redirect from="/" to="/Général" />
            <Redirect to="/404" />
          </Switch>
        </AnimatePresence>
      </Suspense>
    </Router>
  );
}

export default Routes;

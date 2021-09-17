import "../App.css";
import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BackdropLoader from "../components/library/backdrop";
import ProtectedRouteAuth from "../components/library/ProtectedRoute";
import Simulator from "../screens/simulator";
import ProtectedRouteAdmin from "../components/library/ProtectedRoute/ProtectedAdmin";


const home = lazy(() => import("../screens/home"));
const aboutus = lazy(() => import("../screens/aboutus"));
const Login = lazy(() => import("../screens/login"));
const Register = lazy(() => import("../screens/register"));
const adminDashboard = lazy(() => import("../screens/admin/Dashboard"));
const usersList = lazy(() => import("../screens/admin/Users"));
const ChallengeType = lazy(() => import("../screens/admin/ChallengeType"));
const Challenge = lazy(() => import("../screens/admin/Challenge"));
const Settings = lazy(() => import("../screens/admin/Settings"));
const Account = lazy(() => import("../screens/admin/Account"));
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
            <ProtectedRouteAdmin path="/admin" exact component={adminDashboard} />
            <ProtectedRouteAdmin path="/admin/users" exact component={usersList} />
            <ProtectedRouteAdmin path="/admin/challengeType" exact component={ChallengeType} />
            <ProtectedRouteAdmin path="/admin/challenge" exact component={Challenge} />
            <ProtectedRouteAdmin path="/admin/settings" exact component={Settings} />
            <ProtectedRouteAdmin path="/admin/account" exact component={Account} />
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

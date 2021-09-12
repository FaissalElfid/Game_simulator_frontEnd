import  { lazy , Suspense, useEffect } from 'react';
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom";
import SportsNav from "../components/sports/sportsNav";
import MainLayout from "../components/layout/layout";
import BackdropLoader from '../components/library/backdrop';
import { AnimatePresence } from 'framer-motion';
import { setCurrentUrl , updateUrlState  } from '../redux/actions/shared';
import { useDispatch } from 'react-redux';
import { BrowserRouter as withRouter  } from "react-router-dom";
import { Router } from '@material-ui/icons';

const home = lazy(() => import('../screens/home') );
const aboutus = lazy(() => import('../screens/aboutus') );
const Sport = lazy(() => import('../screens/sport') );
const Login = lazy(() => import('../screens/login') );
const NotFoundPage = lazy(() => import('../screens/404') );

function Routes() {
  const sportsData = [
    "Général",
    "Social",
    "Foot",
    "Tennis",
    "Basket",
    "Rugby",
    "Hockey",
  ];
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location)

  useEffect(() => {
    if(location?.state){
      dispatch(updateUrlState({...location?.state}));
    }
    dispatch(setCurrentUrl(location.pathname));
  }, [location.pathname , dispatch , location.state]);

  useEffect(() => {
    window.scrollTo(0, 0);
  } , [location.pathname]);
  return (
    <Router>
    <Suspense fallback = { <BackdropLoader /> } >
        <AnimatePresence exitBeforeEnter initial = {false} >
            <Switch location = {location}  key={location.pathname} >
                <Route exact  path="/aboutus" component={aboutus} />
                <Route exact path="/home"  component={home} />
                <Route exact path="/login"  component={Login} />
                <Route
                    exact
                    path="/:sport"
                    render={({ match }) => {
                    if (sportsData.includes(match.params.sport)) {
                        return (
                        
                            <Sport sports={sportsData} />
                        );
                    } else {
                        return <Redirect to="/404" />;
                    }
                    }}
                />
                <Route path="/404" component={NotFoundPage} />
                <Redirect from="/" to="/Général" />
                {/* <Redirect to="/404" /> */}
            </Switch>
        </AnimatePresence>
    </Suspense>
    </Router>
  );
}

export default Routes;

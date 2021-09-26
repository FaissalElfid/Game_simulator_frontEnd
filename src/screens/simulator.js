import React, { lazy, useEffect } from "react";
import SuspenseComponent from "../components/library/SuspenseComponent";
import ScreenTransition from "../components/library/ScreenTransition";
import MainLayout from "../components/layout/layout";
// import SportsNav from '../components/sports/sportsNav'
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getChallenges } from "../redux/actions/challenges";
import BackdropLoader from "../components/library/backdrop";

const Sport = lazy(() => import("./sport"));
const SportsNav = lazy(() => import("../components/sports/sportsNav"));
const Simulator = (props) => {
  const {loading} = useSelector(state => state.challenges)
  if(loading) return(<BackdropLoader />)
    return (
    <MainLayout>
      <SportsNav />
      <Sport />
    </MainLayout>
  );
};
export default SuspenseComponent(ScreenTransition(withRouter(Simulator)));

import React, { lazy } from 'react'
import SuspenseComponent from '../components/library/SuspenseComponent'
import ScreenTransition from '../components/library/ScreenTransition'
import MainLayout from '../components/layout/layout'
// import SportsNav from '../components/sports/sportsNav'
import {  withRouter } from 'react-router'


  const Sport = lazy(() => import("./sport"));
  const SportsNav = lazy(() => import("../components/sports/sportsNav"));
const Simulator = (props) => {
          return (
          <MainLayout>
            <SportsNav />
            <Sport />
          </MainLayout>
        );

}
export default SuspenseComponent(ScreenTransition(withRouter(Simulator)));


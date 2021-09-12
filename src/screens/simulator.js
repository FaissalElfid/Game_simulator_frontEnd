import React, { lazy } from 'react'
import SuspenseComponent from '../components/library/SuspenseComponent'
import ScreenTransition from '../components/library/ScreenTransition'
import MainLayout from '../components/layout/layout'
import SportsNav from '../components/sports/sportsNav'
import { useHistory, withRouter } from 'react-router'


  const Sport = lazy(() => import("./sport"));

const Simulator = (props) => {
    const sportsData = [
        "Général",
        "Social",
        "Foot",
        "Tennis",
        "Basket",
        "Rugby",
        "Hockey",
      ];
    const history = useHistory()
    if (sportsData.includes(props.match.params.sport)) {
        return (
          <MainLayout>
            <SportsNav sports={sportsData} />
            <Sport />
          </MainLayout>
        );
      } else {
        history.push('/404')
      }

}
export default SuspenseComponent(ScreenTransition(withRouter(Simulator)));


import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import DashboardLayout from '../../components/layout/admin';
import CustomerListToolbar from '../../components/badges/BadgesToolbar';
import CustomerListResults from '../../components/badges/BadgesResults';
import SuspenseComponent from '../../components/library/SuspenseComponent';
import ScreenTransition from '../../components/library/ScreenTransition';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function BadgesList (){ 
  const [allBadges, setAllBadges] = useState([])
  const {badges} = useSelector(state => state.badges)
  useEffect(() => {
    if(badges.badges_bronze) setAllBadges(allBadges.concat(badges.badges_bronze))
    else if(badges.badges_gold) setAllBadges(allBadges.concat(badges.badges_gold))
    else if(badges.badges_silver) setAllBadges(allBadges.concat(badges.badges_silver))
    else if(badges.badges) setAllBadges(allBadges.concat(badges.badges))
    else setAllBadges([])
  }, [badges])
  return (
  <DashboardLayout>
    <Helmet>
      <title>Challenge</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ pt: 3 }}>
          <CustomerListResults customers={allBadges} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
)};

export default SuspenseComponent(ScreenTransition(BadgesList));

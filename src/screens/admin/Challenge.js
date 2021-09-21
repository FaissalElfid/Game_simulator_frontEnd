import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import DashboardLayout from '../../components/layout/admin';
import CustomerListToolbar from '../../components/challenge/ChallengeToolbar';
import CustomerListResults from '../../components/challenge/ChallengeResults';
import SuspenseComponent from '../../components/library/SuspenseComponent';
import ScreenTransition from '../../components/library/ScreenTransition';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getChallenges } from '../../redux/actions/challenges';

function ChallengeList (){ 
  const  dispatch = useDispatch()
  const {challenges, challengeDeleted} = useSelector(state => state.challenges)
  useEffect(() => {
    dispatch(getChallenges())
  }, [challengeDeleted])
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
          <CustomerListResults customers={challenges} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
)};

export default SuspenseComponent(ScreenTransition(ChallengeList));

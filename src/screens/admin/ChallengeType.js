import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import DashboardLayout from '../../components/layout/admin';
import CustomerListToolbar from '../../components/challengeType/ChallengeTypeToolbar';
import CustomerListResults from '../../components/challengeType/ChallengeTypeResults';
import SuspenseComponent from '../../components/library/SuspenseComponent';
import ScreenTransition from '../../components/library/ScreenTransition';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getChallengesType } from '../../redux/actions/challenges/ChallengeType';

const ChallengeTypeList = () => {
  const  dispatch = useDispatch()
  const {challengeTypes, challengesTypeAdded} = useSelector(state => state.challengesTypes)
  useEffect(() => {
    dispatch(getChallengesType())
  }, [challengesTypeAdded, dispatch])
  return(
  <DashboardLayout>
    <Helmet>
      <title>Challenge Type</title>
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
          <CustomerListResults customers={challengeTypes} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
)};

export default SuspenseComponent(ScreenTransition(ChallengeTypeList));

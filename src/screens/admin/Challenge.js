import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import customers from '../../utils/mock_data/customers';
import DashboardLayout from '../../components/layout/admin';
import CustomerListToolbar from '../../components/challenge/ChallengeToolbar';
import CustomerListResults from '../../components/challenge/ChallengeResults';
import SuspenseComponent from '../../components/library/SuspenseComponent';
import ScreenTransition from '../../components/library/ScreenTransition';

const ChallengeList = () => (
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
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);

export default SuspenseComponent(ScreenTransition(ChallengeList));

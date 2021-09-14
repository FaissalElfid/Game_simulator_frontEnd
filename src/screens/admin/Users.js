import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import customers from '../../utils/mock_data/customers';
import DashboardLayout from '../../components/layout/admin';
import CustomerListToolbar from '../../components/users/UsersListToolbar';
import CustomerListResults from '../../components/users/UsersListResults';
import SuspenseComponent from '../../components/library/SuspenseComponent';
import ScreenTransition from '../../components/library/ScreenTransition';

const UsersList = () => (
  <DashboardLayout>
    <Helmet>
      <title>Customers | Material Kit</title>
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

export default SuspenseComponent(ScreenTransition(UsersList));

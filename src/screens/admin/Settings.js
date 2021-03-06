import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SettingsNotifications from '../../components/settings/SettingsNotifications';
import SettingsPassword from '../../components/settings/SettingsPassword';
import DashboardLayout from '../../components/layout/admin';

const SettingsView = () => (
    <DashboardLayout>
    <Helmet>
      <title>Settings</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
    </DashboardLayout>
);

export default SettingsView;

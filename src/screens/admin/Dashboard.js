import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Budget from '../../components/dashboard/Budget';
import Sales from '../../components/dashboard/Sales';
import TasksProgress from '../../components/dashboard/TasksProgress';
import TotalCustomers from '../../components/dashboard/TotalCustomers';
import TotalProfit from '../../components/dashboard/TotalProfit';
import TrafficByDevice from '../../components/dashboard/TrafficByDevice';
import DashboardLayout from '../../components/layout/admin';
import SuspenseComponent from '../../components/library/SuspenseComponent';
import ScreenTransition from '../../components/library/ScreenTransition';

const Dashboard = () => (
  <DashboardLayout>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </DashboardLayout>
);

export default SuspenseComponent(ScreenTransition(Dashboard));

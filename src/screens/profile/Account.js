import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from '../../components/account/AccountProfile';
import AccountProfileDetails from '../../components/account/AccountProfileDetails';
import DashboardLayout from '../../components/layout/profile';
import ErrorCollapse from '../../components/library/errorCollapse';
import SuccessCollapse from '../../components/library/successCollapse';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../redux/actions/login';

function Account(){
  const { error, uploadSuccess } = useSelector((state) => state.login);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch, uploadSuccess])
  return (
  <DashboardLayout>
    <Helmet>
      <title>My Account</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={12}>
            <ErrorCollapse error={error} />
            <SuccessCollapse success={uploadSuccess} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </DashboardLayout>
)};

export default Account;

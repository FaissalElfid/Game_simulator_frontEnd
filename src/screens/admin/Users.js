import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import customers from '../../utils/mock_data/customers';
import DashboardLayout from '../../components/layout/admin';
import CustomerListToolbar from '../../components/users/UsersListToolbar';
import CustomerListResults from '../../components/users/UsersListResults';
import SuspenseComponent from '../../components/library/SuspenseComponent';
import ScreenTransition from '../../components/library/ScreenTransition';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/getUsers';

function UsersList()  {
  const  dispatch = useDispatch()
  const {users} = useSelector(state => state.users)
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
  <DashboardLayout>
    <Helmet>
      <title>Users</title>
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
          <CustomerListResults customers={users} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);}

export default SuspenseComponent(ScreenTransition(UsersList));

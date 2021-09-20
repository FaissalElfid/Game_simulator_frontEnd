import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
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
  const {users, loading} = useSelector(state => state.users)
  const { registered } = useSelector((state) => state.register);

  useEffect(() => {
    dispatch(getUsers())
  }, [registered])
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
          <CustomerListResults customers={users} loading={loading} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);}

export default SuspenseComponent(ScreenTransition(UsersList));

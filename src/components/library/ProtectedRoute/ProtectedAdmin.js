import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";
import { getUser } from "../../../redux/actions/login";
import { setCurrentUrl } from "../../../redux/actions/shared";

export const ProtectedRouteAdmin = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const { user, connected } = useSelector((state) => state.login);
  const location = useLocation();
  useEffect(() => {
      dispatch(getUser());
      dispatch(setCurrentUrl(location.pathname));
  }, [dispatch, location.pathname]);
  return (
    connected ? 
    <Route
      {...rest}
      render={(props) => 
        user && user.isAdmin ? <Component {...props} /> : <Redirect to='/' />
      }
    /> : 
    <Route
      {...rest}
      render={() => <Redirect to='/Login' />
      }
    />
  );
};

export default ProtectedRouteAdmin;
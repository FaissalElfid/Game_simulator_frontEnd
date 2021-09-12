import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";
import { getUser } from "../../../redux/actions/login";
import { setCurrentUrl } from "../../../redux/actions/shared";

export const ProtectedRouteAuth = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const { connected } = useSelector((state) => state.login);
  const location = useLocation();
  useEffect(() => {
      dispatch(getUser());
      dispatch(setCurrentUrl(location.pathname));
  }, [dispatch, connected, location.pathname]);
  return (
    <Route
      {...rest}
      render={(props) =>
        connected ? <Component {...props} /> : <Redirect to='/Login' />
      }
    />
  );
};

export default ProtectedRouteAuth;

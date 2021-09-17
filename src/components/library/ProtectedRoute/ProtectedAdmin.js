import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";
import { getUser } from "../../../redux/actions/login";
import { setCurrentUrl } from "../../../redux/actions/shared";

export const ProtectedRouteAdmin = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const { isAdmin, connected, user } = useSelector((state) => state.login);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
    useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }else{
      setLoading(false)
    }
  }, [dispatch, loading]);
  
  dispatch(setCurrentUrl(location.pathname));

  return (
    connected ? 
    <Route
      {...rest}
      render={(props) => 
        isAdmin ? <Component {...props} /> : <Redirect to='/404' />
      }
    /> : 
    <Route
      {...rest}
      render={() => <Redirect to='/Login' /> // somtimes the code doesn't arrive here 
      }
    />
  );
};

export default ProtectedRouteAdmin;

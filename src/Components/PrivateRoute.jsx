import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AuthContext/AuthcontextProvider";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AppContext);
  console.log(state);
  if (!state.adminAuth && !state.isAuth) {
    return <Navigate to="/Jcrew-frontend/signin" />;
  }
  if (!state.isAuth) {
    return <Navigate to="/Jcrew-frontend/signin" />;
  }

  return children;
};

export default PrivateRoute;

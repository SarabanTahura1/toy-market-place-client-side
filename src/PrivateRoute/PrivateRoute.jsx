import React, { useContext } from "react";
import { AuthContextProvider } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Spinner/Loader";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContextProvider);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;

import React, { useContext } from "react";
import { AuthContextProvider } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../components/Spinner/Loader";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContextProvider);

  if (loading) {
    return <Loader></Loader>;
  }
  if (!currentUser) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;

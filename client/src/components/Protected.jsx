import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/Auth.context";
import Spinner from "./Spinner";

const ProtectedRoute = ({ element }) => {
  const { logStatus, isLoading, isPending } = useAuthContext();

  if (isLoading || isPending) {
    return <Spinner />; // Or a spinner component
  }

  return logStatus ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

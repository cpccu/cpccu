import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/Auth.context";

const ProtectedRoute = ({ element }) => {
  const { logStatus, isLoading, isPending } = useAuthContext();

  if (isLoading || isPending) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return logStatus ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

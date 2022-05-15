import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.profile.auth);

  if (auth) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
};

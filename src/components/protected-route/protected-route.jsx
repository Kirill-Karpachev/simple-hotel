import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ onlyUnAuth, children }) => {
  const location = useLocation();
  const { isAuth } = useSelector((store) => store.user);

  if (!isAuth && !onlyUnAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (isAuth && onlyUnAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;

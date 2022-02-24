import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children, isAutenticated }) => {

  const { pathname } = useLocation();
  localStorage.setItem( 'lastPath', pathname);

  return (
      ( isAutenticated )? children : <Navigate to="/auth/login" />
    )
}

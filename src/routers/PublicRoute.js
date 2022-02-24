import React from 'react';
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, isAutenticated }) => {

  return (
      ( !isAutenticated )? children : <Navigate to="/journal" />
      )
}

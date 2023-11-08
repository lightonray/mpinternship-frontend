import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ element }) => {
  const { token } = useAuth();
  const isAuthenticated = token !== null;

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
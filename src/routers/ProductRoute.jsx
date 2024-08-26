import React from 'react';
import UserAuth from "../hooks/UserAuth";
import { Navigate, Outlet } from 'react-router-dom';

const ProductRoute = () => {
  const { user } = UserAuth();

  return user ? <Outlet/> : <Navigate to="/login" />;
};

export default ProductRoute;







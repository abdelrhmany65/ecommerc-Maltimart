import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages and components
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import Error from "../pages/Error"; 

// Dashboard 
import ProductRoute from './ProductRoute';
import AllProducts from '../admin/AllProducts';
import AddProduct from '../admin/AddProduct';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />, // Handle routing errors
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "shop/:id",
        element: <ProductDetails />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "signup",
        element: <Signup />,
      },

      // Dashboard 
      {
        path: "/*",
        element: <ProductRoute />,
        children: [
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "dashboard",
            element: <Dashboard />, 
          },
          {
            path: "dashboard/all-product",
            element: <AllProducts />, 
          },
          {
            path: "dashboard/add-product",
            element: <AddProduct />, 
          },
          {
            path: "dashboard/users",
            element: <Users />, 
          },
        ],
      },


    ],
  },
]);

const AppRouts = () => {
  return <RouterProvider router={router} />;
}

export default AppRouts;

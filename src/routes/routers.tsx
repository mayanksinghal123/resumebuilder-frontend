import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Auth from "../pages/Auth/Auth";
import AppLayout from "../layouts/AppLayout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      // future pages
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "/settings",
      //   element: <Settings />,
      // },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

import React, { lazy } from "react";

const Home = lazy(() => import("../views/pages/homepage/Home"));

const pages = [
  {
    element: <Home />,
    path: "/home",
  },
];

export default pages;

import React, { useEffect } from "react";
import { useNavigation } from "react-auth-navigation";
import { MdDashboard } from "react-icons/all";

import { NotFound, Dashboard } from "./pages";

export const Redirect = ({ to }) => {
  const {
    navigation: { navigate },
  } = useNavigation();

  useEffect(() => {
    navigate(to);
  }, [to, navigate]);

  return null;
};

export const publicPaths = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    props: {
      icon: <MdDashboard />,
    },
  },
  {
    path: null,
    component: NotFound,
  },
];

export const privatePaths = [];

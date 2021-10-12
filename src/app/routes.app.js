import { useEffect } from "react";
import { useNavigation } from "react-auth-navigation";

import {
  NotFound,
  About,
  GettingStarted,
  AnimatedValues,
  Animations,
  Gestures,
} from "./pages";

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
    name: "Root",
    path: "/",
    component: () => <Redirect to="/docs/about" />,
    restricted: true,
  },
  {
    name: "DocsRoot",
    path: "/docs",
    component: () => <Redirect to="/docs/about" />,
    visible: false,
    restricted: true,
    subPaths: [
      // Fundamentals
      {
        name: "About",
        path: "/about",
        component: About,
        restricted: true,
      },
      {
        name: "Getting Started",
        path: "/getting-started",
        component: GettingStarted,
        restricted: true,
      },
      {
        name: "Animated Values",
        path: "/animated-values",
        component: AnimatedValues,
        restricted: true,
      },
      {
        name: "Animations",
        path: "/animations",
        component: Animations,
        restricted: true,
      },
      {
        name: "Gestures",
        path: "/gestures",
        component: Gestures,
        restricted: true,
      },
      // API REFERENCES
      {
        name: "useAnimatedValue",
        path: "/use-animated-value",
        component: GettingStarted,
        restricted: true,
      },
      {
        name: "useMountedValue",
        path: "/use-mounted-value",
        component: GettingStarted,
        restricted: true,
      },
    ],
  },
  {
    path: null,
    component: NotFound,
  },
];

export const privatePaths = [];

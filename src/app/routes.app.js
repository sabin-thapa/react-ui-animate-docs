import { useEffect } from "react";
import { useNavigation } from "react-auth-navigation";

import {
  NotFound,
  About,
  GettingStarted,
  AnimatedValues,
  Interpolation,
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
        name: "Interpolation",
        path: "/interpolation",
        component: Interpolation,
        restricted: true,
      },
      {
        name: "Animated HOCs",
        path: "/animated-hocs",
        component: GettingStarted,
        restricted: true,
      },
      {
        name: "Configuring Animations",
        path: "/configuring-animations",
        component: GettingStarted,
        restricted: true,
      },
      {
        name: "Gestures",
        path: "/gestures",
        component: GettingStarted,
        restricted: true,
      },
      // API REFERENCES
      {
        name: "useAnimatedValue()",
        path: "/useAnimatedValue",
        component: GettingStarted,
        restricted: true,
      },
      {
        name: "useMountedValue()",
        path: "/useMountedValue",
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

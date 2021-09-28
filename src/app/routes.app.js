import { useEffect } from "react";
import { useNavigation } from "react-auth-navigation";

import { NotFound, About, GettingStarted } from "./pages";

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
    name: "DocsRoot",
    path: "/docs",
    component: () => <Redirect to="/docs/about" />,
    visible: false,
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
        component: GettingStarted,
        restricted: true,
      },
      {
        name: "Interpolation",
        path: "/interpolation",
        component: GettingStarted,
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
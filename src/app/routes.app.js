import { useEffect } from "react";
import { useNavigation } from "react-auth-navigation";

import {
  NotFound,
  About,
  GettingStarted,
  AnimatedValues,
  Animations,
  Gestures,
  Sample,
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
        component: Sample,
        restricted: true,
      },
      {
        name: "useMountedValue",
        path: "/use-mounted-value",
        component: Sample,
        restricted: true,
      },
      {
        name: "useOutsideClick",
        path: "/use-outside-click",
        component: Sample,
        restricted: true,
      },
      {
        name: "useWindowDimension",
        path: "/use-window-dimension",
        component: Sample,
        restricted: true,
      },
      {
        name: "useScroll",
        path: "/use-scroll",
        component: Sample,
        restricted: true,
      },
      {
        name: "useMouseMove",
        path: "/use-mouse-move",
        component: Sample,
        restricted: true,
      },
      {
        name: "useDrag",
        path: "/use-drag",
        component: Sample,
        restricted: true,
      },
      {
        name: "useMeasure",
        path: "/use-measure",
        component: Sample,
        restricted: true,
      },
      {
        name: "interpolate",
        path: "/interpolate",
        component: Sample,
        restricted: true,
      },
      {
        name: "bInterpolate",
        path: "/binterpolate",
        component: Sample,
        restricted: true,
      },
      {
        name: "makeAnimatedComponent",
        path: "/make-animated-component",
        component: Sample,
        restricted: true,
      },
      {
        name: "clamp",
        path: "/clamp",
        component: Sample,
        restricted: true,
      },
      {
        name: "rubberClamp",
        path: "/rubber-clamp",
        component: Sample,
        restricted: true,
      },
      {
        name: "snapTo",
        path: "/snap-to",
        component: Sample,
        restricted: true,
      },
      {
        name: "mix",
        path: "/mix",
        component: Sample,
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

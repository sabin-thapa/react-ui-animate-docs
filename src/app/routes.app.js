import { useEffect } from "react";
import { useNavigation } from "react-auth-navigation";

import {
  NotFound,
  About,
  GettingStarted,
  AnimatedValues,
  Animations,
  Gestures,
  UseAnimatedValue,
  UseMountedValue,
  UseOutsideClick,
  UseWindowDimension,
  UseMeasure,
  UseScroll,
  UseMouseMove,
  UseDrag,
  UseWheel,
  UseGesture,
  Interpolate,
  BInterpolate,
  MakeAnimatedComponent,
  Clamp,
  RubberClamp,
  SnapTo,
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
    visible: false,
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
        component: UseAnimatedValue,
        restricted: true,
      },
      {
        name: "useMountedValue",
        path: "/use-mounted-value",
        component: UseMountedValue,
        restricted: true,
      },
      {
        name: "useOutsideClick",
        path: "/use-outside-click",
        component: UseOutsideClick,
        restricted: true,
      },
      {
        name: "useWindowDimension",
        path: "/use-window-dimension",
        component: UseWindowDimension,
        restricted: true,
      },
      {
        name: "useMeasure",
        path: "/use-measure",
        component: UseMeasure,
        restricted: true,
      },
      {
        name: "useScroll",
        path: "/use-scroll",
        component: UseScroll,
        restricted: true,
      },
      {
        name: "useMouseMove",
        path: "/use-mouse-move",
        component: UseMouseMove,
        restricted: true,
      },
      {
        name: "useDrag",
        path: "/use-drag",
        component: UseDrag,
        restricted: true,
      },
      {
        name: "useWheel",
        path: "/use-wheel",
        component: UseWheel,
        restricted: true,
      },
      {
        name: "useGesture",
        path: "/use-gesture",
        component: UseGesture,
        restricted: true,
      },
      {
        name: "interpolate",
        path: "/interpolate",
        component: Interpolate,
        restricted: true,
      },
      {
        name: "bInterpolate",
        path: "/binterpolate",
        component: BInterpolate,
        restricted: true,
      },
      {
        name: "makeAnimatedComponent",
        path: "/make-animated-component",
        component: MakeAnimatedComponent,
        restricted: true,
      },
      {
        name: "clamp",
        path: "/clamp",
        component: Clamp,
        restricted: true,
      },
      {
        name: "rubberClamp",
        path: "/rubber-clamp",
        component: RubberClamp,
        restricted: true,
      },
      {
        name: "snapTo",
        path: "/snap-to",
        component: SnapTo,
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

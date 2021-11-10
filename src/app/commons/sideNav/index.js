import React from "react";
import { useAuth } from "react-auth-navigation";
import { AnimatedBlock, useAnimatedValue, interpolate } from "react-ui-animate";

import { ParentGroup } from "./components";

const SideNavComponent = () => {
  return (
    <>
      <ParentGroup
        title="Fundamentals"
        items={[
          { name: "About", path: "/docs/about" },
          { name: "Getting Started", path: "/docs/getting-started" },
          { name: "Animated Values", path: "/docs/animated-values" },
          { name: "Animations", path: "/docs/animations" },
          { name: "Gestures", path: "/docs/gestures" },
        ]}
      />

      <ParentGroup
        title="API References"
        items={[
          {
            name: "Hooks",
            items: [
              { name: "useAnimatedValue", path: "/docs/use-animated-value" },
              { name: "useMountedValue", path: "/docs/use-mounted-value" },
              { name: "useOutsideClick", path: "/docs/use-outside-click" },
              {
                name: "useWindowDimension",
                path: "/docs/use-window-dimension",
              },
              { name: "useMeasure", path: "/docs/use-measure" },
              { name: "useScroll", path: "/docs/use-scroll" },
              { name: "useMouseMove", path: "/docs/use-mouse-move" },
              { name: "useDrag", path: "/docs/use-drag" },
              { name: "useWheel", path: "/docs/use-wheel" },
            ],
          },
          {
            name: "Methods",
            items: [
              { name: "interpolate", path: "/docs/interpolate" },
              { name: "bInterpolate", path: "/docs/binterpolate" },
              {
                name: "makeAnimatedComponent",
                path: "/docs/make-animated-component",
              },
            ],
          },
          {
            name: "Utility Functions",
            items: [
              { name: "clamp", path: "/docs/clamp" },
              { name: "rubberClamp", path: "/docs/rubber-clamp" },
              { name: "snapTo", path: "/docs/snap-to" },
              { name: "mix", path: "/docs/mix" },
            ],
          },
        ]}
      />
    </>
  );
};

export const SideNav = () => {
  const { drawerOpen } = useAuth();
  const animation = useAnimatedValue(drawerOpen);

  return (
    <div className="sidenav">
      <div className="sidenav-web">
        <SideNavComponent />
      </div>
      <AnimatedBlock
        style={{
          translateX: interpolate(animation.value, [0, 1], [-340, 0]),
        }}
        className="sidenav-mobile"
      >
        <SideNavComponent />
      </AnimatedBlock>
    </div>
  );
};

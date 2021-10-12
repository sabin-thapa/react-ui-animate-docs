import React from "react";
import { useAuth } from "react-auth-navigation";
import { AnimatedBlock, useMountedValue, interpolate } from "react-ui-animate";

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
              { name: "useScroll", path: "/docs/use-scroll" },
              { name: "useMouseMove", path: "/docs/use-mouse-move" },
              { name: "useDrag", path: "/docs/use-drag" },
              { name: "useMeasure", path: "/docs/use-measure" },
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
  const mountedValue = useMountedValue(drawerOpen, [0, 1, 0]);

  return (
    <div className="sidenav">
      <div className="sidenav-web">
        <SideNavComponent />
      </div>

      {mountedValue(
        (animation, mounted) =>
          mounted && (
            <AnimatedBlock
              style={{
                transform: interpolate(
                  animation.value,
                  [0, 1],
                  ["translateX(-340px)", "translateX(0px)"]
                ),
              }}
              className="sidenav-mobile"
            >
              <SideNavComponent />
            </AnimatedBlock>
          )
      )}
    </div>
  );
};

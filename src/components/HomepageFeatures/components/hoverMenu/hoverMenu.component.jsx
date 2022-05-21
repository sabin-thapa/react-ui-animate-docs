import React, { useState } from "react";
import "./css/hoverMenu.css";

import { TransitionBlock, interpolate, AnimatedBlock } from "react-ui-animate";

export const HoverMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hover-menu-container">
      <div
        className="hover-menu-body"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        Explore
        <div className="hover-menu-options">
          <TransitionBlock state={open}>
            {(animation) => (
              <AnimatedBlock
                className="hover-menu-1"
                style={{
                  opacity: interpolate(animation.value, [0, 1], [0, 1]),
                  translateX: interpolate(
                    animation.value,
                    [0, 1],
                    ["0px", "-100px"]
                  ),
                }}
              >
                1
              </AnimatedBlock>
            )}
          </TransitionBlock>
          <TransitionBlock state={open} className="hover-menu-options">
            {(animation) => (
              <AnimatedBlock
                className="hover-menu-2"
                style={{
                  opacity: interpolate(animation.value, [0, 1], [0, 1]),
                  translateY: interpolate(
                    animation.value,
                    [0, 1],
                    ["0px", "-100px"]
                  ),
                }}
              >
                2
              </AnimatedBlock>
            )}
          </TransitionBlock>
          <TransitionBlock state={open} className="hover-menu-options">
            {(animation) => (
              <AnimatedBlock
                className="hover-menu-3"
                style={{
                  opacity: interpolate(animation.value, [0, 1], [0, 1]),
                  translateX: interpolate(
                    animation.value,
                    [0, 1],
                    ["0px", "100px"]
                  ),
                }}
              >
                3
              </AnimatedBlock>
            )}
          </TransitionBlock>
          <TransitionBlock state={open} className="hover-menu-options">
            {(animation) => (
              <AnimatedBlock
                className="hover-menu-4"
                style={{
                  opacity: interpolate(animation.value, [0, 1], [0, 1]),
                  translateY: interpolate(
                    animation.value,
                    [0, 1],
                    ["0px", "100px"]
                  ),
                }}
              >
                4
              </AnimatedBlock>
            )}
          </TransitionBlock>
        </div>
      </div>
    </div>
  );
};

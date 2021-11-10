import React, { useState } from "react";
import { ActiveLink, useAuth } from "react-auth-navigation";
import {
  useMeasure,
  useAnimatedValue,
  AnimatedBlock,
  AnimatedInline,
  bInterpolate,
} from "react-ui-animate";
import { BsFillCaretDownFill } from "react-icons/all";

export const NavGroup = ({ title, navItems }) => {
  const { setDrawerOpen } = useAuth();
  const [height, setHeight] = useState(0);
  const bind = useMeasure(({ height: h }) => {
    setHeight(h);
  });
  const [expanded, setExpanded] = useState(true);
  const expandAnimation = useAnimatedValue(expanded);
  const animatedHeight = useAnimatedValue(expanded ? height : 0);

  return (
    <div className="sidenav-nav-group">
      <div
        className="sidenav-nav-group-title"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="sidenav-nav-group-title-text">{title}</span>

        <AnimatedInline
          className="dropdownicon"
          style={{
            rotate: bInterpolate(expandAnimation.value, 0, 180),
          }}
        >
          <BsFillCaretDownFill size={12} />
        </AnimatedInline>
      </div>

      <AnimatedBlock
        style={{
          height: animatedHeight.value,
          overflow: "hidden",
        }}
      >
        <ul
          {...bind()}
          className="sidenav-nav-group-list"
          style={{ paddingBottom: 5 }}
        >
          {navItems.map(({ name, path }, index) => (
            <li
              key={index}
              onClick={() => setDrawerOpen(false)}
              className="sidenav-nav-group-list-items"
            >
              <ActiveLink
                to={path}
                className="link-item"
                activeClassName="active"
              >
                {name}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </AnimatedBlock>
    </div>
  );
};

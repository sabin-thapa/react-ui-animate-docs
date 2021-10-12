import React from "react";
import { useAuth } from "react-auth-navigation";

import { MdMenu, MdClose } from "react-icons/all";

export const Header = () => {
  const { drawerOpen, setDrawerOpen } = useAuth();
  return (
    <div className="header">
      <nav className="header__wrapper">
        <div
          className="header__menu"
          onClick={() => setDrawerOpen((prev) => !prev)}
        >
          {drawerOpen ? <MdClose /> : <MdMenu />}
        </div>

        <h2 className="header__title">React UI Animate</h2>

        <div className="npmversion">
          <a href="https://badge.fury.io/js/react-ui-animate">
            <img
              src="https://badge.fury.io/js/react-ui-animate.svg"
              alt="npm version"
              style={{
                width: 220 / 2,
                height: 40 / 2,
              }}
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

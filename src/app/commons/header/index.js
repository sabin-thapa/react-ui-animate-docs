import React from "react";
import { MdMenu, MdClose } from "react-icons/all";
import { useAuth } from "react-auth-navigation";

import { Label } from "../";

import { version } from "../../../version";

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
          <Label>Version: {version}</Label>
        </div>
      </nav>
    </div>
  );
};

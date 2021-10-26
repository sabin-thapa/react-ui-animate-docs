import React from "react";
import { Auth, withNavigation } from "react-auth-navigation";

import { publicPaths, privatePaths } from "./routes.app";
import { userRoles, userType } from "./userRoles.app";

// IMPORT COMMONS
import {
  Header,
  SideNav,
  Label,
  AlertInfo,
  SubHeadings,
  NextPrevButton,
} from "./commons";

const App = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <Auth.Provider
      config={{ isLoggedIn: false, userRole: userType.USER }}
      state={{
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <Header />

      <SideNav />

      <div className="pagecontainer">
        <div className="pagecontainer-content">
          <Label>Version: 1.1.x</Label>
          <AlertInfo />
          <Auth.Screens />
          <NextPrevButton />
        </div>

        <div className="pagecontainer-subheadings">
          <SubHeadings />
        </div>
      </div>
    </Auth.Provider>
  );
};

export default withNavigation(App, {
  publicPaths,
  privatePaths,
  userRoles,
  routerType: "hash",
});

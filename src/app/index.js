import React from "react";
import { Auth, withNavigation } from "react-auth-navigation";

import { publicPaths, privatePaths } from "./routes.app";
import { userRoles, userType } from "./userRoles.app";

// IMPORT COMMONS
import { Header, SideNav, Label } from "./commons";
import { CompWrapper } from "./hocs";

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

      <CompWrapper>
        <Label>Version: 1.x</Label>
        <Auth.Screens />
      </CompWrapper>
    </Auth.Provider>
  );
};

export default withNavigation(App, {
  publicPaths,
  privatePaths,
  userRoles,
  routerType: "hash",
});

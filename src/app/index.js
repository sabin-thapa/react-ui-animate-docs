import React from "react";
import { Auth, withNavigation } from "react-auth-navigation";

import { publicPaths, privatePaths } from "./routes.app";
import { userRoles, userType } from "./userRoles.app";

// IMPORT COMMONS
import { Header, SideNav } from "./commons";

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

      <div className="app">
        <Auth.Screens />
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

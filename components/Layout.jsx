import React from "react";

import MobileDrawer from "./MobileDrawer";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <MobileDrawer />
      <SideBar />

      {children}
    </React.Fragment>
  );
};

export default Layout;

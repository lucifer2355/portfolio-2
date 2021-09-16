import React from "react";

import MobileDrawer from "./MobileDrawer";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div>
      <MobileDrawer />
      <SideBar />

      {children}
    </div>
  );
};

export default Layout;

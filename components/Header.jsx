import React from "react";
import Drawer from "rc-drawer";

const Header = () => {
  return (
    <Drawer open={true}>
      <div>
        <p>Home</p>
        <p>About</p>
        <p>Resume</p>
        <p>Portfolios</p>
        <p>Contact</p>
      </div>
    </Drawer>
  );
};

export default Header;

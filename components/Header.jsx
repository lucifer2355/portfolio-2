import React from "react";
import Image from "next/image";
import Drawer from "rc-drawer";

const Header = ({ open, drawerToggle }) => {
  return (
    <Drawer
      width={"0px"}
      open={open}
      drawerToggle={drawerToggle}
      height={"100vh"}
      duration={"0.3s"}
      showMask={false}
    >
      <div>
        <Image
          layout='fixed'
          src={require("../assets/images/me.png")}
          height={130}
          width={130}
          className='rounded-full overflow-hidden'
        />
      </div>

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

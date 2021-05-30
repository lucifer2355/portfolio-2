import React from "react";
import Image from "next/image";
import Drawer from "rc-drawer";
import { MenuIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <>
      <Drawer
        width={"320px"}
        open={false}
        height={"100vh"}
        duration={"0.3s"}
        showMask={false}
        level='null'
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

      <div></div>
    </>
  );
};

export default Header;

import React from "react";
import Image from "next/image";
import RcDrawer from "rc-drawer";

const Header = ({ open, drawerToggle, drawerHandler }) => {
  return (
    <>
      <RcDrawer
        width={"320px"}
        open={open}
        onClose={drawerToggle}
        height={"100vh"}
        duration={"0.4s"}
        handler={false}
        level={null}
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
      </RcDrawer>

      <div onClick={drawerToggle}>{drawerHandler}</div>
    </>
  );
};

export default Header;

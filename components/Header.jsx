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
        className='xl:hidden focus:outline-none'
      >
        <div className='border-r-2 w-60 h-screen border-gray-400 border-opacity-20 flex flex-col items-center'>
          <div className='mt-10 mb-10 pb-10 w-full border-b-2 border-gray-400 border-opacity-20 flex  justify-center'>
            <div className='border-gray-400 border-4 border-opacity-10 rounded-full p-1 pb-0'>
              <Image
                layout='fixed'
                src={require("../assets/images/me.png")}
                height={130}
                width={130}
                className='rounded-full overflow-hidden'
              />
            </div>
          </div>

          <div>
            <p>Home</p>
            <p>About</p>
            <p>Resume</p>
            <p>Portfolios</p>
            <p>Contact</p>
          </div>
        </div>
      </RcDrawer>

      <div onClick={drawerToggle}>{drawerHandler}</div>
    </>
  );
};

export default Header;

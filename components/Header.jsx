import React from "react";
import Image from "next/image";
import Link from "next/link";
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
          <div className='mt-10 mb-16 pb-8 w-full border-b-2 border-gray-400 border-opacity-20 flex  justify-center'>
            <div className='border-gray-400 border-4 border-opacity-10 rounded-full p-1 pb-0'>
              <Image
                layout='fixed'
                src={require("../assets/images/me.png")}
                height={130}
                width={130}
                className='rounded-full'
              />
            </div>
          </div>

          <div className='w-full h-52 justify-between text-lg uppercase font-thin text-gray-300 cursor-pointer inline-block'>
            <ul className='flex flex-col text-justify space-y-4 w-full'>
              <li className='text-center hover:bg-opacity-20 hover:text-opacity-100 hover:text-blue-500 after:contents after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:scale-x-0 after:origin-left after:bg-blue-500 after:z-[-1] after:transition-transform after:delay-300 after:hover:scale-x-100'>
                <Link href='/' className=''>
                  Home
                </Link>
              </li>
              <li className='text-center hover:bg-opacity-20 hover:text-opacity-100 hover:text-blue-500 after:contents after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:scale-x-0 after:origin-left after:bg-blue-500 after:z-[-1] after:transition-transform after:delay-300 after:hover:scale-x-100'>
                About
              </li>
              <li className='text-center hover:bg-opacity-20 hover:text-opacity-100 hover:text-blue-500 after:contents after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:scale-x-0 after:origin-left after:bg-blue-500 after:z-[-1] after:transition-transform after:delay-300 after:hover:scale-x-100'>
                Resume
              </li>
              <li className='text-center hover:bg-opacity-20 hover:text-opacity-100 hover:text-blue-500 after:contents after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:scale-x-0 after:origin-left after:bg-blue-500 after:z-[-1] after:transition-transform after:delay-300 after:hover:scale-x-100'>
                Portfolio
              </li>
              <li className='text-center hover:bg-opacity-20 hover:text-opacity-100 hover:text-blue-500 after:contents after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:scale-x-0 after:origin-left after:bg-blue-500 after:z-[-1] after:transition-transform after:delay-300 after:hover:scale-x-100'>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </RcDrawer>

      <div onClick={drawerToggle}>{drawerHandler}</div>
    </>
  );
};

export default Header;

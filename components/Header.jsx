import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SwipeableDrawer, Button, List, Divider } from "@material-ui/core";

const Header = ({ open, drawerToggle, drawerHandler }) => {
  return (
    <>
      <SwipeableDrawer
        open={open}
        onClose={drawerToggle}
        className='xl:hidden focus:outline-none'
      >
        <div className='bg-[#10121B] h-screen border-r-2 w-60 border-gray-400 border-opacity-20 flex flex-col items-center'>
          <div className='mt-10 pb-8 w-full border-b-2 border-gray-400 border-opacity-20 flex  justify-center'>
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

          <div className='w-full h-screen flex items-center text-lg uppercase font-thin text-gray-300 cursor-pointer inline-block'>
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

          <div className='flex justify-center items-center border-t-2 border-gray-400 border-opacity-20 w-full h-20'>
            <h2 className='uppercase text-lg text-gray-400'>dhruvil</h2>
          </div>
        </div>
      </SwipeableDrawer>

      <div onClick={drawerToggle}>{drawerHandler}</div>
    </>
  );
};

export default Header;

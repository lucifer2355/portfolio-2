import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SwipeableDrawer } from "@material-ui/core";

import { navlinks } from "../data/navlinks/navlinks";

const Header = ({ open, drawerToggle, drawerHandler }) => {
  const router = useRouter();

  return (
    <>
      <SwipeableDrawer
        open={open}
        onClose={drawerToggle}
        className='xl:hidden focus:outline-none'
      >
        <div className='bg-[#10121B] h-screen border-r-2 w-60 border-gray-400 border-opacity-20  flex flex-col items-center'>
          <div className='mt-10 pb-8 w-full border-b-2 border-gray-400 border-opacity-20 flex  justify-center'>
            <div className='border-gray-400 border-4 border-opacity-10 rounded-full p-1 flex justify-center'>
              <Image
                layout='fixed'
                src={require("../assets/images/me.png")}
                height={130}
                width={130}
                className='rounded-full'
              />
            </div>
          </div>

          <div className='w-full h-screen flex items-center text-lg uppercase font-thin inline-block '>
            <ul className='flex-col text-justify justify-items-center space-y-4 w-full'>
              {navlinks.map((link, index) => (
                <li
                  key={index}
                  className={`text-center hover:bg-opacity-20 hover:text-opacity-100 hover:text-blue-500 cursor-pointer  ${
                    router.pathname === link.link
                      ? "text-white bg-[#047FFF]"
                      : "text-gray-400"
                  }`}
                >
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
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

// after:contents after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:scale-x-0 after:origin-left after:bg-blue-500 after:z-[-1] after:transition-transform after:delay-300 after:hover:scale-x-100

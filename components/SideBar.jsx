import React from "react";
import Image from "next/image";
import Link from "next/link";

import { navlinks } from "../data/navlinks/navlinks";

const SideBar = () => {
  return (
    <div className='bg-[#191D2B] w-1/6 border-r-2 border-gray-400 border-opacity-20 flex flex-col hidden md:hidden xl:block h-screen'>
      {/* Profile Image */}
      <div className='flex justify-center mt-8 border-b-2 border-gray-400 border-opacity-20 pb-5'>
        <div className='border-4 border-gray-400 border-opacity-20 rounded-full w-8/12 flex justify-center items-center'>
          <Image
            src={require("../assets/images/me.png")}
            height={200}
            width={200}
            className='rounded-full overflow-hidden'
          />
        </div>
      </div>

      {/* Nav Links */}
      <div className='flex justify-center items-center h-3/5 uppercase font-thin text-gray-300'>
        <ul className='space-y-4 w-full uppercase '>
          {navlinks.map((link) => (
            <li className='text-xl text-center hover:bg-opacity-20 hover:text-opacity-100 hover:text-blue-500 cursor-pointer'>
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Link */}
      <div className='border-t-2 border-gray-400 border-opacity-20'>
        <h1 className='text-center text-gray-300 mt-7'>DHRUVIL</h1>
      </div>
    </div>
  );
};

export default SideBar;

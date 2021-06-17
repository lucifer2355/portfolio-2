import React from "react";
import Image from "next/image";
import Link from "next/link";

import { navlinks } from "../data/navlinks/navlinks";

const SideBar = () => {
  return (
    <div className='bg-[#191D2B] w-3/12 border-r-2 border-gray-400 border-opacity-20'>
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
      <div>
        <ul>
          {navlinks.map((link) => (
            <li>
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Link */}
      <div></div>
    </div>
  );
};

export default SideBar;

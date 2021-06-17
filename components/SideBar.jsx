import React from "react";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className='bg-[#191D2B] w-3/12 border-r-2 border-gray-400 border-opacity-20'>
      <div className='flex justify-center mt-8'>
        <div className='border-4 border-gray-400 border-opacity-20 rounded-full w-8/12 flex justify-center items-center'>
          <Image
            src={require("../assets/images/me.png")}
            height={200}
            width={200}
            className='rounded-full overflow-hidden'
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

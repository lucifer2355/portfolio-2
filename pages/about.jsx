import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";
import aboutImage from "../assets/images/profile.jpeg";

const about = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-16'>
        <Title title='ABOUT ME' />

        <div
          className='mt-8 h-80 flex justify-between'
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className='bg-blue-700 bg-opacity-60 w-3 h-32' />
          <div className='bg-blue-700 bg-opacity-60 w-3 h-32 flex self-end' />
        </div>
      </div>
    </>
  );
};

export default about;

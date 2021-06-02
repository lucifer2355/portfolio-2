import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";
import aboutImage from "../assets/images/profile.jpeg";
import PersonalInfo from "../components/PersonalInfo";

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

        <h1 className='text-2xl mt-3'>
          I am{" "}
          <span className='text-blue-500 text-opacity-100 font-bold'>
            Dhruvil Gajjar
          </span>
        </h1>
        <p className='text-gray-400 text-justify font-mono mt-5'>
          As a passionate Web & Cross platform mobile application developer, I
          always prefer to build things or challenging projects. I have been
          focusing on clean coding and morden, elegant mobile app &
          user-friendly website design.
        </p>

        <PersonalInfo />
      </div>
    </>
  );
};

export default about;

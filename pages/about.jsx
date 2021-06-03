import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";
import aboutImage from "../assets/images/profile.jpeg";
import PersonalInfo from "../components/PersonalInfo";
import Card from "../components/Card";

const about = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-16'>
        <Title title='ABOUT ME' />

        <div
          className='mt-12 h-80 flex justify-between'
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
        <p className='text-gray-400 text-justify font-mono mt-3'>
          I’m Dhruvil, a 22 years old self-taught Web & Mobile App developer,
          from India. Middle of my college degree in "Information & Technology",
          I got a job as a "developer", where I stayed for almost 2 years, and I
          developed websites with Magento, developed mobile applications with
          React-Native.
        </p>

        <PersonalInfo />

        <div className='mt-4'>
          <button
            className='bg-blue-600 hover:bg-blue-800 focus:outline-none transform active:translate-y-1 rounded-md pt-2 pb-2 pr-3 pl-3 font-extralight'
            type='submit'
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/19m9FlGsTwwgRNIjrnY29EB5f8Sv3PEsS/view?usp=sharing"
              )
            }
          >
            DOWNLOAD CV
          </button>
        </div>

        <div className='mt-10'>
          <Title title='SERVICES' />
          <Card />
        </div>
      </div>
    </>
  );
};

export default about;

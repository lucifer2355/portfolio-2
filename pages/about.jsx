import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";
import aboutImage from "../assets/images/profile.jpeg";
import PersonalInfo from "../components/PersonalInfo";
import Services from "../components/Services";
import SideBar from "../components/SideBar";

const About = () => {
  return (
    <div className='flex'>
      <MobileDrawer />
      <SideBar />

      <div className='px-5 pt-1 mb-10 xl:w-5/6 xl:px-10 xl:pt-12'>
        <Title title='ABOUT ME' />

        <div className='flex flex-col xl:flex-row xl:h-screen xl:pt-5 xl:-mb-36'>
          <div
            className='mt-12 h-80 xl:h-3/5 xl:w-6/12 flex justify-between'
            style={{
              backgroundImage: `url(${aboutImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className='bg-blue-700 bg-opacity-60 w-3 h-2/3' />
            <div className='bg-blue-700 bg-opacity-60 w-3 h-2/3 flex self-end' />
          </div>

          <div className='flex flex-col xl:w-3/6 xl:pl-10 xl:mt-9'>
            <h1 className='text-2xl xl:text-3xl mt-3'>
              I am{" "}
              <span className='text-blue-500 text-opacity-100 font-bold'>
                Dhruvil Gajjar
              </span>
            </h1>
            <p className='text-gray-400 text-justify font-mono mt-2 xl:text-lg'>
              I’m Dhruvil, a 22 years old self-taught Web & Mobile App
              developer, from India. Middle of my college degree in "Information
              & Technology", I got a job as a "developer", where I stayed for
              almost 2 years, and I developed websites with Magento, developed
              mobile applications with React-Native.
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
          </div>
        </div>

        <Title title='SERVICES' />
        <Services />
      </div>
    </div>
  );
};

export default About;

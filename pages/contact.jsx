import React, { useState } from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";

const styles = (theme) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
});

const contact = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-1 mb-10'>
        <Title title='CONTACT ME' />

        <div className='mt-10'>
          <h1 className='text-2xl font-extralight'>Get In Touch</h1>

          <div>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='bg-[#10121B] text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-11/12 mt-5 placeholder:text-gray-300'
            />
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='bg-[#10121B] text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-11/12 mt-5 placeholder:text-gray-300'
            />
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='bg-[#10121B] text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-11/12 mt-5 placeholder:text-gray-300'
            />
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='bg-[#10121B] text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-11/12 mt-5 placeholder:text-gray-300'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;

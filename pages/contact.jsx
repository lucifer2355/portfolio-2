import React, { useState } from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-1 mb-10'>
        <Title title='CONTACT ME' />

        <div className='mt-10'>
          <h1 className='text-2xl font-extralight'>Get In Touch</h1>

          <div className='w-12/12'>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='bg-[#10121B] text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-full mt-5 placeholder:text-gray-300'
            />
            <input
              type='email'
              name='name'
              placeholder='Enter Your Email'
              className='bg-[#10121B] text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-full mt-5 placeholder:text-gray-300'
            />
            <input
              type='text'
              name='name'
              placeholder='Enter Your Subject'
              className='bg-[#10121B] text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-full mt-5 placeholder:text-gray-300'
            />
            <textarea
              type='text'
              name='name'
              rows={5}
              placeholder='Enter Your Message'
              className='bg-[#10121B] text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-full mt-5 placeholder:text-gray-300'
            />
          </div>

          <div className='mt-4'>
            <button
              className='bg-blue-600 hover:bg-blue-800 focus:outline-none transform active:translate-y-1 rounded-md pt-2 pb-2 pr-3 pl-3 font-extralight'
              type='submit'
              onClick={() => console.log("send mail")}
            >
              SEND MAIL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;

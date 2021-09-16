import React, { useState } from "react";

import Title from "../components/Title";
import ContactCard from "../components/ContactCard";
import { contacts } from "../data/contact/contact";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className='flex'>
      <div className='flex flex-col xl:w-5/6 xl:px-10 px-4 pt-1 mb-10 xl:ml-1.6'>
        <Title title='CONTACT ME' />

        <div className='mt-10 flex space-x-4'>
          <div className='w-7/12'>
            <h1 className='text-2xl font-extralight xl:text-3xl'>
              Get In Touch
            </h1>

            <div className='w-12/12'>
              <input
                type='text'
                name='name'
                placeholder='Enter Your Name'
                className='bg-[#10121B] border-gray-400 text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-full mt-5 placeholder:text-gray-300'
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                name='email'
                placeholder='Enter Your Email'
                className='bg-[#10121B] border-gray-400 text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-full mt-5 placeholder:text-gray-300'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='text'
                name='subject'
                placeholder='Enter Your Subject'
                className='bg-[#10121B] border-gray-400 text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-full mt-5 placeholder:text-gray-300'
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                type='text'
                name='message'
                rows={5}
                placeholder='Enter Your Message'
                className='bg-[#10121B] border-gray-400 text-gray-300 text-md font-medium border-2 rounded-lg pl-2 py-2 focus:outline-none w-full mt-5 placeholder:text-gray-300'
                onChange={(e) => setMessage(e.target.value)}
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

          <div className='xl:w-2/5 xl:mt-10'>
            {contacts.map((contact, index) => (
              <ContactCard
                key={index}
                Icon={contact.Icon}
                title={contact.title}
                contactString={contact.contactString}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;

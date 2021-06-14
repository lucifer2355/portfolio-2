import React from "react";
import { MailIcon } from "@heroicons/react/outline";

const ContactCard = () => {
  return (
    <div className='bg-[#191D2B] py-5 px-5'>
      <div className='border border-[#A4ACC4] border-opacity-30 w-14 h-14 flex items-center justify-center'>
        <MailIcon className='h-9' color='#A4ACC4' />
      </div>
      <h1 className='mt-2 text-lg'>Email</h1>

      <div className='flex flex-col mt-2 h-12 justify-between text-gray-400'>
        <a href='mailto:dgajjar999@gmail.com'>dgajjar999@gmail.com</a>
        <a href='mailto:dgajjar000@gmail.com'>dgajjar000@gmail.com</a>
      </div>
    </div>
  );
};

export default ContactCard;

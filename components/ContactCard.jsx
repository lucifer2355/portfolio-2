import React from "react";

const ContactCard = ({ Icon, title, contactString }) => {
  return (
    <div className='bg-[#191D2B] py-5 px-5 mt-5'>
      <div className='border border-[#A4ACC4] border-opacity-30 w-14 h-14 flex items-center justify-center'>
        {Icon}
      </div>
      <h1 className='mt-2 text-lg'>{title}</h1>

      <div className='flex flex-col mt-2 h-12 justify-between text-gray-400'>
        {contactString.map((string) => {
          if (title === "Email")
            return <a href={`mailto:${string}`}>{string}</a>;
          else return <span>{string}</span>;
        })}
      </div>
    </div>
  );
};

export default ContactCard;

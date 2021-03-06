import React from "react";
import Image from "next/image";

import { services } from "../data/services/services";

const Services = () => {
  return (
    <div className='mt-12 xl:grid xl:grid-cols-3 xl:space-x-4'>
      {services.map((service) => (
        <div
          className={
            "mt-6 border border-[#2E344E] border-t-4 bg-[#191D2B]  rounded-sm py-5 px-10 hover:border-blue-600 relative"
          }
        >
          <Image src={service.icon} width={40} height={40} color='text-white' />
          <h1 className='text-xl xl:text-2xl mt-5'>{service.title}</h1>
          <div className='mt-4 mb-8  after:rounded-sm after:active:bg-[#2E344E] after:bg-opacity-60 after:active:empty-content after:absolute after:left-4 after:h-0.5 after:w-14 after:left-10'></div>
          <p className='text-gray-400 text-justify'>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;

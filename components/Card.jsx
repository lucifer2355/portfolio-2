import React from "react";
import Image from "next/image";

import webDevSvg from "../assets/svg/painter-palette.svg";
import codeSvg from "../assets/svg/code.svg";
import mobileSvg from "../assets/svg/smartphone.svg";

const services = [
  {
    title: "Web Design",
    icon: webDevSvg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
  },
  {
    title: "Web Development",
    icon: codeSvg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
  },
  {
    title: "Mobile Application",
    icon: mobileSvg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
  },
];

const Card = () => {
  return (
    <div className='mt-12'>
      {services.map((service) => (
        <div
          className={
            "mt-6 border border-[#2E344E] border-t-4 bg-[#191D2B]  rounded-sm pr-5 pl-5 pt-5 pb-5 hover:border-blue-600"
          }
        >
          <Image src={service.icon} width={40} height={40} color='text-white' />
          <h1 className='text-xl mt-5'>{service.title}</h1>
          <div className='mt-4 mb-8  after:rounded-sm after:active:bg-[#2E344E] after:bg-opacity-60 after:active:empty-content after:absolute after:left-4 after:h-0.5 after:w-14 after:left-10' />
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;

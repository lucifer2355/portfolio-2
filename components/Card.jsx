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
    <div>
      {services.map((service) => (
        <div>
          <Image src={service.icon} width={30} height={30} color='text-white' />
        </div>
      ))}
    </div>
  );
};

export default Card;

import React from "react";

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
      <webDevSvg />
    </div>
  );
};

export default Card;

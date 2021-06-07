import React from "react";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className='w-11/12'>
      <Image
        src={require("../assets/projects/natours.png")}
        height={300}
        className='w-11/12'
      />
    </div>
  );
};

export default ProjectCard;

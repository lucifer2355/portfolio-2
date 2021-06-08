import React from "react";
import Image from "next/image";

const ProjectCard = ({
  imageURL,
  projectURL,
  projectTitle,
  projectDescription,
}) => {
  return (
    <div className='mt-10'>
      <a target='_blank' href={projectURL}>
        <>
          <Image
            src={imageURL}
            height={80}
            width={130}
            layout='responsive'
            className='w-10/12'
          />
          <h1 className='text-2xl mt-2'>{projectTitle}</h1>
          <h1 className='text-lg text-gray-400'>{projectDescription}</h1>
        </>
      </a>
    </div>
  );
};

export default ProjectCard;

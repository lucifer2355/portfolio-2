import React from "react";
import Image from "next/image";
import { LinkIcon, CodeIcon } from "@heroicons/react/outline";

const ProjectCard = ({
  imageURL,
  projectURL,
  projectSourceCodeURL,
  projectTitle,
  projectDescription,
}) => {
  return (
    <div className='mt-10 h-auto flex flex-col justify-between'>
      <div>
        <Image
          src={imageURL}
          height={80}
          width={130}
          layout='responsive'
          className='w-10/12'
        />
        <h1 className='text-2xl mt-2'>{projectTitle}</h1>
        <h1 className='text-lg text-gray-400 text-justify'>
          {projectDescription}
        </h1>
      </div>

      <div className='flex justify-between items-center px-5 mt-3 text-blue-500 text-opacity-100'>
        {projectURL && (
          <a target='_blank' className='flex' href={projectURL}>
            <>
              <LinkIcon width={15} className='mr-1' />
              Visit
            </>
          </a>
        )}
        {projectSourceCodeURL && (
          <a href={projectSourceCodeURL} target='_blank' className='flex'>
            <>
              <CodeIcon width={15} className='mr-1' />
              Source
            </>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

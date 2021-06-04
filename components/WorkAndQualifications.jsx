import React from "react";
import { BriefcaseIcon } from "@heroicons/react/outline";

const WorkAndQualifications = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center mt-5'>
        <BriefcaseIcon height={30} width={30} color='#ccc' />
        <span className='ml-3 text-2xl font-bold'>Working Experience</span>
      </div>
      <div className='border-l-2 pl-4 ml-1 mt-5 border-gray-200 h-auto relative'>
        <div className='w-11/12 flex flex-col '>
          <span className='text-gray-400 text-lg before:empty-content before:bg-[#10121B] before:h-4 before:w-4 before:rounded-xl before:absolute before:-left-2.5 before:top-2 before:border-4 before:border-gray-400'>
            2018 - Present
          </span>
          <span className='text-xl text-blue-500 text-opacity-100 font-bold'>
            Frontend Web Developer
          </span>
          <span className='text-lg text-white font-thin'>abc company</span>
          <p className='text-justify text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam
            sed aspernatur hic cum magni minus explicabo commodi, consequatur
            quidem non at voluptas nisi sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkAndQualifications;

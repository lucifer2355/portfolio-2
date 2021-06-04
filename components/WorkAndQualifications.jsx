import React from "react";
import { BriefcaseIcon } from "@heroicons/react/outline";

import { workExperiences } from "../data/resume/workExperiences";

const WorkAndQualifications = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center mt-5'>
        <BriefcaseIcon height={30} width={30} color='#ccc' />
        <span className='ml-3 text-2xl font-bold'>Working Experience</span>
      </div>
      <div className='border-l-4 pl-4 ml-2 mt-5 border-[#2E344E] h-auto'>
        {workExperiences.map((workExperience) => (
          <div className='w-11/12 mt-5 flex flex-col relative'>
            <span className='text-gray-400 text-lg before:empty-content before:bg-[#10121B] before:h-4 before:w-4 before:rounded-xl before:absolute before:-left-6.5 before:mt-1.5 before:border-4 before:border-[#2E344E]'>
              {workExperience.timeLine}
            </span>
            <span className='text-xl text-blue-500 text-opacity-100 font-bold'>
              {workExperience.jobTitle}
            </span>
            <span className='text-lg text-white font-thin'>
              {workExperience.companyName}
            </span>
            <p className='text-justify text-gray-400 mt-3'>
              {workExperience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkAndQualifications;

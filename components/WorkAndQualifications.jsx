import React from "react";
import { BriefcaseIcon } from "@heroicons/react/outline";

const WorkAndQualifications = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center mt-5'>
        <BriefcaseIcon height={30} width={30} color='#ccc' />
        <span className='ml-3 text-2xl font-bold'>Working Experience</span>
      </div>
      <div className='border-l-2 pl-4 ml-1 mt-5 border-gray-200 h-auto'>
        <div className='w-11/12 flex flex-col'>
          <span className=''>2018 - Present</span>
          <span className=''>Frontend Web Developer</span>
          <span className=''>abc company</span>
          <p className='text-justify'>
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

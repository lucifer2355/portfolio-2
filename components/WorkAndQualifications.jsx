import React from "react";
import { BriefcaseIcon } from "@heroicons/react/outline";

const WorkAndQualifications = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center mt-5'>
        <BriefcaseIcon height={30} width={30} color='#ccc' />
        <span className='ml-3 text-2xl font-bold'>Working Experience</span>
      </div>
    </div>
  );
};

export default WorkAndQualifications;

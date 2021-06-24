import React from "react";

const WorkAndQualifications = ({ title, Icon, data }) => {
  return (
    <div className='mt-10'>
      <div className='flex items-center mt-5'>
        {Icon}
        <span className='ml-3 text-2xl font-bold'>{title}</span>
      </div>
      <div className='border-l-4 pl-4 ml-2 mt-5 border-[#2E344E] h-auto'>
        {data.map((workExperience, index) => (
          <div
            key={index}
            className='w-11/12 mt-5 flex flex-col relative xl:flex-row'
          >
            <span className='text-gray-400 text-lg before:empty-content before:bg-[#10121B] before:h-4 before:w-4 before:rounded-xl before:absolute before:-left-6.5 before:mt-1.5 before:border-4 before:border-[#2E344E] xl:w-3/5 '>
              {workExperience.timeLine}
            </span>

            <div className='flex flex-col '>
              <span className='text-xl text-blue-500 text-opacity-100 font-bold'>
                {workExperience.title}
              </span>
              <span className='text-lg text-white font-thin'>
                {workExperience.organization}
              </span>
              <p className='text-justify text-gray-400 mt-3'>
                {workExperience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkAndQualifications;

import React from "react";

import { skills } from "../data/resume/skills";

const Skills = () => {
  return (
    <div className='mt-5 xl:grid xl:grid-cols-2 xl:space-x-5'>
      {skills.map((skill) => (
        <div className='mt-5 xl:first:ml-5'>
          <h1 className='text-xl font-bold'>{skill.title}</h1>
          <div className='relative pt-1 flex'>
            <span className='w-10 font-thin text-gray-400'>
              {skill.percentage}
            </span>
            <div className='overflow-hidden h-1 mt-3 flex rounded-md bg-[#2E344E] w-11/12'>
              <div
                style={{ width: skill.percentage }}
                className='bg-[#047FFF]'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

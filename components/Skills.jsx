import React from "react";

const skills = [
  {
    title: "JavaScript",
    percentage: "80%",
  },
  {
    title: "TypeScript",
    percentage: "60%",
  },
  {
    title: "Python",
    percentage: "30%",
  },
  {
    title: "ReactJS",
    percentage: "80%",
  },
  {
    title: "Redux",
    percentage: "70%",
  },
  {
    title: "NextJS",
    percentage: "70%",
  },
  {
    title: "React Native",
    percentage: "85%",
  },
  {
    title: "NodeJS",
    percentage: "50%",
  },
  {
    title: "MongoDB",
    percentage: "40%",
  },
  {
    title: "Tailwind CSS",
    percentage: "70%",
  },
  {
    title: "SASS",
    percentage: "80%",
  },
  {
    title: "Magento",
    percentage: "20%",
  },
];

const Skills = () => {
  return (
    <div className='mt-10'>
      {skills.map((skill) => (
        <div className='mt-5'>
          <h1 className='text-xl font-bold'>{skill.title}</h1>
          <div className='relative pt-1 flex'>
            <span className='w-10 font-thin'>{skill.percentage}</span>
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

import React from "react";

import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio/projects";

const portfolio = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col xl:w-5/6 xl:px-10 px-4 pt-1 mb-10 xl:ml-1.6'>
        <Title title='PORTFOLIOS' />

        <div className='grid md:grid-cols-2 md:space-x-5 xl:grid-cols-3 xl:space-x-5'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              imageURL={project.image}
              projectURL={project.link}
              projectTitle={project.title}
              projectDescription={project.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolio;

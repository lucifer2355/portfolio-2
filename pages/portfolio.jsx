import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio/projects";

const portfolio = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-1 mb-10'>
        <Title title='PORTFOLIOS' />

        <div className='grid md:grid-cols-2 md:space-x-5 xl:grid-cols-3 xl:space-x-5'>
          {projects.map((project) => (
            <ProjectCard
              imageURL={project.image}
              projectURL={project.link}
              projectTitle={project.title}
              projectDescription={project.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default portfolio;
import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";
import Skills from "../components/Skills";

const Resume = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-16'>
        <Title title='MY SKILL' />

        <Skills />
      </div>
    </>
  );
};

export default Resume;

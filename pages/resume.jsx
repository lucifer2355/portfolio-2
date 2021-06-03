import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";
import Skills from "../components/Skills";
import WorkAndQualifications from "../components/WorkAndQualifications";

const Resume = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-1'>
        <Title title='MY SKILL' />
        <Skills />
        <Title title='RESUME' />
        <WorkAndQualifications />
      </div>
    </>
  );
};

export default Resume;

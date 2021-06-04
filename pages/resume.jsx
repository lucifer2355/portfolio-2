import React from "react";
import { BriefcaseIcon } from "@heroicons/react/outline";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";
import Skills from "../components/Skills";
import WorkAndQualifications from "../components/WorkAndQualifications";
import { workExperiences } from "../data/resume/workExperiences";

const Resume = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-1'>
        <Title title='MY SKILL' />
        <Skills />
        <Title title='RESUME' />
        <WorkAndQualifications
          title='Working Experience'
          Icon={<BriefcaseIcon height={30} width={30} color='#ccc' />}
          data={workExperiences}
        />
      </div>
    </>
  );
};

export default Resume;

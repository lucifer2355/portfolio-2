import React from "react";
import Image from "next/image";
import { BriefcaseIcon } from "@heroicons/react/outline";

import bookSvg from "../assets/svg/book.svg";
import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";
import Skills from "../components/Skills";
import WorkAndQualifications from "../components/WorkAndQualifications";
import { workExperiences } from "../data/resume/workExperiences";
import { qualifications } from "../data/resume/qualifications";
import { courses } from "../data/resume/courses";

const Resume = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-1 mb-10'>
        <Title title='MY SKILL' />
        <Skills />
        <Title title='RESUME' />
        <WorkAndQualifications
          title='Working Experience'
          Icon={<BriefcaseIcon height={30} width={30} color='#ccc' />}
          data={workExperiences}
        />
        <WorkAndQualifications
          title='Educational Qualifications'
          Icon={<Image src={bookSvg} width={30} height={30} />}
          data={qualifications}
        />

        <Title title='COURSERS' />
        <div className='mt-10'>
          {courses.map((course) => (
            <a
              key={course.number}
              href={course.link}
              target='_blank'
              className='block text-xl font-thin'
            >
              {course.number}. {course.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resume;

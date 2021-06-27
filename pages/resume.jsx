import React from "react";
import Image from "next/image";
import { BriefcaseIcon } from "@heroicons/react/outline";

import MobileDrawer from "../components/MobileDrawer";
import SideBar from "../components/SideBar";
import bookSvg from "../assets/svg/book.svg";
import Title from "../components/Title";
import Skills from "../components/Skills";
import WorkAndQualifications from "../components/WorkAndQualifications";
import { workExperiences } from "../data/resume/workExperiences";
import { qualifications } from "../data/resume/qualifications";
import { courses } from "../data/resume/courses";

const Resume = () => {
  return (
    <div className='flex'>
      <MobileDrawer />
      <SideBar />

      <div className='flex flex-col xl:w-5/6 xl:px-10 px-4 mb-10 xl:ml-1.6'>
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

        <Title title='COURSES' />
        <div className='mt-10 xl:text-center'>
          <ul className='inline'>
            {courses.map((course) => (
              <li
                key={course.number}
                className='block pl-2 xl:pl-0 xl:inline pr-2 hover:text-blue-500'
              >
                <a
                  href={course.link}
                  target='_blank'
                  className='inline text-xl text-gray-300 font-thin mt-1 w-auto '
                >
                  <h1 className='inline font-bold'>{`${course.number}: `}</h1>
                  <p className='inline text-gray-400'>{` ${course.title}`}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

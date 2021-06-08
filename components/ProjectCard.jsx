import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <Link href='https://toursbook.netlify.app/' className='mt-10'>
      <>
        <Image
          src={require("../assets/projects/natours.png")}
          height={80}
          width={130}
          layout='responsive'
          className='w-10/12'
        />
        <h1 className='text-2xl mt-2'>Natours</h1>
        <h1 className='text-lg text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed
          ducimus asperiores, iure sapiente odio aut odit nulla et vel quod
          minus illo? Corporis, in.
        </h1>
      </>
    </Link>
  );
};

export default ProjectCard;

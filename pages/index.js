import React from "react";
import Head from "next/head";

import backgroundImage from "../assets/svg/background.svg";
import { socialLinks } from "../data/personal/socialLinks";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dhruvil Gajjar</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div
          className='flex'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className='flex flex-col justify-center items-center h-screen xl:w-5/6 xl:ml-1.6'>
            <div className='text-4xl text-center font-[nunito-sans] md:flex xl:text-5xl'>
              <h1 className='md:mr-2'>Hi, I am</h1>
              <h1 className='text-blue-500 text-opacity-100 font-bold'>
                Dhruvil Gajjar
              </h1>
            </div>

            <p className='w-10/12 text-center font-mono mt-5 text-gray-300 xl:text-xl xl:w-9/12'>
              As a passionate Web & Cross platform mobile application developer,
              I always prefer to build things or challenging projects. I have
              been focusing on clean coding and morden, elegant mobile app &
              user-friendly website design.
            </p>

            <div className='mt-5 flex  w-6/12 justify-around xl:w-1/5'>
              {socialLinks.map((link) => (
                <div className='border-gray-400 border rounded-full py-2 px-2 flex justify-center items-center cursor-pointer'>
                  {link.Icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import React, { useState } from "react";
import Head from "next/head";

import BackgroundEffect from "../components/BackgroundEffect";
import MobileDrawer from "../components/MobileDrawer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <BackgroundEffect /> */}
      <main className='relative'>
        <MobileDrawer />

        <div className='flex flex-col justify-center items-center h-screen'>
          <div className='text-4xl text-center font-[nunito-sans] md:flex'>
            <h1 className='md:mr-2'>Hi, I am</h1>
            <h1 className='text-blue-500 text-opacity-100 font-bold'>
              Dhruvil Gajjar
            </h1>
          </div>

          <p className='w-10/12 text-justify font-mono mt-5'>
            As a passionate Web & Cross platform mobile application developer, I
            always prefer to build things or challenging projects. I have been
            focusing on clean coding and morden, elegant mobile app &
            user-friendly website design.
          </p>
        </div>
      </main>
    </div>
  );
}

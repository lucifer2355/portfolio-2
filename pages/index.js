import React, { useState } from "react";
import Head from "next/head";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Header from "../components/Header";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='relative'>
        <Header
          open={isDrawerOpen}
          drawerToggle={() => setIsDrawerOpen((preState) => !preState)}
          drawerHandler={
            <div className='absolute right-5 mt-5 cursor-pointer'>
              {!isDrawerOpen ? (
                <MenuIcon className='h-8 xl:hidden' />
              ) : (
                <XIcon className='h-8 xl:hidden' />
              )}
            </div>
          }
        />

        <div className='flex justify-center items-center h-screen'>
          <div className='text-4xl text-center font-[nunito-sans]'>
            <h1>Hi, I am</h1>
            <h1 className='text-[##047FFF]'>Dhruvil Gajjar</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

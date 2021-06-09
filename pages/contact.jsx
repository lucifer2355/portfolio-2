import React from "react";
import TextField from "@material-ui/core/TextField";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";

const contact = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-1 mb-10'>
        <Title title='CONTACT ME' />

        <div className='mt-10'>
          <h1 className='text-2xl font-extralight'>Get In Touch</h1>

          <div>
            <TextField
              id='outlined-basic'
              label='Outlined'
              variant='outlined'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;

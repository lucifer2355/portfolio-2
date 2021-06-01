import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";

const about = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-10'>
        <Title title='ABOUT ME' />
      </div>
    </>
  );
};

export default about;

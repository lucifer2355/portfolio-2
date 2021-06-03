import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";

const resume = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-16'>
        <Title title='MY SKILL' />
      </div>
    </>
  );
};

export default resume;

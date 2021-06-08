import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";

const contact = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-1 mb-10'>
        <Title title='CONTACT ME' />
      </div>
    </>
  );
};

export default contact;

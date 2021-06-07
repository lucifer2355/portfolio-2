import React from "react";

import MobileDrawer from "../components/MobileDrawer";
import Title from "../components/Title";

const portfolio = () => {
  return (
    <>
      <MobileDrawer />
      <div className='pl-4 pr-4 pt-1 mb-10'>
        <Title title='PORTFOLIOS' />
      </div>
    </>
  );
};

export default portfolio;

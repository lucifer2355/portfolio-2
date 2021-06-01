import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Header from "../components/Header";

const MobileDrawer = () => {
  const [isDrawerOpen, setIsDrawer] = useState(false);

  return (
    <header>
      <Header
        open={isDrawerOpen}
        drawerToggle={() => setIsDrawer((preState) => !preState)}
        drawerHandler={
          <div className='absolute right-5 mt-5 cursor-pointer z-100'>
            {!isDrawerOpen ? (
              <MenuIcon className='h-8 xl:hidden' />
            ) : (
              <XIcon className='h-8 xl:hidden' />
            )}
          </div>
        }
      />
    </header>
  );
};

export default MobileDrawer;

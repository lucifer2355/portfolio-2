import React from "react";
import Image from "next/image";
import Drawer from "rc-drawer";

const Header = () => {
  return (
    <Drawer open={true}>
      <div>
        <Image
          layout='fixed'
          src={require("../assets/images/me.png")}
          height={130}
          width={130}
          className='rounded-full overflow-hidden'
        />
      </div>

      <div className='font-nunito'>
        <p>Home</p>
        <p>About</p>
        <p>Resume</p>
        <p>Portfolios</p>
        <p>Contact</p>
      </div>
    </Drawer>
  );
};

export default Header;

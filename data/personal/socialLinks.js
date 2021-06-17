import Image from "next/image";

import facebookIcon from "../../assets/svg/social/facebook.svg";
import instagramIcon from "../../assets/svg/social/instagram.svg";
import githubIcon from "../../assets/svg/social/github.svg";
import linkedinIcon from "../../assets/svg/social/linkedin.svg";
import twitterIcon from "../../assets/svg/social/twitter.svg";
import { MailIcon } from "@heroicons/react/outline";

export const socialLinks = [
  {
    Icon: (
      <Image
        src={githubIcon}
        height={19}
        width={19}
        onClick={() => window.open("https://github.com/lucifer2355")}
      />
    ),
  },
  {
    Icon: (
      <Image
        src={linkedinIcon}
        height={19}
        width={19}
        onClick={() =>
          window.open("https://www.linkedin.com/in/dhruvil-gajjar/")
        }
      />
    ),
  },
  {
    Icon: (
      <Image
        src={instagramIcon}
        height={19}
        width={19}
        onClick={() => window.open("https://www.instagram.com/lucifer_2355/")}
      />
    ),
  },
  {
    Icon: (
      <Image
        src={facebookIcon}
        height={19}
        width={19}
        onClick={() =>
          window.open("https://www.facebook.com/dhruvil.gajjar.505/")
        }
      />
    ),
  },
  {
    Icon: (
      <Image
        src={twitterIcon}
        height={19}
        width={19}
        onClick={() => window.open("https://twitter.com/lucifer2355")}
      />
    ),
  },
];

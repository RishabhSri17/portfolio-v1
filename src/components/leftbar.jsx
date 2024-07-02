import React from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiCodeforces, SiCodechef } from "react-icons/si";

const LeftBar = () => {
  return (
    <div className="fixed h-full top-[414px] pl-4">
      <div className="flex flex-col items-center space-y-[50px]">
        <div className="flex flex-col space-y-4 text-3xl text-customTeal">
          <a href="https://github.com/RishabhSri17"><FaGithub /></a>
          <a href="https://codeforces.com/profile/rishabh_sri17"><SiCodeforces /></a>
          <a href="https://www.codechef.com/users/rishabhsri17"><SiCodechef /></a>
          <a href="https://www.linkedin.com/in/rishabhsrivastava17/"><FaLinkedin /></a>
          <a href="https://www.instagram.com/rishabh_sri17/"><FaInstagram /></a>
        </div>
        <div>
          <hr className="w-[100px] border-t-2 border-customGray rotate-90" />
        </div>
      </div>
    </div>
  )
};

export default LeftBar;

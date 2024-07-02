import React from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiCodeforces, SiCodechef } from "react-icons/si";
import { FaCodeFork } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-10 mb-8 mt-8 items-center flex flex-col space-y-4 ml-8">
      <div className="flex flex-row items-center justify-center space-x-4 text-3xl text-customGray md:hidden">
        <a className="hover:px-2 hover:text-customTeal" href="https://github.com/RishabhSri17"><FaGithub /></a>
        <a className="hover:px-2 hover:text-customTeal" href="https://codeforces.com/profile/rishabh_sri17"><SiCodeforces /></a>
        <a className="hover:px-2 hover:text-customTeal" href="https://www.codechef.com/users/rishabhsri17"><SiCodechef /></a>
        <a className="hover:px-2 hover:text-customTeal" href="https://www.linkedin.com/in/rishabhsrivastava17/"><FaLinkedin /></a>
        <a className="hover:px-2 hover:text-customTeal" href="https://www.instagram.com/rishabh_sri17/"><FaInstagram /></a>
      </div>
      <div className="text-customLightBlue flex flex-col items-center space-y-2 ">
        <p className="hover:text-customTeal">Designed by Brittany Chiang</p>
        <p className="hover:text-customTeal">Built by Rishabh Srivastava</p>
        <a className="hover:text-customTeal" href="https://github.com/RishabhSri17/portfolio-v1"><FaCodeFork /></a>

      </div>

    </div>
  )
};

export default Footer;

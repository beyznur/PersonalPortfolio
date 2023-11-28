import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col  relative bottom-[100px] text-primary lg:hidden">
      <div className="flex justify-center flex-row  bottom-[190px] gap-10 ">
        {socialLinks.map(({ icon, link, label }) => (
          <a key={label} href={link} target="_blank">
            <FontAwesomeIcon icon={icon} size="2x" />
          </a>
        ))}
      </div>
      <a
        href="https://github.com/beyznur"
        target="_blank"
        className="text-white text-center relative top-20 ">
        Built by: @beyznurr
      </a>
    </footer>
  );
};

export default Footer;

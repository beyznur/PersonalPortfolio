import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../constants";

const FixedLink = () => {
  return (
    <div className="flex-col hidden lg:block">
      <ul className="fixed bottom-[50px] left-[30px] gap-5 z-30 flex flex-col text-primary">
        {socialLinks.map(({ icon, link, label }) => (
          <li
            key={label}
            className="transform hover:scale-110 transition-transform duration-300">
            <a href={link} target="_blank">
              <FontAwesomeIcon
                icon={icon}
                size="2x"
                className="hover:text-white"
              />
            </a>
          </li>
        ))}
      </ul>
      <hr className="h-10 border-l-2 fixed left-11 bottom-0 rounded-lg text-white" />
      <div className="">
        <hr className="h-10 border-r-2 fixed right-10 bottom-0 rounded-lg flex text-white" />
        <a
          href="mailto:beyzanur.balci00@gmail.com"
          className="hover:scale-105 transition-transform duration-300 fixed text-white transform rotate-90 mb-9 mr-[-32px] text-[15px] bottom-[110px] right-[-23px] z-30 hover:text-white">
          beyzanur.balci00@gmail.com
        </a>
      </div>
    </div>
  );
};

export default FixedLink;

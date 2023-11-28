import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../constants";

import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`${
      scrolled ? "bg-secondary bg-opacity-10 backdrop-blur-lg " : "bg-transparent"
    }  w-full centered py-4 fixed top-0 z-20 `}>
      <div className="w-4/5 flex justify-between items-center  ">
        <Link
          to="top" 
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        ></Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 mr-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-primary" : "text-tertiary"
              } 
              hover:text-primary text-[18px] font-medium cursor-pointer font-montserrat`} 
            >
              <Link
                to={nav.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </Link>
  
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={isMenuOpen ? close : menu}
            alt="menu"
            className="w-[30px] h-[30px] object-contain"
            onClick={() => setMenuOpen(!isMenuOpen)}
          />

          <div
            className={`${
              !isMenuOpen ? "hidden" : "flex"
            } p-6 bg-secondary bg-opacity-90 backdrop-blur-lg absolute top-20 right-10 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-primary" : "text-tertiary"
                  } 
                  hover:text-primary text-[18px] font-medium cursor-pointer font-montserrat`}
                  
                  onClick={() => {
                    setMenuOpen(!isMenuOpen);
                    setActive(nav.title);
                  }}
                >
                  <Link
                    to={nav.id}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setActive(nav.title)}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="myName" className={`${
          scrolled ? "visible" : "hidden"
        } fixed top-0 z-30 bg-transparent py-4 font-montserrat   text-tertiary hover:cursor-pointer`}
        onClick={() => { scrollToTop(); setActive(""); }}>
          <b>Beyzanur BALCI</b>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

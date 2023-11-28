import React from "react";
import Technology from "./Technology";
import { Link } from "react-scroll";
import { Slide } from "react-awesome-reveal";
import {
  frontendTechnologies,
  backendTechnologies,
  mobileAppTechnologies,
} from "../constants";

const techList = (title, techArray) => (
  <div>
    <span className="block mb-3 text-tertiary "><b>{title}</b></span>
    <ul className="list-disc flex flex-col ml-5 ">
      {techArray.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
  </div>
);

const About = () => {
  return (
  
    <div
      id="about"
      className=" lg:w-4/5 lg:m-auto m-5 flex lg:flex-row flex-col lg:my-[100px] ">
      <div className=" w-full flex flex-col ">
        <Slide direction="left">
          <div className="flex w-[350px] flex-row">
            <h1 className="text-primary text-3xl font-bold lg:my-5 mt-20 mb-5 ">
              About Me
            </h1>
            <div className="flex-grow border-t-2 border-secondary mt-[95px] lg:mt-10 ml-2 mr-10"></div>
          </div>

          <p className="lg:text-[20px] text-[16px]  text-primary text-justify text-size-14">
            Hello, I am a recent graduate in computer engineering. I am
            passionate about both web and mobile application development. My
            career goal is to be involved in projects that enhance user
            experience by leveraging the opportunities presented by technology.
            <br /> <br /> If you would like to get in touch or collaborate, feel
            free to reach out to me{" "}
            <b>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="">
                <span className="text-tertiary hover:underline cursor-pointer hover:text-secondary">
                  {" "}
                  here.
                </span>
              </Link>
            </b>{" "}
            I am eagerly looking forward to working together on creative
            projects!
            <br />
            <br />
          </p>
          <div className="flex flex-row justify-between text-white lg:text-[20px] text-[16px] text-bottom gap-5 text-size-14 ">
            {techList("Frontend Technologies", frontendTechnologies)}
            {techList("Backend Technologies", backendTechnologies)}
            {techList("Mobile App Technologies", mobileAppTechnologies)}
          </div>
        </Slide>
      </div>

      <div className="w-full mt-20 lg:m-auto lg:ml-20 hidden lg:block">
        <Slide direction="right">
          <Technology />
        </Slide>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { FaShare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";

const ProjectCard = ({project}) => {

  return (
    <div className="lg:mt-5 flex flex-col">
      <Zoom>
          <div
            className="centered flex-row lg:w-5/6 w-full m-auto ">
            <a
              href={project.url}
              target="_blank"
              className="h-[220px] w-1/2 xl:w-1/3 min-w-[300px]  bg-white rounded-xl  hidden lg:block ">
              <img
                className="object-fit w-full h-full rounded-xl "
                src={project.img}
                alt=""
              />
            </a>
            <div className=" lg:w-1/2 w-full ">
              <div className="mt-10">
                <div
                  className="lg:w-full lg:h-[200px] h-[210px] bg-gradient-to-t
         from-secondary to-gray-300 rounded-xl  flex flex-col lg:mx-10 text-white  ">
                  <span className="flex justify-end lg:text-[25px] text-[23px]  ">
                    {project.title}
                  </span>
                  <p className="text-justify lg:text-[19px] text-[16px] mt-[15px] mx-4  text-primary text-size-14">
                    {project.desc}
                  </p>
                </div>
              </div>

              <span className="text-[15px]  text-white lg:mr-[-35px] flex justify-end mt-[10px] ">
                {project.tech}
              </span>
              <a
                href={project.url}
                target="_blank"
                className="flex justify-end mt-[10px] lg:mr-[-35px]">
                <FaGithub className=" text-white mr-5 w-7 h-7" />
                <FaShare className=" text-white text-right w-7 h-7" />
              </a>
            </div>
          </div>
      </Zoom>
    </div>
  );
};

export default ProjectCard;

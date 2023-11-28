import React from "react";
import ProjectCard from "./ProjectCard";
import { Slide } from "react-awesome-reveal";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div id="projects" className="lg:w-4/5 lg:m-auto m-5 ">
      <Slide>
        <div className="flex w-[350px] lg:w-[450px] flex-row ">
          <h1 className="text-primary  text-3xl font-bold mb-5 mt-[80px]  ">
            Projects
          </h1>
          <div className="flex-grow border-t-2 border-secondary w-1/2 mt-[100px] ml-2 mr-20"></div>
        </div>
      </Slide>
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
};

export default Projects;

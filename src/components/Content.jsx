import React from "react";
import myImage from "../assets/photo.png";
import StarsCanvas from "./canvas/Stars";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Content = () => {
  return (
    <div
      id="home"
      className="relative z-0 lg:flex-row flex-col h-screen centered ">
      <div className=" w-1/2 centered lg:h-screen ">
       <StarsCanvas/>
        <motion.div
          initial="hidden"
          animate="show"
          variants={slideIn("left", "tween", 0.5, 1)}
          className="centered lg:h-screen w-[240px] lg:w-[300px] relative lg:top-10 top-[-30px] ">
          <svg
            className="img-blob z-[-99]"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <mask id="mask0" mask-type="alpha">
              <path
                fill="#000013"
                d="M9.19024 145.964C34.0253 79.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              <image
                className="w-96 translate-x-10 scale-110 relative z-99 "
                xlinkHref={myImage}
              />
            </g>
          </svg>
        </motion.div>
      </div>

      <div className=" w-full lg:w-1/2 flex flex-col lg:items-start items-center lg:top-20  ">
        <motion.div
          initial="hidden"
          animate="show"
          variants={slideIn("bottom", "tween", 0.5, 1)}
          className="lg:text-5xl text-3xl font-bold mb-2 text-white font-montserrat">
          BEYZANUR BALCI
        </motion.div>
        <p
          className=" relative 
            before:absolute before:inset-0 before:bg-gray-300
            before:animate-typewriter text-primary  lg:text-4xl text-2xl font-montserrat">
          Frontend Developer
        </p>
      </div>
   
    </div>
  );
};

export default Content;

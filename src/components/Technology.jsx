import React from "react";

import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";


const Technology = () => {
    return (
        <div className=' centered flex-wrap '>
          {technologies.map((technology) => (
            <div className='w-1/3 h-[70px] min-w-[70px] flex flex-wrapper mb-5 ' key={technology.name}>
              <BallCanvas icon={technology.icon}/>
            </div>
          ))}
        </div>
      );
};

export default Technology;

/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const WIP: React.FC = (): JSX.Element => {
  return (
    <div className=" gap-3  h-[80vh] w-full p-10 flex justify-center items-center ">
      <div className="text-white font-Inter text-thin flex flex-col gap-8">
        <h1 className="text-xl lg:text-4xl xl:text-5xl font-Inter text-white">
          Work in progress
        </h1>
        <p className="text-sm text-thin lg:text-base font-Inter w-full text-center ">
          I will be sharing the progress
          <a
            className="ml-1 hover:underline"
            href="https://twitter.com/francidellamora/status/1610747146512306192"
          >
            here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default WIP;

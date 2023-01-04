/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import ClickIcon from "../common/svgs/clickIcon";
import CoffeeIcon from "../common/svgs/coffeeIcon";

const pages: React.FC = (): JSX.Element => {
  return (
    <div className=" mt-[72px] flex justify-center items-center">
      <div className="grid gap-3 grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 h-[80vh] w-full p-20 ">
        <div className=" bg-gray-600/25  col-span-2 row-span-2 rounded flex justify-between items-center p-10 lg:p-20 ">
          <div className="text-white font-Orya flex flex-col gap-2 ">
            <h1 className=" text-5xl font-Orya text-white">Hi, Im Dellamora</h1>
            <p className=" text-lg font-Inter w-2/3 lg:w-4/5 text-justify">
              I have a passion for developing weird projects and tech that makes
              a positive impact on peopless lives.
            </p>
            <p className="text-lg font-Inter w-2/3 lg:w-4/5 text-justify">
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to use the form.
            </p>
            <a
              className="cursor-pointer font- text-3xl text-ellipsis text-white"
              href="mailto:francielle@dellamora.dev"
            >
              Contact me
            </a>
          </div>
          <img
            className="w-[200px] lg:w-[300px] rounded-full object-cover mr-4 shadow aspect-square"
            src="/assets/mePc.jpg"
            alt="avatar"
          />
        </div>
        <a
          href="https://www.buymeacoffee.com/dellamora"
          className=" group bg-gray-700/25 rounded flex flex-col items-center justify-center"
        >
          <CoffeeIcon className="group-hover:stroke-slate-500" />
          <h1 className="text-white font-Inter group-hover:text-slate-500">
            Buy me a coffee!
          </h1>
        </a>
        <div className="group bg-gray-800/25 rounded flex flex-col items-center justify-center">
          <ClickIcon className="group-hover:stroke-slate-500" />
          <h1 className="text-white font-Inter group-hover:text-slate-500 ">
            More About Me
          </h1>
        </div>
      </div>
    </div>
  );
};

export default pages;

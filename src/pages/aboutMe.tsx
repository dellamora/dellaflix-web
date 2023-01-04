/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import ClickIcon from "../common/svgs/clickIcon";
import CoffeeIcon from "../common/svgs/coffeeIcon";

const pages: React.FC = (): JSX.Element => {
  return (
    <div className=" mt-[72px] flex justify-center items-center">
      <div className="grid gap-3 grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 h-[80vh] w-full p-10  ">
        <div className=" bg-gray-600/25  col-span-2 row-span-2 gap-10 rounded flex justify-between items-center p-10 ">
          <div className="text-white font-Inter text-thin flex flex-col">
            <h1 className="text-xl lg:text-4xl xl:text-5xl font-Inter text-white">
              Hi, I&apos;m Dellamora
            </h1>
            <p className="text-sm text-thin lg:text-base font-Inter w-full  text-justify">
              My passion for computers began when I was a child and used my
              father&apos;s computer to play games. Over the years I learned how
              to create themes on the Tumblr platform and I consider it a
              milestone in my choice of profession, since I was messing around
              with HTML and CSS and got enchanted with the web universe.
              Currently, I have over 2 years of experience working in the
              software development industry, seeking efficiency in developing
              ideas and turning them into reality, bringing smart solutions to
              challenges and adversities.
            </p>
          </div>
          <img
            className="w-[150px] lg:w-[200px] xl:w-[300px] rounded-full object-cover shadow aspect-square"
            src="/assets/mePc.jpg"
            alt="avatar"
          />
        </div>
        <div className="group bg-gray-800/25 rounded flex flex-col items-center justify-center">
          <ClickIcon className="group-hover:stroke-slate-500" />
          <h1 className="text-white font-Inter group-hover:text-slate-500 ">
            My personal website
          </h1>
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
      </div>
    </div>
  );
};

export default pages;

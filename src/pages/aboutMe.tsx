/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */
//todo a card component com icon pequeno e esses dados ai 
const pages: React.FC = (): JSX.Element => {
  return (
    <div className="h-[80vh] flex justify-center items-center p-20 gap-10">
      <div></div>
      <div className="text-gray-500 font-Orya w-1/2"> 
      <h1 className=" text-3xl">Hi, I'm Dellamora</h1>
      <p className=" text-lg"> 
      I have a passion for developing and tech that makes a positive impact on people's lives.
      I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
      </p>
      <a className="cursor-pointer font-Orya text-3xl text-ellipsis text-white" href="mailto:francielle@dellamora.dev">Contact me</a>  
      </div>
      <div className="w-1/2 ">
      {/* <img src="/assets/pix.jpeg" className="   "/> */}
      </div>
    </div>
  );
};

export default pages;
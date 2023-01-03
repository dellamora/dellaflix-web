/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className=" bg-[#141414] text-gray-500  justify-start">
     <div className="container px-5 py-8   items-cente flex-col">
     <div className="flex ml-3 gap-4 text-white mb-2">
      <a  href="https://twitter.com/francidellamora">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href="https://www.instagram.com/francidellamora/">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/francielle-dellamora-3579301a1/">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
     </div>
     <p className=" font-Inter  mb-2">DellaFlix is not affiliated with Netflix or any other streaming service.</p>
     <p className="text-sm text-gray-500 ">© 2022 Dellamora —
      <a href="https://twitter.com/francidellamora" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@francidellamora</a>
      Big Thanks to <a href="https://twitter.com/yungbzz"> @yungbzz</a>
     </p>
     <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

    </span>
    </div>
    </footer>
  );
};

export default Footer;
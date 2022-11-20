/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Link from 'next/link';
import SearchInput from "./components/searchInput";

const Nav = ({showBg}:{showBg:boolean}): JSX.Element => {
  const pages = [
    {name: "Home", id: 1, href: "/" },
    {name: "About Me", id: 2, href: "/aboutMe"  },
  ]
  return (
    <div className={`${showBg ? "bg-[#141414] " : "bg-transparent"} transition-colors duration-500 fixed p-4 px-12  overflow-none z-10 w-[calc(100vw-5px)]`}>
     <div  className="flex relative bg-transparent w-full gap-7">
     <Link href="/">
        <img src="/assets/DellaFlixIcon.png" className="h-8 "  />
      </Link>
      <div className=" gap-3 relative flex text-xl items-center ">
        {pages.map(({ name,  id, href }) => (
          <a className="
            pl-0 px-2 
            text-sm font-Inter font-thin text-white
          " 
          key={id} 
          href={href} >
            {name}
          </a>
        ))}
      </div>
      <div></div>
      <SearchInput/>
     </div>
    </div>
  );
};

export default Nav;
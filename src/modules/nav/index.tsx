/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Link from 'next/link';
import SearchInput from "./components/searchInput";

const Nav: React.FC = (): JSX.Element => {
  const pages = [
    {name: "Home", id: 1, href: "/" },
    {name: "About Me", id: 2, href: "/aboutMe"  },
  ]
  return (
    <div className="fixed p-4 w-screen bg-transparent overflow-none ">
     <div  className="flex relative bg-transparent h-10 w-full gap-7">
     <Link href="/">
        <img src="/assets/DellaFlixIcon.png" className="h-10 p-1"  />
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
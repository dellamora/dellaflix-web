/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Link from 'next/link';
import SearchInput from "./components/searchInput";

const Nav: React.FC = (): JSX.Element => {
  const pages = [
    {name: "Home", id: 1, href: "/" },
    {name: "Search", id: 2, href: "/search"  },
    {name: "Buy me a coffee!", id: 3, href: "/payMeACoffee"  },
  ]
  return (
    <div className="flex fixed justify-between bg-transparentw-screen h-10 gap-3 ">
      <Link href="/">
        <img src="/assets/DellaFlixIcon.png" className="h-9 p-1"  />
      </Link>
      <div className=" gap-3 relative flex text-xl items-center ">
        {pages.map(({ name,  id, href }) => (
          <a className="pl-0 px-2 font-Frank" key={id} href={href} >
            {name}
          </a>
        ))}
      </div>
      <SearchInput/>
    </div>
  );
};

export default Nav;
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Footer from "../../modules/footer";
import Nav from "../../modules/nav";


const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="h-screen flex flex-col  bg-[#141414]">      
      <Nav/>
      <div className="grow ">{children}</div>
      <Footer/>
    </div>
  );
};

export default BaseLayout;
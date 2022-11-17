/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Nav from "../../modules/nav";


const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">      
      <Nav/>
      <div className="grow">{children}</div>
    </div>
  );
};

export default BaseLayout;
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Footer from "../../modules/footer";
import Nav from "../../modules/nav";
import { useInView } from "react-intersection-observer";

const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { ref, inView } = useInView({});
  return (
    <div className="h-screen flex flex-col  bg-[#141414]">
      <div id="modal-root" />
      <Nav showBg={!inView} />
      <div className="grow w-screen overflow-x-hidden">
        <div ref={ref} className=" h-[1px]" />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;

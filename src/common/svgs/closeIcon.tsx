/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Icon } from "../../domain/components";

/* import { Container } from "./styles"; */

const CloseIcon: Icon = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#fff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  );
};

export default CloseIcon;

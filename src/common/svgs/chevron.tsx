/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Icon } from "../../domain/components";

/* import { Container } from "./styles"; */

const ChevronIcon: Icon= ({width, className}): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    className={className}
    width={width} 
    viewBox="0 0 24 24" 
    stroke-width="1.5" 
    stroke="#2c3e50" 
    stroke-linecap="round" 
    stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export default ChevronIcon;
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Icon } from "../../domain/components";

/* import { Container } from "./styles"; */

const InfoIcon: Icon = ({className, width}): JSX.Element => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" 
   className={className} 
   width={width}
   viewBox="0 0 24 24" 
   stroke-width="1.5" 
   stroke="#2c3e50" 
   fill="none" 
   stroke-linecap="round" 
   stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
   <circle cx="12" cy="12" r="9" />
   <line x1="12" y1="8" x2="12.01" y2="8" />
  <polyline points="11 12 12 12 12 16 13 16" />
  </svg>
  );
};

export default InfoIcon;
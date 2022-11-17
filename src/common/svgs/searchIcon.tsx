/* eslint-disable @typescript-eslint/no-unused-vars */
import {Icon} from "../../domain/components/icon"
import React from "react";

/* import { Container } from "./styles"; */

const SearchIcon: Icon = ({onClick, width, fill}): JSX.Element => {
  return (
    <div className="flex items-center justify-center" onClick={onClick}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="icon icon-tabler icon-tabler-search"
        width={width || "24"} 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke={fill || "#2c3e50" } 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="10" cy="10" r="7" fill="none" />
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>
    </div>
  );
};

export default SearchIcon;
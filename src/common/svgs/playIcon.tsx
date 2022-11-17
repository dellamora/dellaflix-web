
import React from "react";
import { Icon } from "../../domain/components";

const PlayIcon: Icon = ({width }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    width={width}
    viewBox="0 0 24 24" 
    stroke-width="1.5" 
    stroke-linecap="round" 
    stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 4v16l13 -8z" />
    </svg>
  );
};

export default PlayIcon;
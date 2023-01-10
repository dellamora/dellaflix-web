/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Icon } from "../../domain/components";

const ChevronIcon: Icon<{ direction?: "down" | "up" }> = ({
  width,
  className,
  onClick,
  direction = "down",
}): JSX.Element => {
  return (
    <div onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "down" ? (
          <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="6 9 12 15 18 9" />
          </>
        ) : (
          <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="6 15 12 9 18 15" />
          </>
        )}
      </svg>
    </div>
  );
};

export default ChevronIcon;

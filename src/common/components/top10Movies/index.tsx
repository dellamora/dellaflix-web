/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import One from "../../svgs/one";
import Three from "../../svgs/three";
import Seven from "../../svgs/seven";
import Two from "../../svgs/two";
import Four from "../../svgs/four";
import Five from "../../svgs/five";
import Six from "../../svgs/six";
import Eight from "../../svgs/eight";
import Nine from "../../svgs/nine";
import Ten from "../../svgs/ten";

const numbers = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten];

const Top10Movies: React.FC = (): JSX.Element => {
  return (
    <div className="flex">
      {numbers.map((Number, i) => {
        return (
          <div key={`number-${i}`} className="flex">
            <Number />
            <div className="h-[180px] w-[130px] bg-teal-500">poster</div>
          </div>
        );
      })}
    </div>
  );
};

export default Top10Movies;

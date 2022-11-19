/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import InfoIcon from "../../common/svgs/infoIcon";
import PlayIcon from "../../common/svgs/playIcon";

    // h-[130px] md:h-[320px] lg:h-[400px] xl:h-[560px] 2xl:h-screen 
     // mobile first 

const Hero: React.FC = (): JSX.Element => {
  return (
    <div 
    className="
    relative
    bg-cover bg-center
    overflow-hidden w-screen"
    >
    <img src="/assets/justinLindo.jpg" className="object-cover w-screen" />
    <div className="absolute bottom-[10%] lg:bottom-[30%]  left-[4%] w-2/3 lg:w-1/3">
    <h1 className="font-Orya text-white text-4xl font-bold uppercase pb-4"> Justin Bieber: Our World</h1>
    <h1 className="font-Inter text-white font-bold pb-4"> #1 in Movies of All Time  </h1>
    <p className="text-white font-medium text-sm pb-4">
        Justin Bieber: Our World takes viewers backstage and into the private world of the global superstar as he prepares for his NYE 2020 concert. 
    </p>
     <button 
       className='
      bg-white hover:bg-gray-300 text-gray-800 
        font-Inter 
        font-semibold
        py-[0.5rem] pl-3 pr-4
        text-sm
        rounded 
        h-fit
        inline-flex 
        items-center
        mr-2'
    >
        <PlayIcon width='22px' className="mr-2" /> Play
      </button>
      <button 
        className='
        bg-slate-500/75 hover:bg-slate-500/50 text-white 
        font-Inter 
        font-semibold
        py-[0.5rem] px-4
        text-sm
        rounded 
        h-fit
        inline-flex 
        items-center'
      >
      <InfoIcon 
      width='22px' 
      className='stroke-white group-hover:stroke-slate-50 transition-colors mr-2'
      />
      More Info
      </button>

        </div>
     
    </div>
  );
};

export default Hero;
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Carousel: React.FC<{
  children: React.ReactNode;
  category?: string;
  onActiveChange?: (index: number) => void;
}> = ({ children, category, onActiveChange }): JSX.Element => {
  return (
    <div className="relative z-20 h-auto w-auto m-8 overflow-x-visible">
      <h1 className=" text-white text-2xl font-semibold mb-3 ml-20 ">
        {category}
      </h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={swiper => {
          onActiveChange?.(swiper.activeIndex);
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;

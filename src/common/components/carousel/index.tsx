/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Carousel: React.FC<{ children: React.ReactNode; category?: string }> = ({
  children,
  category,
}): JSX.Element => {
  return (
    <div className="relative z-40 mb-8">
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
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;

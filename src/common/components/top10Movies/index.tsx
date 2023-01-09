/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef, useState } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const numbers = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten];

const Top10Movies: React.FC = (): JSX.Element => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <h1 className=" text-white text-2xl font-semibold mb-3 ml-20 ">
        Top 10 Movies in Brazil Today
      </h1>
      <div className="flex ">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={5}
          centeredSlides={false}
          spaceBetween={30}
          slidesPerGroup={5}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="SwiperTopTen"
        >
          {numbers.map((Number, i) => {
            return (
              <SwiperSlide
                key={`number-${i}`}
                className="flex "
                style={{
                  marginLeft: i === 0 ? "90px" : "0px",
                }}
              >
                <Number />
                <div className="h-[180px] w-[130px] bg-teal-500">poster</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Top10Movies;

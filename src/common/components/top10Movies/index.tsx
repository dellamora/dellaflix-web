/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef, useState } from "react";
import One from "../../svgs/numbers/one";
import Three from "../../svgs/numbers/three";
import Seven from "../../svgs/numbers/seven";
import Two from "../../svgs/numbers/two";
import Four from "../../svgs/numbers/four";
import Five from "../../svgs/numbers/five";
import Six from "../../svgs/numbers/six";
import Eight from "../../svgs/numbers/eight";
import Nine from "../../svgs/numbers/nine";
import Ten from "../../svgs/numbers/ten";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const numbers = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten];

const Top10Movies: React.FC = (): JSX.Element => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
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
                  marginLeft: i === 0 ? "20px" : "0px",
                  marginRight: i === 5 ? "20px" : "0px",
                }}
              >
                <Number />
                <div className="h-[180px] w-[130px] -ml-2 bg-teal-500">
                  poster
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Top10Movies;

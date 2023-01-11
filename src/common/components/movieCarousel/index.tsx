/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useMemo, useState } from "react";
import Carousel from "../carousel";
import { SwiperSlide } from "swiper/react";
import MovieCard from "../movieCard";
import { useMovieByGenre } from "../../hooks/useMovieByGenre";

const MovieCarousel: React.FC<{ category: string }> = ({
  category,
}): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const movies = useMovieByGenre(category);
  const isLoading = useMemo(() => {
    return movies.isLoading;
  }, [movies.isLoading]);

  if (isLoading) {
    return <></>;
  }

  return (
    <Carousel
      category={category}
      onActiveChange={index => {
        setActiveIndex(index);
        console.log(index);
      }}
    >
      {movies.data.results.map((movie, i) => {
        return (
          <SwiperSlide key={`MovieCard-${i}`}>
            <MovieCard
              movie={movie}
              position={
                activeIndex === i + 1
                  ? "right"
                  : activeIndex === i + 5
                  ? "left"
                  : "middle"
              }
            />
          </SwiperSlide>
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;

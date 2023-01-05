import { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import MovieCard from "../common/components/movieCard";
import Hero from "../modules/hero/intex";
import { BaseSearchResponse, MovieSearch } from "../domain/interfaces";
import Carousel from "../common/components/carousel";
import { SwiperSlide } from "swiper/react";
import Top10Movies from "../common/components/top10Movies";
import CardHover from "../common/components/movieCard/cardHover";

const queryClient = new QueryClient();

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { isLoading, error, data } = useQuery<
    BaseSearchResponse<MovieSearch[]>
  >({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:4000/movie/getPopularMovies").then(res =>
        res.json(),
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  return (
    <>
      <Hero />
      <Carousel category="Popular on Dellaflix" onActiveChange={setActiveIndex}>
        {data.data.map((movie, i) => {
          return (
            <SwiperSlide key={`MovieCard-${i}`}>
              <MovieCard
                movie={movie}
                isFirst={i === 0}
                position={
                  activeIndex === i
                    ? "left"
                    : activeIndex === i + 4
                    ? "right"
                    : "middle"
                }
              />
            </SwiperSlide>
          );
        })}
      </Carousel>
      <Top10Movies />
      <Carousel category="New Releases">
        {data.data.map((movie, i) => {
          return (
            <SwiperSlide key={`MovieCard-${i}`}>
              <MovieCard movie={movie} isFirst={i === 0} />
            </SwiperSlide>
          );
        })}
      </Carousel>
      <Carousel category="Anime">
        {data.data.map((movie, i) => {
          return (
            <SwiperSlide key={`MovieCard-${i}`}>
              <MovieCard movie={movie} isFirst={i === 0} />
            </SwiperSlide>
          );
        })}
      </Carousel>
      <Carousel category="Top Searches">
        {data.data.map((movie, i) => {
          return (
            <SwiperSlide key={`MovieCard-${i}`}>
              <MovieCard movie={movie} isFirst={i === 0} />
            </SwiperSlide>
          );
        })}
      </Carousel>
      <Carousel category="Romantic">
        {data.data.map((movie, i) => {
          return (
            <SwiperSlide key={`MovieCard-${i}`}>
              <MovieCard movie={movie} isFirst={i === 0} />
            </SwiperSlide>
          );
        })}
      </Carousel>
      <Carousel category="Terror">
        {data.data.map((movie, i) => {
          return (
            <SwiperSlide key={`MovieCard-${i}`}>
              <MovieCard movie={movie} isFirst={i === 0} />
            </SwiperSlide>
          );
        })}
      </Carousel>
    </>
  );
}

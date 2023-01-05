import { useEffect } from "react";
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

const queryClient = new QueryClient();

export default function Home() {
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
      <Carousel category="Popular on Dellaflix">
        {data.data.map((movie, i) => {
          return (
            <SwiperSlide key={`MovieCard-${i}`}>
              <MovieCard movie={movie} isFirst={i === 0} />
            </SwiperSlide>
          );
        })}
      </Carousel>
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
    </>
  );
}

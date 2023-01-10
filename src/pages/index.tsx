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
      <div className="flex flex-col-reverse">
        <Carousel
          category="Outro Exemplo"
          onActiveChange={index => {
            setActiveIndex(index);
            console.log(index);
          }}
        >
          {data.data.map((movie, i) => {
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
        <Top10Movies movies={data.data} />
        <Carousel
          category="Exemplo"
          onActiveChange={index => {
            setActiveIndex(index);
            console.log(index);
          }}
        >
          {data.data.map((movie, i) => {
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
        <Carousel
          category="Popular On Dellaflix"
          onActiveChange={index => {
            setActiveIndex(index);
            console.log(index);
          }}
        >
          {data.data.map((movie, i) => {
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
      </div>
    </>
  );
}

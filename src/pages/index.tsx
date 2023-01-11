import { useEffect, useMemo, useState } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import MovieCard from "../common/components/movieCard";
import Hero from "../modules/hero/intex";
import { BaseSearchResponse, MovieSearch } from "../domain/interfaces";
import Carousel from "../common/components/carousel";
import { SwiperSlide } from "swiper/react";
import Top10Movies from "../common/components/top10Movies";
import { useMovieByGenre } from "../common/hooks/useMovieByGenre";
import MovieCarousel from "../common/components/movieCarousel";
const queryClient = new QueryClient();

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    isLoading: baseLoading,
    error,
    data,
  } = useQuery<{ data: BaseSearchResponse<MovieSearch[]> }>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:4000/movie/getPopularMovies").then(res =>
        res.json(),
      ),
  });
  const animationMovies = useMovieByGenre("Animation");
  const isLoading = useMemo(() => {
    return baseLoading || animationMovies.isLoading;
  }, [baseLoading, animationMovies.isLoading]);
  console.log(animationMovies);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";
  return (
    <>
      <Hero />
      <div className="flex flex-col-reverse">
        <MovieCarousel category="Comedy" />
        <MovieCarousel category="Mystery" />
        <MovieCarousel category="Animation" />
        <Top10Movies
          category="Top 10 Movies Popular On Dellaflix"
          movies={data.data.results}
        />
        <MovieCarousel category="Fantasy" />
      </div>
    </>
  );
}

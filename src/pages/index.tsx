import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Hero from "../modules/hero/intex";
import { BaseSearchResponse, MovieSearch } from "../domain/interfaces";
import Top10Movies from "../common/components/top10Movies";
import MovieCarousel from "../common/components/movieCarousel";

export default function Home() {
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
  const isLoading = useMemo(() => {
    return baseLoading;
  }, [baseLoading]);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";
  return (
    <>
      <Hero />
      <div className="flex flex-col-reverse">
        <MovieCarousel category="Horror" />
        <MovieCarousel category="Drama" />
        <MovieCarousel category="Animation" />
        <Top10Movies
          category="Top 10 Movies Popular On Dellaflix"
          movies={data.data.results}
        />
        <MovieCarousel category="Crime" />
      </div>
    </>
  );
}

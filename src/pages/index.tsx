// import { useEffect } from "react";
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from "@tanstack/react-query";
// import MovieCard from "../common/components/movieCard";
// import Hero from "../modules/hero/intex";
// import { BaseSearchResponse, MovieSearch } from "../domain/interfaces";

import WIP from "../modules/WIP";

// const queryClient = new QueryClient();

export default function Home() {
  // const { isLoading, error, data } = useQuery<
  //   BaseSearchResponse<MovieSearch[]>
  // >({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetch("http://localhost:4000/movie/getPopularMovies").then(res =>
  //       res.json(),
  //     ),
  // });

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: ";

  return (
    <>
      <WIP />
      {/* <Hero />
        /* {data.data.map((movie, i) => {
        // eslint-disable-next-line react/jsx-key
        return <MovieCard movie={movie} isFirst={i === 0} />;
      })} */}
    </>
  );
}

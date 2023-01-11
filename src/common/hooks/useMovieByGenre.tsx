/* eslint-disable @typescript-eslint/no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BaseSearchResponse, MovieSearch } from "../../domain/interfaces";

export const useMovieByGenre = (genre: string) => {
  const { isLoading, error, data } = useQuery<{
    data: BaseSearchResponse<MovieSearch[]>;
  }>({
    queryKey: [`genre-${genre}`],
    queryFn: () =>
      fetch(`http://localhost:4000/movie/getMovieByGenre?genre=${genre}`).then(
        res => res.json(),
      ),
  });
  console.log({ data });
  return { isLoading, error, data: data?.data };
};

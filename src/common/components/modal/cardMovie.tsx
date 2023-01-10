/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { MovieSearch } from "../../../domain/interfaces";
import Image from "next/image";

type Props = {
  movie?: Pick<
    MovieSearch,
    | "title"
    | "poster_path"
    | "genre_ids"
    | "backdrop_path"
    | "adult"
    | "overview"
  >;
};

const CardModal = ({ movie }: Props): JSX.Element => {
  return (
    <div className="h-[360px] w-60 bg-[#2F2F2F] rounded overflow-hidden text-white ">
      <div className="relative aspect-video w-full">
        <Image
          className="object-cover"
          alt="movie image"
          fill
          src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${movie.backdrop_path}`}
        />
        <h1 className="absolute top-1 right-1 text-white font-semibold">
          2h 30m
        </h1>
        <h1 className="z-20 absolute bottom-2 left-2 text-white font-semibold">
          {movie.title}
        </h1>
      </div>
      <div className="p-4 ">
        <div className="font-semibold flex gap-x-2 text-base">
          <h1>AGE</h1>
          <h1>2022</h1>
        </div>
        <p className="mt-4 text-xs text-gray-300 font-semibold">
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default CardModal;

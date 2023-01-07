import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { MovieSearch } from "../../../domain/interfaces";
import CardHover from "./cardHover";

type Props = {
  movie: Pick<
    MovieSearch,
    "title" | "poster_path" | "genre_ids" | "backdrop_path" | "adult"
  >;
  position?: "left" | "middle" | "right";
};

const MovieCard = ({ movie, position }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div className="relative w-[285px]  group">
      <div
        className="relative aspect-video"
        onMouseEnter={() => setIsHover(true)}
      >
        <Image
          className="object-cover  rounded"
          alt="movie poster"
          fill
          src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${movie.backdrop_path}`}
        />
      </div>

      <CardHover
        movie={movie}
        onMouseLeave={() => setIsHover(false)}
        position={position}
      />
    </motion.div>
  );
};

export default MovieCard;

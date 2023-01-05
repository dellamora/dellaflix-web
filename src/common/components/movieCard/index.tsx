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
  isFirst?: boolean;
  position?: "left" | "middle" | "right";
};

const MovieCard = ({ movie, isFirst, position }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div className="relative w-[300px] rounded group">
      <div
        className="relative aspect-video  w-[300px]"
        onMouseEnter={() => setIsHover(true)}
      >
        <Image
          className="object-cover"
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

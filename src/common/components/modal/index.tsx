import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";
import Image from "next/image";
import { motion } from "framer-motion";
import { MovieSearch } from "../../../domain/interfaces";
import PlayIcon from "../../../common/svgs/playIcon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
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

const MovieModal = ({ isOpen, onClose, movie }: Props): JSX.Element => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <></>;
  }

  return createPortal(
    <>
      {isOpen && movie && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed z-40 w-screen h-screen overflow-y-hidden"
          >
            <div className="h-full w-full overflow-y-scroll">
              <div className="relative w-full h-fit flex justify-center">
                <Backdrop
                  onClose={() => {
                    onClose();
                  }}
                />
                <div className="max-w-3xl h-fit mt-8 flex justify-center bg-[#181818] rounded-lg overflow-hidden shadow-sm ">
                  <div className="relative">
                    <div className="relative aspect-video w-full">
                      <div className="absolute z-10 bottom-0 h-80 w-full bg-gradient-to-t from-[#181818] to-transparent" />
                      <Image
                        className="object-cover"
                        alt="movie image"
                        fill
                        src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${movie.backdrop_path}`}
                      />
                      <div className="z-20 absolute  bottom-20 ml-12 w-1/2">
                        <h1 className=" font-bold text-3xl  text-white text-bold mb-5">
                          {movie.title}
                        </h1>
                        <button className=" bg-white hover:bg-gray-300 text-black font-Inter font-semibold py-[0.5rem] px-6 text-base rounded h-fit inline-flex items-center mr-2">
                          <PlayIcon width="25px" className="mr-3" />
                          Play
                        </button>
                      </div>
                    </div>
                    <div className="p-4 space-y-6">
                      <div className="flex ">
                        <div className=" w-3/4 space-y-6">
                          <div className="flex gap-3 text-white">
                            <h1>year</h1>
                            <h1>age</h1>
                            <h1>time</h1>
                            <h1>year</h1>
                          </div>
                          <div>
                            <p className="text-white">{movie.overview}</p>
                          </div>
                        </div>
                        <div className=" text-white">
                          <h1>cast</h1>
                          <h1>generos</h1>
                          <h1>esse filme é</h1>
                        </div>
                      </div>

                      <div className=" text-white">
                        <h1>MORE LIKE THIS</h1>
                        <div className="h-48 w-48 bg-gray-700">cards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>,
    document.getElementById("modal-root"),
  );
};

export default MovieModal;

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";
import Image from "next/image";
import { motion } from "framer-motion";
import { MovieSearch } from "../../../domain/interfaces";

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
            className="flex fixed justify-center items-center z-50  h-screen  w-screen pointer-events-none"
          >
            <div className="relative flex flex-col pointer-events-auto bg-white rounded-lg w-full lg:max-w-xl lg:max-h-[90vh]  h-auto max-h-screen  md:w-3/5 overflow-y-hidden bg-primaryLight dark:bg-secondaryDark ">
              <div className="relative aspect-video shrink-0"></div>
              <div className="flex flex-col  p-4 overflow-y-auto grow pb-24">
                <h1 className="font-bold text-2xl md:text-title text-gray dark:text-whiteTextDarkMode text-bold mb-5">
                  {movie.title}
                </h1>
                <span className="font-Inter font-medium text-justify dark:text-grayLight">
                  {movie.overview}
                </span>
                <div className="flex flex-row  flex-wrap mt-5"></div>
              </div>
              <div className="flex justify-center absolute w-full pb-4 bottom-0 bg-gradient-to-t from-primary via-primary to-[rgba(0,0,0,0)] pt-14 dark:from-secondaryDark dark:via-secondaryDark "></div>
            </div>
          </motion.div>
          <Backdrop
            onClose={() => {
              onClose();
            }}
          />
        </>
      )}
    </>,
    document.getElementById("modal-root"),
  );
};

export default MovieModal;

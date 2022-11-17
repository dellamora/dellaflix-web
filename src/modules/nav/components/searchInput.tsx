/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: talvez divulgar só esse component
import React, { useState, useRef} from "react";
import SearchIcon from "../../../common/svgs/searchIcon";
import { useOnClickOutside } from "../../../common/hooks";
import { motion, AnimatePresence } from "framer-motion";


const SearchInput: React.FC = (): JSX.Element => {
  const [ isOpen, setIsOpen ] = useState(false)
  const divRef = useRef()

  useOnClickOutside(divRef, () => {setIsOpen(false)})

  return (
    <motion.div
    style={{
      transition: "border 0.5s",
    }}
    className={`flex absolute right-0 px-1 top-0 bottom-0 border ${isOpen ? " border-[#fff] " : "border-[#000]"}`}
    ref={divRef}
    >
     <SearchIcon width="24px" fill="#fff" onClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
      {isOpen &&   
        <motion.div 
        initial={{width: 0}}
        exit={{width:0}}
        animate={{width:"auto"}}
        transition={{duration: 0.5}}
        className="overflow-none"
        >
          <motion.input 
          initial={{opacity: 0}}
          exit={{opacity:0, transition:{duration: 0.15}}}
          animate={{opacity: 1, transition:{delay: 0.25} }}
          type="text"
          placeholder="Titles, people, genres" 
          autoFocus
          className="bg-transparent overflow-none focus:outline-none h-full text-white"/>
        </motion.div>
      }
       </AnimatePresence>
        
    </motion.div>
  );
};

export default SearchInput;
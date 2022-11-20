import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MovieSearch } from '../../../domain/interfaces'
import ChevronIcon from '../../svgs/chevron'
import PlayIcon from '../../svgs/playIcon'

type Props = {
  movie: Pick<MovieSearch, "title" | "poster_path" | "genre_ids" | "backdrop_path" | "adult">
  isFirst?: boolean,
}

const MovieCard = ({movie, isFirst}: Props) => {
  const [ isHover, setIsHover] = useState(false)

  return (
    <motion.div 
    className=' w-60 rounded overflow-hidden'
    whileHover="hover"
    whileTap="hover"
    initial="hide"
    variants={{
      hide:{zIndex: -10},
      hover:{scale: 1.2, transformOrigin: `${isFirst ? "left" : "center"}  center`, zIndex: 100}
    }}
    >
     <div className='relative aspect-video  w-60'>
      <Image 
      className='object-cover'
      alt="movie poster" 
      fill
      src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${movie.backdrop_path}`}/>
     </div>
     <motion.div 
      transition={{bounce: 0, duration: 0}}
      className='rouded bg-[#181818]'
      variants={{
        hide: {height: 0, padding: "calc(0 - 12px)"},
        hover: {height: "auto" }
      }}
     >
        <div className='p-3 '>
          <div className='flex justify-between '>
            <button className='px-0.5 rounded-full border-2 h-fit aspect-square bg-white items-center hover:bg-gray-200 hover:border-color-gray-200'>
              <PlayIcon width='18px' />
            </button>
            <button 
             className='group px-0.5 transition-colors items-center rounded-full border-2 border-neutral-500  h-fit aspect-square hover:border-white' > 
              <ChevronIcon width='18px' className='fill-none stroke-slate-500 group-hover:stroke-slate-50 transition-colors'/>
           </button>
          </div>
          <div className=' font-Inter text-gray-300'>
            <h1 className='font-bold'>{movie.title}</h1>
            <div className='flex gap-2'>
              <h1> idade do movie</h1>
              <h1>1h 30min</h1>
            </div>
            <div className='gap-3 flex'>
              {movie.genre_ids.map(cat => {
              return <h1 >{cat}</h1>
             })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>

  )
}

export default MovieCard
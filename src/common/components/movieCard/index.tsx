import Image from 'next/image'
import React, { useEffect } from 'react'
import { MovieSearch } from '../../../domain/interfaces'
import ChevronIcon from '../../svgs/chevron'
import PlayIcon from '../../svgs/playIcon'

type Props = {
  movie: Pick<MovieSearch, "title" | "poster_path" | "genre_ids">
}

const MovieCard = ({movie}: Props) => {

    

  return (
    <div className=' w-60 rounded overflow-hidden'>
     <div className='relative aspect-video  w-60'>
      <Image 
      className='object-cover'
      alt="movie poster" 
      fill
      src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"/>
     </div>
     <div className='rouded bg-[#181818] p-3'>
      <div className='flex justify-between'>
      <button className='px-0.5 rounded-full border-2 h-fit aspect-square bg-white items-center hover:bg-gray-200 hover:border-color-gray-200'>
        <PlayIcon width='18px' />
      </button>
      <button 
      className='group px-0.5 transition-colors items-center rounded-full border-2 border-neutral-500  h-fit aspect-square hover:border-white' > 
      <ChevronIcon width='18px' className=' stroke-slate-500 group-hover:stroke-slate-50 transition-colors'/>
      </button>
      </div>
      <div className=' font-Inter text-gray-300'>
        <h1 className='font-bold'>{movie.title}</h1>
        <div className='flex gap-2'>
        <h1>icon 18 anos</h1>
        <h1>1h 30min</h1>
        </div>
      <div className='gap-3 flex'>
      {movie.genre_ids.map(cat => {
        return (
          <h1 >{cat} </h1>
        )
      })}
      </div>

      </div>
     </div>
    </div>

  )
}

export default MovieCard
import axios from 'axios'
import { useEffect } from 'react'
import MovieCard from '../common/components/movieCard'
import Hero from '../modules/hero/intex'
import Nav from '../modules/nav'

export default function Home() {
    // useEffect(() => {
    //   const fetch = async () => {
    //     const result = await axios.get("http://localhost:4000/movie/getPopularMovies")
    //     console.log(result.data)
    //   }
    //   fetch()
    // }, [])
    
  return (
    <div>
     <Hero/>
     <MovieCard/>
     
    </div>
  )
}

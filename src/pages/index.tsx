import axios from 'axios'
import { useEffect } from 'react'
import MovieCard from '../common/components/movieCard'

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
     <MovieCard/>
    </div>
  )
}

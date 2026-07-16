import React from 'react'
import useTrendingMovies from '../hooks/useTrendingMovies'

export default function SpotifyPlaylists() {
    const {error , loading , data} = useTrendingMovies("https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY")
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Error:{error}</h1>
    }
  return (
    <div>
      {
        data.map((e)=>(
            <div key={e.id}>{e.id}-{e.title}</div>
        ))
      }
    </div>
  )
}

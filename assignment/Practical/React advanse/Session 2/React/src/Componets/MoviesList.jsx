import React from 'react'
import useTrendingMovies from '../hooks/useTrendingMovies'

export default function MoviesList() {
    const {data , error , loading} = useTrendingMovies()
    if(loading){
       return <h2>Loading...</h2>
    }
    if(error){
       return <h1>Error:{error}</h1>
    }
  return (
    <div>
        <h1>Trending movies</h1>
      {
        data.map((m)=>(
            <div key={m.id}>{m.id}-{m.title}</div>
        ))
      }
    </div>
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LiveClock from './Componets/LiveClock'
import MoviesList from './Componets/MoviesList'
import PostCord from './Componets/PostCord'
import SpotifyPlaylists from './Componets/SpotifyPlaylists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LiveClock/> 
      <MoviesList/>
      <PostCord/> 
      <SpotifyPlaylists/>
    </>
  )
}

export default App

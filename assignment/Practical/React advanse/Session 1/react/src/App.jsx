import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PlaylistCard from './Componets/PlaylistCard'

import Feed from './Componets/Feed'
import FlipkartProductList from './hook/FlipkartProductList'
import UserContext from "./Componets/UserContext";

function App() {
  const [count, setCount] = useState(0)
  const user = {
    name: "Vishal",
    isLoggedIn: true,
  };

  return (
    <>
      <h1>My Playlist</h1>

      <PlaylistCard
        song="Perfect"
        artist="ABC"/>

      <PlaylistCard
        song="Blinding Lights"
        artist="The Weeknd"/>

      <PlaylistCard
        song="Levitating"
        artist="XYZ"/>
     <FlipkartProductList />

     <UserContext.Provider value={user}>
      <Feed />
    </UserContext.Provider>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Componets/Navbar'

import PostCard from './Componets/PostCard'
import Feed from './Componets/Feed'
import ToggleThemeButton from './Componets/ToggleThemeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ToggleThemeButton/>
      <Feed/>
    </>
  )
}

export default App


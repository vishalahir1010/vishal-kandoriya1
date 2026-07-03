import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LikeButton from './Component/LikeButton'
import SearchBar from './Component/SearchBar'
import LoginForm from './Component/LoginForm'
import PlaylistAdder from './Component/PlaylistAdder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LikeButton/>
    <SearchBar/>  
    <LoginForm/>
    <PlaylistAdder/>
    </>
  )
}

export default App

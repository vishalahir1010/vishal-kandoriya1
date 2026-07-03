import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Movies from './Componets/Movies'
import AddPlaylist from './Componets/AddPlaylist'
import RestaurantSearch from './Componets/RestaurantSearch'
import AddComment from './Componets/AddComment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Movies/>
       <AddPlaylist/> 
      <RestaurantSearch/> 
      <AddComment/>
      
    </>
  )
}

export default App

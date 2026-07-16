import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Componets/Header'
import Restaurant from './Componets/Restaurant'
import Playlist from './Componets/Playlist'
import Profile from './Componets/Profile'
import Cart from './Componets/Cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
         <Restaurant id={101} name="Domino's" />
        <Restaurant id={102} name="Pizza Hut" />
        <Playlist/>
         <h1>Instagram Clone</h1>
        <Profile />
        <h1>Shopping Cart</h1>
        <Cart/>
    </>
  )
}

export default App

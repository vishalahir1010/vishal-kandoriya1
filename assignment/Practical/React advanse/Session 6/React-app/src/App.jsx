import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductList from './Componets/ProductList'
import PlaylistManager from './Componets/PlaylistManager'
import LargeList from './Componets/LargeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductList/>
    <hr />
    <hr />
    <PlaylistManager/>
    <hr />
    <hr />
    <LargeList/>
    </>
  )
}

export default App

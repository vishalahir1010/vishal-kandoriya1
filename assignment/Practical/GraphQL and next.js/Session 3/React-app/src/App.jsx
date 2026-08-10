import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RestaurantList from './components/RestaurantList'
import ProductList from './components/ProductList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Appolo clinet</h1>

      <RestaurantList/>
      <hr />
      <ProductList/>
       </>
  )
}

export default App

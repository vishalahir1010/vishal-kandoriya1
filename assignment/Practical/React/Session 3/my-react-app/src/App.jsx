import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './assets/Componets/Product'
import Userprofile from './assets/Componets/Userprofile'
import Defaultprops from './assets/Componets/defaultprops'
import ProductCard from './assets/Componets/ProductCard'


function App() {
  
  return (
    <>  
    <Product productName={"Wireless Mouse"} price={599} />
     <Product productName="Keyboard" price="999" />
     <Userprofile username={"Vishal"} followers={1000} profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1rcbJOICNHVkKXhbkT4Xh5VDM7LWX_t0fgmWYz4wVA&s=10"/>
      {/* <Userprofile username={"john_doe"} /> */}
      <ProductCard productName={"123"} price={5000} />

    </>
  )
}

export default App

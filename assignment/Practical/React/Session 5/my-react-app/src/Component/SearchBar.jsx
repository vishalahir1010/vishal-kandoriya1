import React, { useState } from 'react'

export default function SearchBar() {
    const [product , setproduct] = useState()
  return (
    <div>
      <h1>Flipkart search</h1>
      <input type="text"
      placeholder='Enter product name' 
      value={product}
      onChange={(e)=> setproduct(e.target.value)}/>
      <h3> product name: {product}</h3>
    </div>
  )
}

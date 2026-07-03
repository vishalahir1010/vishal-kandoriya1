import React,{ useState } from 'react'

export default function SearchBar() {
   const  [product , setproduct] = useState()
  return (
    <div>
      <h1>Search product</h1>

      <input type="text"
      placeholder='Enter your product'
      value={product} 
      onChange={(e) =>setproduct(e.target.value)}/>
      <p>sreach product name :{product}</p>
    </div>
    
  )
}

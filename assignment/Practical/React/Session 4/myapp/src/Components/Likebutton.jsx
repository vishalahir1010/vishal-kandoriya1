import React, { useState } from 'react'

export default function Likebutton() {
    const [count , setcount] = useState(0)

    const increment = () => {
        setcount(count +1)
    }
    
    const decrement = () => {
        if(count > 0){
        setcount(count - 1);
        }
    };
  return (
    <div >
      <h3>value: {count}</h3>
      <button onClick={increment} style={{margin:"10px"}}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

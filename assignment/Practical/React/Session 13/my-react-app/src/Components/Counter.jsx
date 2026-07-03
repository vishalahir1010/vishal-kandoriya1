import React, { useState } from 'react'

export default function Counter() {
    const [count ,setCount] = useState(0)
    if(count<1){}
    const increment = () => {
        setCount(count + 1);
    };
   
    const decrement = () => {
        setCount(count - 1);
        
    };
   
  return (
     <div>
        <div style={{margin:"20px", padding:"20px",border:"1px solid black"}}>
        <h2>Counter app</h2>
        <h3>value: {count}</h3>

        <button onClick={increment} style={{marginRight:10}}>+</button>
        <button onClick={decrement}>-</button>
        </div>
    </div>

  )
}

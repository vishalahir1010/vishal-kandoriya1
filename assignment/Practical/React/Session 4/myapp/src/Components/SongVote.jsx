import React, { useState } from 'react'

export default function SongVote() {
     const [count , setcount] = useState(0)

     const increment = () => {
        setcount(count + 1)
     }
     const decrement = () => {
        setcount(count - 1)
     }
  return (
    <div>
      <h1>Song vote</h1>
      <button onClick={increment} >▲</button>
       <span style={{padding:"10px"}}>{count}</span>
      <button onClick={decrement} >▼</button>
    </div>
  )
}


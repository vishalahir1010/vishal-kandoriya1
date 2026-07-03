import React, { useState } from 'react'

export default function Product() {
    const product = [
        {id:"1", name:"laptop", price:"55000"},
        {id:"2", name:"mouse", price:"50000"},
        {id:"3", name:"keybord", price:"65000"},
        {id:"4", name:"PC", price:"20000"}
    ]

    const [islogin,setislogin] = useState(false)

    const btnlogin = () => {
        setislogin(true)
    }
    const btnlogout = () => {
        setislogin(false)
    }
  return (
    <div>
         {islogin ? (
            <>
        <h1> Product List</h1>
        
        <ul>
            {product.map((p)=>(
                <li key={p.id}>{p.id}: {p.name} ${p.price}</li>
            ))}
        <button onClick={btnlogout}>Log out</button>
             
        </ul>
       
            </>
        ):(
            <button onClick={btnlogin}>Login</button>
        )}
        
       
        
    </div>
  )
}

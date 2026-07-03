import React, { useState } from 'react'

export default function Login() {
  const [login ,setlogin] = useState(false )

  const btnlogin = () => {
    setlogin(true)
  }
  const btnlogout = () => {
    setlogin(false)
  }
  return (
    <div style={{textAlign:"center",marginTop:"50px"}}> 
     {login ? (
      <>
      <h1>
        welcome 
      </h1>
      <button onClick={btnlogout}>Logout</button> 
      </>
     ):(
      <button onClick={btnlogin}>Login</button> 
     )}
    </div>
  )
}

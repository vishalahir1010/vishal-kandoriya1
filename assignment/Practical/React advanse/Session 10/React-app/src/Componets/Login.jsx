import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'

export default function Login() {
    const [email ,setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [error , SetError] = useState("")

   const handleLogin = async(e)=>{
    e.preventDefault()
    try{
        SetError("")
        await signInWithEmailAndPassword(auth, email,password)
        alert("Login Successful")
    }catch(err){
        SetError(err.message)
    }
   }
  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <h1>Login in </h1>
        <input type="text"
        value={email}
        placeholder='Email'
        onChange={(e)=>setEmail(e.target.value)} />
        <br /><br />

        <input type="text"
        value={email}
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)} />
        <br /><br />
         <button type="submit">Login</button>

      <p style={{ color: "red" }}>{error}</p>
      </form>
    </div>
  )
}

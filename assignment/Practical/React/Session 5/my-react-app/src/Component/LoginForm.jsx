import React, { useState } from 'react'

export default function LoginForm() {
    const [username , setusername] = useState()
    const [password , setpassword] = useState()

    const handlesubmit =  (even) =>{
        event.preventDefault()
         alert(`username: ${username} \n password:${password}`)
    }
   
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
        <label>Username:</label>
        <input type="text"
        placeholder='enter your name' 
        value={username}
        onChange={(e) => setusername(e.target.value)}/>
        </div>
        <div>
        <label>Password:</label>
        <input type="text"
        placeholder='enter your password' 
        value={password}
        onChange={(e) => setpassword(e.target.value)}/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

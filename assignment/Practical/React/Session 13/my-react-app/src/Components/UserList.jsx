import React, { use, useEffect, useState } from 'react'

export default function UserList() {
    const [user , setuser] = useState([])
    const [loading , setloding] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const fakeData = [
                {id:1 , name:"Rohit"},
                {id:2 , name:"Priya"},
                {id:3 , name:"Aman"}
            ]
            setuser(fakeData)
            setloding(false)
        },3000)
    },[])
  return (
    <div>
        <h1>User list (fetched data)</h1>
        {loading ? (
            <p>Lodding...</p>
        ):(
            <ul>
                {user.map((u)=>(
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

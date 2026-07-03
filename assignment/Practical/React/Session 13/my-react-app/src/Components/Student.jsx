import React from 'react'
import { useState } from "react";

export default function Student() {
    const student = [
    {id:1 , name:"vishal"},
    {id:2 , name:"xyz"},
    {id:3 , name:"raj"} ,
    {id:4 , name:"rahul"}
    ]
      const [theme, setTheme] = useState("light");
       const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme}>

      <h1> Student List</h1>
       <button onClick={toggleTheme}>
        Change Theme 
      </button>
      {student.length ===0 ?(
        <h3>Student not avalable</h3>
      ):(
        <ul>
            {student.map((p)=>(
                <li key={p.id}>{p.id} {p.name}</li>
            ))}
        </ul>
      )}
    </div>
  ) 
}

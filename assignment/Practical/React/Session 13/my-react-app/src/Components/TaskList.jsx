import React from 'react'

export default function TaskList() {
  const task = [
    {id:1 , name:"vishal", task:"open the get"},
    {id:2 , name:"xyz", task:"work in shop"},
    {id:3 , name:"raj", task:"make a food"} ,
    {id:4 , name:"rahul", task:"go to hol"}
  ]
  return (
    <div>
      <h1>  Task list</h1>
      {task.length === 0 ? (  
        <h2>Task not avevabkle</h2>
      ):(
         <ul>
          {task.map((p) => (
            <li key={p.id}>
             {p.id} {p.name} - {p.task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

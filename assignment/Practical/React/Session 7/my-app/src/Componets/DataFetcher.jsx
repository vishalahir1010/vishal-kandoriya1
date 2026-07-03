import React from 'react'
import { useState } from "react";


export default function DataFetcher() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => setData(result));
  };
  return (
    <div>
      <button onClick={fetchData}>Load Data</button>

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

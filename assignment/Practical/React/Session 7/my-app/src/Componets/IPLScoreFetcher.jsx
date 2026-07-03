import React from 'react'
import { useState, useEffect } from "react";


export default function IPLScoreFetcher() {
     const [headline, setHeadline] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setHeadline(data[0].title);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
   <div>
      <h2>Current Match Headline</h2>
      <p>{headline}</p>
    </div>

  )
}

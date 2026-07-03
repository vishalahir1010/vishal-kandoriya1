import React, { useState } from "react";


export default function LikeButton() {
  const [count, setCount] = useState(0);
   const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Likes: {count}</p>
      <button onClick={handleClick}>Like</button>
    </div>
  )
}

import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

export default function LikeButton() {
  const user = useContext(UserContext);

  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button onClick={handleLike}>
        Like as {user.name}
      </button>

      <p>Likes: {likes}</p>
    </div>
  );
}
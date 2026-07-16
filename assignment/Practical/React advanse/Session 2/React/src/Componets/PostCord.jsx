import React from 'react'
import useLikeButton from '../hooks/useLikeButton'

export default function PostCord() {
    const {like, likeCount ,toggleLike} = useLikeButton()
  return (
    
      <div
      style={{
        border: "1px solid gray",
        width: "300px",
        padding: "15px",
        borderRadius: "10px",}} >
      <h2>Nature Photography</h2>

      <img
        src="https://picsum.photos/300/200"alt="post"
        width="100%"/>

      <br />
      <br />
      <button onClick={toggleLike}> {like ? "❤️ Liked" : "🤍 Like"}</button>
    </div>
  )
}

import React from 'react'

export default function Userprofile({ username, followers, profilePic }) {
  return (
   <div
      style={{ width: "280px", border: "1px solid #ddd",  borderRadius: "12px",
        padding: "20px", textAlign: "center",  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        backgroundColor: "#fff", }} >
      <img  src={profilePic} alt={username} style={{ width: "100px",
          height: "100px",  borderRadius: "50%", objectFit: "cover",
          border: "3px solid #e1306c",  }}/>

      <h2 style={{ margin: "10px 0 5px" }}>{username}</h2>

      <p style={{
          color: "#666",
          fontSize: "16px",
          margin: "5px 0",
        }} >
        {followers} Followers
      </p>

      <button
        style={{ backgroundColor: "#0095f6", color: "white",  border: "none",
          padding: "8px 16px",  borderRadius: "5px",cursor: "pointer", }}> Follow
      </button>
    </div>
  )
}

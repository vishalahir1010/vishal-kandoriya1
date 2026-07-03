import React from "react";

export default function UserProfile({ username, followers, profilePic }) {
  return (
    <div
      style={{ width: "280px", border: "1px solid #ddd",  borderRadius: "12px",
        padding: "20px", textAlign: "center", }}>
      <img src={profilePic} alt={username} style={{ width: "100px",   height: "100px",borderRadius: "50%",  objectFit: "cover", }}/>

      <h2>{username}</h2>
      <p>{followers} Followers</p>
    </div>
  );
}



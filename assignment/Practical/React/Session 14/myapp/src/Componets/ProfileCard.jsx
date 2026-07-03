import React from 'react'

export default function ProfileCard({ name, profilePic, bio }) {
  return (
    <div>
      <div className="profile-card">
      <img
        src={profilePic}
        alt={name}
        className="profile-image"
      />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
    </div>
  )
}

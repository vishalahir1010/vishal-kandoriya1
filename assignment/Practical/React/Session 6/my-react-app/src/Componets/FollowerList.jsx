import React from 'react'

export default function FollowerList({ followers }) {
  return (
    <div>
       <h2>Followers</h2>

      {followers.length === 0 ? (
        <p>No followers yet</p>
      ) : (
        <ul>
          {followers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

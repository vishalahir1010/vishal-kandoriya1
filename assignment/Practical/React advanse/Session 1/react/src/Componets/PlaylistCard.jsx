import React from 'react'

export default function PlaylistCard({ song, artist }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      <h3>{song}</h3>
      <p>Artist: {artist}</p>
    </div>
  )
}

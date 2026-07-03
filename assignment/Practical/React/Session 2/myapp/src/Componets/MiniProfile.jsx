import React from 'react'

export default function MiniProfile() {
  return (
    <div
      style={{ width: "250px",  border: "1px solid #ccc", borderRadius: "10px",
        padding: "15px",  textAlign: "center",
   marginTop: "20px", }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1rcbJOICNHVkKXhbkT4Xh5VDM7LWX_t0fgmWYz4wVA&s=10"
        alt="Profile" width="120"height="120"style={{ borderRadius: "50%" }} />

      <h3>Vishal</h3>
      <p>Learning React and building awesome apps </p>
    </div>
  )
}

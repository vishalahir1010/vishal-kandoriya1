import React from "react";

const Playlist = React.memo(function Playlist() {
  console.log("Playlist Rendered");

  return <h2>Playlist Component</h2>;
});

export default Playlist;
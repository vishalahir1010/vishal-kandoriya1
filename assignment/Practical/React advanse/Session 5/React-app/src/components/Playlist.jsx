import React, { useState } from "react";
import SongItem from "./SongItem";

function Playlist({ songs, dispatch }) {
  const [songName, setSongName] = useState("");

  const addSong = () => {
    if (!songName.trim()) return;

    dispatch({
      type: "ADD_SONG",
      payload: songName
    });

    setSongName("");
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Enter song name"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
      />

      <button onClick={addSong}>
        Add
      </button>

      <ul>
        {songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            dispatch={dispatch}
          />
        ))}
      </ul>

    </div>
  );
}

export default Playlist;
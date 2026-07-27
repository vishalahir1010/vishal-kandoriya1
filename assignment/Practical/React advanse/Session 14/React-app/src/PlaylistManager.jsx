import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "./store";

const PlaylistManager = () => {
  const [song, setSong] = useState("");

  const playlist = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const handleAddSong = () => {
    if (song.trim() === "") return;

    dispatch(addSong(song));
    setSong("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Playlist Manager</h2>

      <input
        type="text"
        placeholder="Enter song name"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />

      <button onClick={handleAddSong}>Add Song</button>

      <h3>Playlist</h3>

      <ul>
        {playlist.map((song, index) => (
          <li key={index}>
            {song}

            <button
              onClick={() => dispatch(removeSong(index))}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistManager;
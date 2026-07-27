import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSong,
  removeSong,
} from "../playlist/playlistSlice";

function Playlist() {
  const songs = useSelector((state) => state.playlist.songs);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || artist === "") return;

    dispatch(
      addSong({
        id: Date.now(),
        title,
        artist,
      })
    );

    setTitle("");
    setArtist("");
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
        textAlign: "center",
      }}
    >
      <h1>Spotify Playlist</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add Song</button>
      </form>

      <hr />

      <h2>Playlist</h2>

      {songs.length === 0 ? (
        <p>No songs available.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {songs.map((song) => (
            <li
              key={song.id}
              style={{
                marginBottom: "15px",
              }}
            >
              <strong>{song.title}</strong> - {song.artist}

              <button
                style={{ marginLeft: "10px" }}
                onClick={() => dispatch(removeSong(song.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Playlist;
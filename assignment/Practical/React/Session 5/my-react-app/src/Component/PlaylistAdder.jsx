import { useState } from "react";

export default function PlaylistAdder() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSong = { song, artist, };

    setPlaylist([...playlist, newSong]);

    setSong("");
    setArtist("");
  };

  return (
    <div>
      <h2>Add Song</h2>

      <form onSubmit={handleSubmit}>
        <input type="text"  placeholder="Song Name" value={song}
          onChange={(e) => setSong(e.target.value)} />

        <br />
        <br />

        <input type="text" placeholder="Artist" value={artist}
          onChange={(e) => setArtist(e.target.value)} />
        <br />
        <br />

        <button type="submit">Add Song</button>
      </form>

      <h3>Playlist</h3>

      <ul>
        {playlist.map((item, index) => (
          <li key={index}>
            {item.song} - {item.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}


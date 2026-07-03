import { useRef, useState } from "react";

export default function AddToPlaylist() {
  const inputRef = useRef(null);
  const [song, setSong] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleAdd = () => {
    if (!song.trim()) return;

    setPlaylist([...playlist, song]);
    setSong("");

    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter song name"
        value={song}onChange={(e) => setSong(e.target.value)}  />
    <br />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {playlist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
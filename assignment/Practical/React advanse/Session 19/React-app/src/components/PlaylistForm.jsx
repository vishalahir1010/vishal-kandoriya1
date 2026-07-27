import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../features/playlistSlice";

function PlaylistForm() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    dispatch(
      addSong({
        id: Date.now(),
        title,
      })
    );

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Song Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button>Add Song</button>

    </form>
  );
}

export default PlaylistForm;
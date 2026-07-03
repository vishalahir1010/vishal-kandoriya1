import React, { useState } from "react";
import axios from "axios";

export default function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts");
      console.log(response.data);

      setMessage("Playlist added successfully!");
      setPlaylistName("");
      setDescription("");
    } catch (error) {
      console.error(error);
      setMessage("Failed to add playlist.");
    }
  };

  return (
    <div>
      <h2>Add Playlist</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Playlist Name:</label>
          <br />
          <input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            required/>
        </div>

        <br/>

        <div>
          <label>Description:</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required/>
        </div>

        <br/>

        <button type="submit">Add Playlist</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
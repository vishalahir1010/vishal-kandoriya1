import React, { useState } from "react";

function SongItem({ song, dispatch }) {

  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(song.name);

  const saveSong = () => {
    dispatch({
      type: "EDIT_SONG",
      payload: {
        id: song.id,
        name: newName
      }
    });

    setEditing(false);
  };

  return (
    <li>

      {editing ? (
        <>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />

          <button onClick={saveSong}>
            Save
          </button>
        </>
      ) : (
        <>
          {song.name}

          <button
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        </>
      )}

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_SONG",
            payload: song.id
          })
        }
      >
        Delete
      </button>

    </li>
  );
}

export default SongItem;
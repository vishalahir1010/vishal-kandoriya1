import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { ADD_SONG } from "../graphql/mutations";
import { GET_SONGS } from "../graphql/queries";

function AddSong() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const [addSong] = useMutation(ADD_SONG, {
    optimisticResponse: {
      addSong: {
        id: Date.now().toString(),
        title,
        artist,
        __typename: "Song",
      },
    },
    update(cache, { data: { addSong } }) {
      const { songs } = cache.readQuery({ query: GET_SONGS });

      cache.writeQuery({
        query: GET_SONGS,
        data: {
          songs: [...songs, addSong],
        },
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addSong({
      variables: {
        title,
        artist,
      },
    });

    setTitle("");
    setArtist("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <button>Add Song</button>
    </form>
  );
}

export default AddSong;
import { useMutation } from "@apollo/client/react";
import {
  UPDATE_SONG,
  DELETE_SONG,
} from "../graphql/mutations";
import { GET_SONGS } from "../graphql/queries";

function SongItem({ song }) {
  const [updateSong] = useMutation(UPDATE_SONG);

  const [deleteSong] = useMutation(DELETE_SONG, {
    update(cache, { data: { deleteSong } }) {
      const { songs } = cache.readQuery({
        query: GET_SONGS,
      });

      cache.writeQuery({
        query: GET_SONGS,
        data: {
          songs: songs.filter(
            (s) => s.id !== deleteSong.id
          ),
        },
      });
    },
  });

  const editSong = () => {
    const title = prompt("Enter new title", song.title);

    if (!title) return;

    updateSong({
      variables: {
        id: song.id,
        title,
      },
      optimisticResponse: {
        updateSong: {
          ...song,
          title,
          __typename: "Song",
        },
      },
    });
  };

  return (
    <li>
      {song.title} - {song.artist}

      <button onClick={editSong}>
        Edit
      </button>

      <button
        onClick={() =>
          deleteSong({
            variables: { id: song.id },
          })
        }
      >
        Delete
      </button>
    </li>
  );
}

export default SongItem;
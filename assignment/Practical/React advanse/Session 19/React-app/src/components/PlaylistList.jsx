import { useDispatch, useSelector } from "react-redux";
import { deleteSong } from "../features/playlistSlice";

function PlaylistList() {
  const songs = useSelector(
    (state) => state.playlist.songs
  );

  const dispatch = useDispatch();

  return (
    <>
      <h2>Playlist</h2>

      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title}

            <button
              onClick={() =>
                dispatch(deleteSong(song.id))
              }
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PlaylistList;

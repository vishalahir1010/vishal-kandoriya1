import AddSong from "./AddSong";
import SongList from "./SongList";

function Playlist() {
  return (
    <div>
      <h1>Playlist App</h1>

      <AddSong />

      <SongList />
    </div>
  );
}

export default Playlist;
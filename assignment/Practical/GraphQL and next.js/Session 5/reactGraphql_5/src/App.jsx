import PlaylistList from "./components/PlaylistList";
import PlaylistDetails from "./components/PlaylistDetails";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="app">
      <h1>🎵 Playlist GraphQL App</h1>

      <section>
        <h2>All Playlists</h2>
        <PlaylistList />
      </section>

      <section>
        <h2>Playlist Details</h2>
        <PlaylistDetails playlistId="1" />
      </section>

      <section>
        <SongList />
      </section>
    </div>
  );
}

export default App;
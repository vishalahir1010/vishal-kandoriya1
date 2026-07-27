import React, { useReducer } from "react";
import Playlist from "./components/Playlist";
import { playlistReducer, initialState } from "./playlistReducer";

function App() {
  const [songs, dispatch] = useReducer(
    playlistReducer,
    initialState
  );

  return (
    <div className="App">
      <h1>🎵 Spotify Playlist Manager</h1>

      <Playlist songs={songs} dispatch={dispatch} />
    </div>
  );
}

export default App;
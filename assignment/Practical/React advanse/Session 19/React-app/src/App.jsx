import LoginForm from "./components/LoginForm";
import PlaylistForm from "./components/PlaylistForm";
import PlaylistList from "./components/PlaylistList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <LoginForm />

      <hr />

      <PlaylistForm />

      <PlaylistList />
    </div>
  );
}

export default App;
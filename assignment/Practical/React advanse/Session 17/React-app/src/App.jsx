import Login from "./components/Login";
import LoginFormik from "./components/LoginFormik";
import LoginValidation from "./components/LoginValidation";
import PlaylistForm from "./components/PlaylistForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Login />

      <LoginFormik />
      <LoginValidation />
      <PlaylistForm />
    </div>
  );
}

export default App;
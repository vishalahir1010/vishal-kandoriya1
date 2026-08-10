
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../lib/firebase";

export default function GoogleLogin({ user, onUserChange }) {
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(
        auth,
        provider
      );

      onUserChange(result.user);
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);

      onUserChange(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (user) {
    return (
      <div style={{ marginBottom: "30px" }}>
        <img
          src={user.photoURL}
          alt={user.displayName}
          width="70"
          height="70"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <h2>{user.displayName}</h2>

        <p>{user.email}</p>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <button onClick={handleLogin}>
      Continue with Google
    </button>
  );
}


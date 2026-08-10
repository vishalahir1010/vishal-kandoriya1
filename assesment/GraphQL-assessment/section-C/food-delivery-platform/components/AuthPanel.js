import { useEffect, useState } from "react";
import { onAuthStateChanged, signIn, signUp, signOut } from "@/lib/firebase";

export default function AuthPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((currentUser) =>
      setUser(currentUser),
    );
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const result =
        mode === "signup"
          ? await signUp(email, password)
          : await signIn(email, password);
      setUser(result);
      setMessage(
        mode === "signup"
          ? "Account created successfully."
          : "Signed in successfully.",
      );
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage(error.message || "Authentication failed");
    }
  };

  return (
    <div className="card" style={{ maxWidth: "420px", margin: "0 auto" }}>
      <h3>
        {user
          ? "Welcome back"
          : mode === "signup"
            ? "Create an account"
            : "Sign in"}
      </h3>
      {user ? (
        <>
          <p style={{ marginBottom: "0.75rem" }}>Signed in as {user.email}</p>
          <button className="button secondary" onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: "0.75rem" }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button className="button" type="submit">
            {mode === "signup" ? "Create Account" : "Login"}
          </button>
          <button
            type="button"
            className="button secondary"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
          >
            {mode === "login" ? "Need an account?" : "Already have an account?"}
          </button>
        </form>
      )}
      {message ? <p style={{ marginTop: "0.75rem" }}>{message}</p> : null}
    </div>
  );
}

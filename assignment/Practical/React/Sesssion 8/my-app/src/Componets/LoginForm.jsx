import { useRef, useState } from "react";

export default function LoginForm() {
  const usernameRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  
    console.log({ username, password });
 
    setUsername("");
    setPassword("");

    usernameRef.current.focus();
  };

  return (
    <div>
      <input ref={usernameRef} type="text"placeholder="Username"value={username}
        onChange={(e) => setUsername(e.target.value)} />
    <br />
      <input
        type="password" placeholder="Password"value={password}
        onChange={(e) => setPassword(e.target.value)} />
    <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
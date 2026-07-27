import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignUp() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const register = async () => {

    try {

      await createUserWithEmailAndPassword( auth, email, password);

      setMessage("Account created successfully");

    } catch(error) {

      setMessage(error.message);

    }
  };


  return (
    <div>

      <h2>Sign Up</h2>

      <input type="email"  placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)} />

      <input type="password" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={register}>
        Register
      </button>

      <p>{message}</p>

    </div>
  )
}

export default SignUp;
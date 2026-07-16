import { auth } from "../firebase";

import {  GoogleAuthProvider,  signInWithPopup,} from "firebase/auth";

const Login = () => {

  const login = async () => {

    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);

  };

  return (

    <div>

      <h2>Login</h2>

      <button onClick={login}>
        Sign In With Google
      </button>

    </div>

  );
};

export default Login;
import {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");
const login = async()=>{
try{
await signInWithEmailAndPassword(auth,email,password);
setError("");
}
catch(err){
setError("Invalid email or password");
}
}
return(
<div>
<h2>Login</h2>
<input
type="email"placeholder="Email"onChange={(e)=>setEmail(e.target.value)}/>
<input type="password"placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={login}>Login</button>
<p>{error}</p>
</div>
)
}
export default Login;
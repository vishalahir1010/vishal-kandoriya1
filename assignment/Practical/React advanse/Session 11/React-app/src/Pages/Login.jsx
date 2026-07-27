import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";


function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();


const login=async()=>{

try{

await signInWithEmailAndPassword(
auth,
email,
password
);


navigate("/profile");


}
catch(error){

alert(error.message);

}

}



return(

<div>

<h2>Login</h2>


<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>


<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>


<button onClick={login}>
Sign In
</button>


</div>

)

}


export default Login;
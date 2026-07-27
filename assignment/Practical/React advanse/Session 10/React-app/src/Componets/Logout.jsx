import {useEffect,useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";

import {auth} from "../firebase";

import SignUp from "../componets/SignUp";
import Login from "../Componets/Login";
function App(){
const [user,setUser]=useState(null);
useEffect(()=>{

const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser);
});
return ()=>unsubscribe();
},[]);
const logout = async()=>{
try{
await signOut(auth);
}
catch(error){
console.log(error);
}
};
return(
<div>
<h1>Firebase Authentication</h1>
{
user ?
<div>
<h3>Logged in user: {user.email}</h3>
<button onClick={logout}>Logout</button>
</div>
:
<div>
<SignUp/>
<Login/>
</div>
}
</div>
)
}
export default App;
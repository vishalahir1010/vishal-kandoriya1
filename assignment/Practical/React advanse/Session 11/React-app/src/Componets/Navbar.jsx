import {useEffect, useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase";
import {Link, useNavigate} from "react-router-dom";

function Navbar(){
const [user,setUser]=useState(null);
const navigate = useNavigate();
useEffect(()=>{

const unsubscribe = onAuthStateChanged(
auth,
(currentUser)=>{

setUser(currentUser);

});


return ()=>unsubscribe();


},[]);



const logout = async()=>{

await signOut(auth);

navigate("/login");

};

return(
<nav>
<h2>Spotify App</h2>
{user ?
<h3>Welcome, {user.displayName || user.email}</h3>
:
<h3>Welcome, Guest</h3>
}
{user ?
<button onClick={logout}>Logout</button>
:
<Link to="/login">Sign In</Link>
}
</nav>
)
}
export default Navbar;
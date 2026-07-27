import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUp from './Componets/SignUp'
import Login from './Componets/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Logout from './Componets/Logout'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      <div style={{ padding: "20px" }}>
      <h1>Firebase Authentication</h1>

      {user ? (
        <h3>Logged in as: {user.email}</h3>
      ) : (
        <h3>No user logged in</h3>
      )}

      <SignUp />
      <hr />
      <Login />
      <hr />
      <Logout/> 
    </div>
    </>
  )
}

export default App

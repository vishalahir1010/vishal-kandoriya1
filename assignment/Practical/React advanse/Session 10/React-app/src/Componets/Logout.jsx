import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import React from 'react'

export default function Logout() {
 

const handleLogout = async () => {
  try {
    await signOut(auth);
    alert("Logged out successfully");
  } catch (error) {
    console.error(error);
    alert("Logout failed");
  }

};
 return (
    <div>
      {user && (
  <button onClick={handleLogout}>
    Logout
  </button>
)}
  </div>
  )
}
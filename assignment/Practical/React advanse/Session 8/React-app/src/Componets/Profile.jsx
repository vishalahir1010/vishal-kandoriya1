import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Profile() {
  const { user, updateDisplayName } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user?.displayName}</h2>

      <button onClick={() => updateDisplayName("Vishal")}>
        Change Name
      </button>
    </div>
  );
}

export default Profile;
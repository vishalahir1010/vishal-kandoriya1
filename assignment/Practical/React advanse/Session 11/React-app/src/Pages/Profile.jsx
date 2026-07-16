import { useAuth } from "../context/AuthContext";

const Profile = () => {

  const { user } = useAuth();

  return (
    <div>

      <h2>Profile</h2>

      <p>{user.email}</p>

    </div>
  );
};

export default Profile;
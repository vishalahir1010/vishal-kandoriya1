import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav>

      <Link to="/">Home</Link>

      {user ? (
        <>
          <span>
            Welcome, {user.displayName || user.email}
          </span>

          <Link to="/profile">Profile</Link>

          <Link to="/myorders">My Orders</Link>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <span>Welcome, Guest</span>

          <Link to="/login">
            Sign In
          </Link>
        </>
      )}

    </nav>
  );
};

export default Navbar;
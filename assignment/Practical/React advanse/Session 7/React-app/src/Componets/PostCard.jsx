import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function PostCard() {
  const { theme } = useContext(ThemeContext);

  const style = {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: theme === "dark" ? "#333" : "#f4f4f4",
    color: theme === "dark" ? "#fff" : "#000",
    textAlign: "center"
  };

  return (
    <div style={style}>
      <h3>Post Title</h3>
      <p>This is an Instagram post.</p>
    </div>
  );
}

export default PostCard;
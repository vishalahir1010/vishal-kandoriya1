import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  const style = {
    padding: "20px",
    backgroundColor: theme === "dark" ? "#222" : "#ddd",
    color: theme === "dark" ? "#fff" : "#000",
    textAlign: "center"
  };

  return <nav style={style}>Instagram Navbar</nav>;
}

export default Navbar;

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ToggleThemeButton() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

export default ToggleThemeButton;
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <header>
      <h1>Current Theme: {state.theme}</h1>

      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
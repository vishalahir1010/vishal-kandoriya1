import { useState } from "react";

import UserContext from "./Componets/UserContext";
import ThemeContext from "./Componets/ThemeContext";
import NotificationContext from "./Componets/NotificationContext";

import Navbar from "./Componets/Navbar";
import Parent from "./Componets/Parent";
import NotificationDemo from "./Componets/NotificationDemo";

function App() {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(5);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <UserContext.Provider
      value={{ username: "Vishal", loggedIn: true }}
    >
      <ThemeContext.Provider value={{ theme }}>
        <NotificationContext.Provider value={{ count, setCount }}>
          <div
            style={{backgroundColor:theme === "light" ? "white" : "#333",
              color: theme === "light" ? "black" : "white",minHeight: "100vh",padding: "20px",
            }}>
            <Navbar/>

            <button onClick={toggleTheme}>
              Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </button>
            <hr />
            <Parent />
            <hr />
            <NotificationDemo />
          </div>
        </NotificationContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
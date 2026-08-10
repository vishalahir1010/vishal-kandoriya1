import { useState } from "react";

import MobileRestaurants from "./components/MobileRestaurants";
import AdminRestaurants from "./components/AdminRestaurants";

function App() {
  const [view, setView] = useState("mobile");

  return (
    <div className="app">

      <h1>Food Delivery GraphQL</h1>

      <div className="buttons">

        <button
          onClick={() => setView("mobile")}
        >
          Mobile App
        </button>

        <button
          onClick={() => setView("admin")}
        >
          Admin Dashboard
        </button>

      </div>

      <div className="content">

        {view === "mobile" ? (
          <MobileRestaurants />
        ) : (
          <AdminRestaurants />
        )}

      </div>

    </div>
  );
}

export default App;
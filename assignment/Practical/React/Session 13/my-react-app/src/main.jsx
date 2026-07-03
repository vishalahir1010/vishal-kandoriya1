import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemProvider } from "./Components/ThemContext";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemProvider>
    <App />
  </ThemProvider>
);
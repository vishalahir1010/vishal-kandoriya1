import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import HomePage from "./Componets/HomePage";
import DealsPage from "./Componets/DealsPage";
import CartPage from "./Componets/CartPage";
import NotFound from "./Componets/NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={({ isActive }) => ({
            marginRight: "20px",
            textDecoration: "none",
            color: isActive ? "blue" : "black",
            fontWeight: isActive ? "bold" : "normal",
          })}>Home</NavLink>

        <NavLink to="/deals" style={({ isActive }) => ({
            marginRight: "20px",
            textDecoration: "none",
            color: isActive ? "blue" : "black",
            fontWeight: isActive ? "bold" : "normal",
          })} >Deals</NavLink>

        <NavLink to="/cart" style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "blue" : "black",
            fontWeight: isActive ? "bold" : "normal",
          })}> Cart</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
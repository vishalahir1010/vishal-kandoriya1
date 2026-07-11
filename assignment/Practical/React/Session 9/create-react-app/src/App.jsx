import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import HomePage from "./Componets/HomePage";
import DealsPage from "./Componets/DealsPage";
import CartPage from "./Componets/CartPage";
import NotFound from "./Componets/NotFound";

function App() {
  const activeStyle = ({ isActive }) => ({ marginRight: "20px" ,textDecoration: "none",
    color: isActive ? "#2874f0" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <BrowserRouter>
      <nav
        style={{padding: "15px",backgroundColor: "#f1f3f6",marginBottom: "20px",
        }}>
        <NavLink to="/" style={activeStyle}>
          Home
        </NavLink>

        <NavLink to="/deals" style={activeStyle}>
          Deals
        </NavLink>

        <NavLink to="/cart" style={activeStyle}>
          Cart
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
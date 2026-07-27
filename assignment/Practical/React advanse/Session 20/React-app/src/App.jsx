import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/wishlist"element={<Wishlist />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
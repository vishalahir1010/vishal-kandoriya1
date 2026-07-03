import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemContext } from "./Components/ThemContext";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import TaskList from "./Components/TaskList";
import Student from "./Components/Student";
import Product from "./Components/Product";
import UserList from "./Components/UserList";
import "./App.css"
import Axios from "./Components/Axios";



function App() {
  const { theme, toggleThem } = useContext(ThemContext);

  return (
    <BrowserRouter>
      <Navbar />
    <button onClick={toggleThem}>Switch Color</button>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/students" element={<Student />} />
        <Route path="/products" element={<Product />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
      <Axios/>
        
      
      
    </BrowserRouter>

  );
}

export default App;
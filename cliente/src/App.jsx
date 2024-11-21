import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Login1 from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Loja from "./Pages/Loja/Loja";
import Home from "./Pages/Home/Home";
import Carrinho from "./Pages/Carrinho/Carrinho";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Admin from "./Pages/Admin/Admin";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Loja" element={<Loja />} />
          <Route path="/Login" element={<Login1 />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Carrinho" element={<Carrinho />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;

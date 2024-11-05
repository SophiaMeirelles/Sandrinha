import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar'
import Login1 from './Pages/Login/Login'
import Register from './Pages/Register/Register';
import Loja from './Pages/Loja/Loja'
import Home from './Pages/Home/Home'
import Carrinho from './Pages/Carrinho/Carrinho'

import './App.css'

function App() {


  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Loja" element={<Loja />} />
        <Route path="/Login" element={<Login1 />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Carrinho" element={<Carrinho />} />
    </Routes>
    
</Router>
  )
}

export default App
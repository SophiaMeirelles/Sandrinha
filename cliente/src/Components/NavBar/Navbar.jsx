import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../Navbar/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="menu-wrapper">
        <img src="PatoFoda.png" alt="Pato" className="Pato" />
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              INÍCIO
            </NavLink>
            <NavLink
              to="/loja"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              LOJA
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              LOGIN
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              REGISTRO
            </NavLink>
            <NavLink
              to="/carrinho"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CARRINHO
            </NavLink>
            <NavLink
              to="/Admin"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              ADMIN
            </NavLink>
          </div>
        </div>
      </div>
      <div className="Sanduba" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          email,
          password,
          role,
        }
      );
        navigate("/Login");
     } catch (error) {
      setError(error.response?.data?.error || "Erro ao cadastrar");
    }
  };

  return (
    <div className={style.cadastro}>
      <h1>Cadastrar</h1>
      <form onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            value={username}
            placeholder="Nome de Usuário"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
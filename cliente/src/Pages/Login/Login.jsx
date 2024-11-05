import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import style from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token, role } = response.data;

      login(token, role);

      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.error || "Erro ao fazer login");
      console.error("Erro ao fazer login", error);
    }
  };

  return (
    <div className={style.login}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
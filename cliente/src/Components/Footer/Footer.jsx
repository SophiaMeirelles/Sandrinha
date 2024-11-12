import React from "react";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Sobre Nós</h3>
        <p>
          Somos uma loja dedicada à qualidade e ao atendimento ao cliente.
          Oferecemos produtos incríveis para transformar o seu dia a dia.
        </p>
      </div>

      <div className="footer-section">
        <h3>Links Rápidos</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contate-nos</h3>
        <p>Email: contato@lojavirtual.com</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
      </div>

      <div className="footer-section social-media">
        <h3>Redes Sociais</h3>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Nossa Loja - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
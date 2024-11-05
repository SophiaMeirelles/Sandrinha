import React from "react";
import "../Home/Home.css";

function Home() {
  return (
    <>
      <section className="home-introduction">
        <h1>Bem-vindo à Nossa Loja!</h1>
        <p>
          Nossa loja surgiu da paixão por oferecer produtos de alta qualidade e
          <br></br>
          um atendimento personalizado. Desde o início, nosso objetivo é
          <br></br>
          proporcionar aos nossos clientes uma experiência única de compra, com
          <br></br>
          produtos que encantam e fazem a diferença.<br></br>
        </p>
      </section>

      <section className="home-story">
        <h2>Nossa História</h2>
        <p>
          Fundada em 2020, nossa loja começou como um pequeno negócio familiar.
          <br></br>
          Ao longo dos anos, com muito esforço e dedicação, conquistamos a
          <br></br>
          confiança de nossos clientes e expandimos nossa linha de produtos.
          <br></br>
          Hoje, temos orgulho de ser uma referência de qualidade e<br></br>
          confiabilidade.<br></br>
        </p>
      </section>

      <section className="home-testimonials">
        <h2>O Que Nossos Clientes Dizem</h2>
        <div className="testimonial">
          <p>
            "Excelente atendimento e produtos incríveis! Com certeza voltarei a
            comprar."
          </p>
          <span>- Maria S.</span>
        </div>
        <div className="testimonial">
          <p>
            "A qualidade dos produtos é maravilhosa, e chegou super rápido.
            Recomendo!"
          </p>
          <span>- João P.</span>
        </div>
        <div className="testimonial">
          <p>
            "Comprei pela primeira vez e já virei cliente fiel. Adorei o carinho
            nos detalhes."
          </p>
          <span>- Ana C.</span>
        </div>
      </section>

      <section className="home-products-preview">
        <h2>Confira Alguns de Nossos Produtos</h2>
        <div className="products-list">
          {}
          <div className="product-card">
            <img src="/path-to-product1.jpg" alt="Produto 1" />
            <h3>Produto 1</h3>
            <p>Descrição breve do produto.</p>
          </div>
          <div className="product-card">
            <img src="/path-to-product2.jpg" alt="Produto 2" />
            <h3>Produto 2</h3>
            <p>Descrição breve do produto.</p>
          </div>
          {}
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2023 Nossa Loja - Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Home;
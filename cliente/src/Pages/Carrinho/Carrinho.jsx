import React from "react";
import "../Carrinho/Carrinho.css";

function Carrinho() {
  // Aqui você pode armazenar o estado do carrinho
  const cartItems = [
    { id: 1, name: 'Pizza', price: 25.00, quantity: 1 },
    { id: 2, name: 'Salada', price: 15.00, quantity: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Seu Carrinho</h1>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Quantidade: {item.quantity}</p>
              <p>Preço: R${item.price}</p>
            </div>
          ))}
          <h2>Total: R${total.toFixed(2)}</h2>
          <button>Finalizar Pedido</button>
        </>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </div>
  );
};

export default Carrinho;
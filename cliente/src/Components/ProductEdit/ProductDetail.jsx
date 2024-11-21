import React, { useState, useEffect } from "react";
import api from "../../service/index";

const EditProduct = ({ product, onProductUpdated }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [category, setCategory] = useState(product.category);

  useEffect(() => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setQuantity(product.quantity);
    setCategory(product.category);
  }, [product]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/produtos/${product.id}`, {
        name,
        description,
        price,
        quantity,
        category,
      });
      onProductUpdated(response.data);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  return (
    <div>
      <h2>Editar Produto</h2>
      <form onSubmit={handleUpdateProduct}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Selecione uma categoria
          </option>
          <option value="Eletrônicos">Eletrônicos</option>
          <option value="Roupas">Roupas</option>
          <option value="Livros">Livros</option>
          <option value="Esportes">Esportes</option>
          <option value="Alimentos">Alimentos</option>
        </select>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EditProduct;

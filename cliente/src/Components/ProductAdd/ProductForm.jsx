import React, { useState } from "react";
import api from "../../service/index";

const AddProduct = ({ onProductAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/produtos", {
        name,
        description,
        price,
        quantity,
        category,
      });
      onProductAdd(response.data);
      setName("");
      setDescription("");
      setPrice("");
      setQuantity("");
      setCategory("");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  return (
    <div>
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleAddProduct}>
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
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddProduct;

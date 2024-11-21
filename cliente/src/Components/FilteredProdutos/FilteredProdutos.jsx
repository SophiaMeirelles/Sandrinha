import React, { useState } from "react";

const FilteredProductList = ({ products, onEdit, onDelete }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <label>Filtrar </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Todos</option>
        <option value="Eletrônicos">Eletrônicos</option>
        <option value="Roupas">Roupas</option>
        <option value="Livros">Livros</option>
        <option value="Esportes">Esportes</option>
        <option value="Alimentos">Alimentos</option>
      </select>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            Nome: {product.name} | Descrição: {product.description} | Preço:{" "}
            {product.price} | Quantidade: {product.quantity} | Categoria:{" "}
            {product.category}
            <button onClick={() => onEdit(product)}>Editar</button>
            <button onClick={() => onDelete(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredProductList;

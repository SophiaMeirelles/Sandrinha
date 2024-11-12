import React, { useState } from "react";
import "./../Produtos/Produtos.css";

const produtosData = [
  {
    id: 1,
    nome: "Produto A",
    descricao: "Descrição do Produto A",
    preco: 50,
    disponibilidade: true,
    categoria: "Categoria 1",
  },
  {
    id: 2,
    nome: "Produto B",
    descricao: "Descrição do Produto B",
    preco: 30,
    disponibilidade: true,
    categoria: "Categoria 2",
  },
  {
    id: 3,
    nome: "Produto C",
    descricao: "Descrição do Produto C",
    preco: 70,
    disponibilidade: false,
    categoria: "Categoria 1",
  },
];

function Produtos() {
  const [categoria, setCategoria] = useState("");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  const filtrarProdutos = () => {
    return produtosData.filter((produto) => {
      const dentroDaCategoria = categoria
        ? produto.categoria === categoria
        : true;
      const dentroDoPreco =
        (precoMin ? produto.preco >= precoMin : true) &&
        (precoMax ? produto.preco <= precoMax : true);
      const pesquisaNome = produto.nome
        .toLowerCase()
        .includes(pesquisa.toLowerCase());
      return dentroDaCategoria && dentroDoPreco && pesquisaNome;
    });
  };

  const produtosFiltrados = filtrarProdutos();

  return (
    <div className="produtos-container">
      <div className="filtros">
        <input
          type="text"
          placeholder="Pesquisar por nome"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <select
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
        >
          <option value="">Todas as Categorias</option>
          <option value="Categoria 1">Categoria 1</option>
          <option value="Categoria 2">Categoria 2</option>
        </select>
        <input
          type="number"
          placeholder="Preço Mínimo"
          value={precoMin}
          onChange={(e) => setPrecoMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço Máximo"
          value={precoMax}
          onChange={(e) => setPrecoMax(e.target.value)}
        />
      </div>

      <div className="produtos-lista">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <div key={produto.id} className="produto">
              <h2>{produto.nome}</h2>
              <p>{produto.descricao}</p>
              <p>Preço: R$ {produto.preco}</p>
              <p>
                Disponibilidade:{" "}
                {produto.disponibilidade ? "Em estoque" : "Indisponível"}
              </p>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Produtos;
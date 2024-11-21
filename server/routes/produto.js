const express = require("express");
const Produto = require("../model/produtos");
const router = express.Router();

router.get("/produtos", async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
});

router.post("/produtos", async (req, res) => {
  const { name, description, price, quantity, category } = req.body;
  const newProduct = await Produto.create({
    name,
    description,
    price,
    quantity,
    category,
  });
  res.json(newProduct);
});

router.put("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, category } = req.body;
  await Produto.update(
    { name, description, price, quantity, category },
    { where: { id } }
  );
  res.json({ message: "Produto atualizado com sucesso" });
});

router.delete("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  await Produto.destroy({ where: { id } });
  res.json({ message: "Produto deletado com sucesso" });
});

module.exports = router;

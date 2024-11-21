import React, { useState, useEffect } from "react";
import FilteredProductList from "../../components/FilteredProdutos/FilteredProdutos";
import AddProduct from "../../components/ProductAdd/ProductForm";
import EditProduct from "../../components/ProductEdit/ProductDetail";
import api from "../../service";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await api.get("/produtos");
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/produtos/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  const handleProductAdded = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleProductUpdated = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditProduct(null);
  };

  return (
    <div className="container">
      {editingProduct ? (
        <EditProduct
          product={editingProduct}
          onProductUpdated={handleProductUpdated}
        />
      ) : (
        <AddProduct onProductAdd={handleProductAdded} />
      )}

      <FilteredProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;

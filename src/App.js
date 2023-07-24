import React, { useState, useEffect } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products from local storage on component mount
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    // Save products to local storage whenever the 'products' state changes
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h1>Product App</h1>
      <AddProduct onAdd={handleAddProduct} />
      <h1>Products</h1>
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default App;

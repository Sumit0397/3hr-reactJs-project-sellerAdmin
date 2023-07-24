import React, { useState } from "react";

const AddProduct = ({ onAdd }) => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddProduct = () => {
    if (productId && productName && productPrice) {
      onAdd({
        id: productId,
        name: productName,
        price: parseFloat(productPrice)
      });
      setProductId("");
      setProductName("");
      setProductPrice("");
    }
  };

  return (
    <div>
      <label>Product Id:</label>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <label>Product Name:</label>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <label>Product Price</label>
      <input
        type="number"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;

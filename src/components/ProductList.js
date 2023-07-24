import React from "react";

const ProductList = ({ products, onDelete }) => {
  const handleDelete = (productId) => {
    onDelete(productId);
  };

  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.name} - Rs. ${product.price.toFixed(2)}`}</span>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
      <p>Total Price: Rs. {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default ProductList;

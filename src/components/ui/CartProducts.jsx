import React from "react";

const CartProducts = ({ selectedProducts }) => {
  console.log(selectedProducts);

  return (
    <div>
      {selectedProducts.map((product) => (
        <p>{product.description}</p>
      ))}
    </div>
  );
};

export default CartProducts;

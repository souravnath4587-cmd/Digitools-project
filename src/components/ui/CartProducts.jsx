import React, { useState } from "react";

const CartProducts = ({ selectedProducts, setSelectedProducts }) => {
  const totalPrice = selectedProducts.reduce(
    (total, item) => total + item.price,
    0,
  );
  console.log(selectedProducts);
  const handleDelete = (product) => {
    const productFilter = selectedProducts.filter(
      (item) => item.id !== product.id,
    );
    setSelectedProducts(productFilter);
  };

  return (
    <div className="my-10">
      {selectedProducts.length === 0 ? (
        <div>There is no products are you buy. Please buy something.</div>
      ) : (
        <div className="rounded-2xl p-6 border-[1px] text-left">
          <h2>Your cart</h2>
          {selectedProducts.map((product) => (
            <div className="flex flex-row justify-between items-center mt-6 p-4 rounded-2xl bg-[#f9fafc]">
              <div className="flex flex-row justify-start gap-6">
                <div className="image rounded-full p-8 w-[30px] border-2 bg-amber-50">
                  <img src="" alt="" />
                </div>
                <div className="cardbody">
                  <h3>{product.name}</h3>
                  <span className="text-2xl font-bold">${product.price}</span>
                </div>
              </div>
              <button
                onClick={() => handleDelete(product)}
                className="btn btn-warning border-0"
              >
                remove
              </button>
            </div>
          ))}
          <div className="flex flex-row justify-between items-center my-4 p-6">
            <p>Total :</p>
            <span className="text-3xl font-bold">
              ${totalPrice}
              {}
            </span>
          </div>
          <button className="btn btn-primary btn-block">
            Procced To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartProducts;

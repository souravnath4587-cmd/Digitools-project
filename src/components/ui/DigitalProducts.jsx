import React, { use } from "react";
import Product from "./Product";

const DigitalProducts = ({
  promiseProducts,
  selectedProducts,
  setSelectedProducts,
}) => {
  const products = use(promiseProducts);

  // const handleProductBuy = () => {
  //   console.log("Button is clicked...");
  //   setSelectedProducts([...selectedProducts, products]);
  // };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      ))}
    </div>
  );
};

export default DigitalProducts;

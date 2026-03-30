import React, { use } from "react";

const DigitalProducts = ({ promiseProducts }) => {
  const products = use(promiseProducts);
  console.log(products);

  return <div></div>;
};

export default DigitalProducts;

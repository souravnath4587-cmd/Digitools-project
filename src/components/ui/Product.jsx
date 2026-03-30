import React from "react";
import Feature from "./Feature";

const Product = ({ product, selectedProducts, setSelectedProducts }) => {
  const { name, tag, price, features, description, period } = product;
  const handleProductBuy = () => {
    setSelectedProducts([...selectedProducts, product]);
  };
  return (
    <div>
      <div className="rounded-2xl bg-amber-200 relative p-4 space-y-6 ">
        <div className="badge badge-warning absolute px-4 py-2 top-4 right-4">
          {tag}
        </div>
        <img className="mt-6" src="" alt="" />
        <div className="cardContent text-left space-y-6 ">
          <h2>{name}</h2>
          <p className="h-20">{description}</p>
          <h3 className="text-3xl font-bold">
            ${price}
            <span className="text-[16px]">/{period}</span>
          </h3>
          <div>
            {features.map((feature, index) => (
              <Feature key={index} feature={feature} />
            ))}
          </div>
          <div>
            <button
              onClick={handleProductBuy}
              className="btn btn-primary btn-block rounded-full"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

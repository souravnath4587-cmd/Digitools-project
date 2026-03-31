import React from "react";
import Feature from "./Feature";
import { toast } from "react-toastify";

const Product = ({ product, selectedProducts, setSelectedProducts }) => {
  const { name, tag, price, features, description, period, img } = product;
  console.log(img);

  const handleProductBuy = (name) => {
    toast(`You take this ${name} product.`);
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div>
      <div className="rounded-2xl bg-[#f5f5f5] relative p-4 space-y-6 ">
        <div
          className={` ${tag === "Best Seller" ? "bg-[#fef3c6]" : "badge-warning"} ${tag === "New" ? "bg-[#e1e7ff]" : "badge-warning"} ${tag === "Popular" ? "bg-[#dbfce7]" : "badge-warning"} badge  absolute px-4 py-2 top-4 right-4`}
        >
          {tag}
        </div>
        <img src={img} className="mt-6" alt={`${name} product image`} />
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
              onClick={() => {
                handleProductBuy(product.name);
              }}
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

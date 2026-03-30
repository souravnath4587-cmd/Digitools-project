import React, { use } from "react";
import design from "../../assets/products/design-tool.png";
import Feature from "./Feature";
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
      {products.map(
        (product, index) => (
          <Product
            key={index}
            product={product}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        ),
        // return (
        //   <div className="rounded-2xl bg-amber-200 relative p-4 space-y-6 ">
        //     <div className="badge badge-warning absolute px-4 py-2 top-4 right-4">
        //       {product.tag}
        //     </div>
        //     <img className="mt-6" src={design} alt="" />
        //     <div className="cardContent text-left space-y-6 ">
        //       <h2>{product.name}</h2>
        //       <p className="h-20">{product.description}</p>

        //       <h3 className="text-3xl font-bold">
        //         ${product.price}
        //         <span className="text-[16px]">/{product.period}</span>
        //       </h3>
        //       <div>
        //         {product.features.map((feature, index) => (
        //           <Feature key={index} feature={feature} />
        //         ))}
        //       </div>
        //       <div>
        //         <button
        //           onClick={handleProductBuy}
        //           className="btn btn-primary btn-block rounded-full"
        //         >
        //           Buy Now
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // );
      )}
    </div>
  );
};

export default DigitalProducts;

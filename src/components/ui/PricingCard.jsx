import React, { use } from "react";
import Feature from "./Feature";

const PricingCard = ({ pricingPromise }) => {
  const promiseData = use(pricingPromise);
  console.log(promiseData);

  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
      {promiseData.map((data) => {
        return (
          <div
            className={` ${data.isPopular ? "bg-primary text-white" : "bg-base-200"} w-96 md:w-80 shadow-sm p-4 rounded-2xl relative`}
          >
            {data.isPopular ? (
              <div className="badge badge-warning p-2 absolute -top-3 md:right-25 right-35">
                Most Popular
              </div>
            ) : (
              ""
            )}

            <div className=" ">
              <div className="flex flex-col text-left ">
                <h2
                  className={` ${data.isPopular ? "!text-white" : "text-black"} text-3xl font-bold`}
                >
                  {data.plan}
                </h2>
                <p className="text-[16px]">{data.description}</p>
                <h4
                  className={` ${data.isPopular ? "!text-white" : "text-black"} text-3xl font-bold my-6`}
                >
                  ${data.price}
                  <span className="text-[16px] text-[#707070]">
                    /{data.billing}
                  </span>
                </h4>
              </div>
              <div className="h-40 ">
                {data.features.map((feature, index) => (
                  <Feature key={index} feature={feature} />
                ))}
              </div>
              <div className="mt-6">
                <button
                  className={`${data.isPopular === true ? "btn-warning" : "btn-primary"} btn btn-block text-white`}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingCard;

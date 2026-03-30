import React, { Suspense } from "react";
import PricingCard from "../ui/PricingCard";

const pricingPromise = fetch("/pricingData.json").then((res) => res.json());
const Transparent = () => {
  return (
    <div className="my-14">
      <div className="sectionHeader w-sm md:w-2xl font-bold mx-auto my-4 ">
        <h1>Simple, Transparent Pricing</h1>
        <p>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="sectionContent ">
        <Suspense fallback={"data is loading...."}>
          <PricingCard pricingPromise={pricingPromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default Transparent;

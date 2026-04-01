import React from "react";

const Workflow = () => {
  return (
    <div className=" py-20 bg-[#7824f9] text-white ">
      <div className="w-sm md:w-3xl lg:w-4xl  mx-auto text-center !space-y-4">
        <h1 className="!text-white text-2xl md:text-3xl">
          {" "}
          Ready To Transform Your Workflow?
        </h1>
        <p>
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>
        <div className="flex gap-4 flex-row justify-center">
          <button className="btn bg-white border-0 rounded-full">
            Explore Products
          </button>
          <button className="btn btn-outline border-white border-[1px] text-white btn-primary rounded-full">
            View Pricing
          </button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Workflow;

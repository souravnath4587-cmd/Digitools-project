import React from "react";

const ActiveUser = () => {
  return (
    <div className="bg-[#4f39f6] py-12 px-20">
      <div className="flex flex-col md:flex-row justify-around items-center  ">
        <div className=" flex flex-col items-center space-y-4 py-6 md:py-0">
          <span className="text-5xl font-bold text-white">50K+</span>
          <p className="text-white">Active User</p>
        </div>
        {/* <div className="divider lg:divider-horizontal text-white">OR</div> */}
        <div className=" flex flex-col items-center space-y-4 py-6 border-y-2 md:border-y-0 md:px-24 md:border-x-2 border-white">
          <span className="text-5xl font-bold text-white">200+</span>
          <p className="text-white">Premium Tools</p>
        </div>
        {/* <div className="divider lg:divider-horizontal text-white">OR</div> */}
        <div className=" flex flex-col items-center space-y-4  py-6 md:py-0">
          <span className="text-5xl font-bold text-white">4.9</span>
          <p className="text-white">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;

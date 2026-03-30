import React from "react";
import banner from "../../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div>
      <div className="bg-base-200 min-h-screen mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-4 p-10 items-center lg:flex-row-reverse">
          <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="flex flex-col text-start space-y-4">
            <h1 className="text-8xl font-bold">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. <br /> Explore Products
            </p>
            <div className="flex felx-row  gap-4 py-4">
              <button className="btn btn-primary rounded-full">
                Explore Products
              </button>
              <button className="btn btn-outline border-2 btn-primary rounded-full">
                {" "}
                <CiPlay1 />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

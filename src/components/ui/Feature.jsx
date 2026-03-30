import React from "react";
import { FaCheck } from "react-icons/fa";

const Feature = ({ feature }) => {
  console.log(feature);

  return (
    <div className="text-left flex flex-row items-center">
      <FaCheck className="mr-2" />
      <p>{feature}</p>
    </div>
  );
};

export default Feature;

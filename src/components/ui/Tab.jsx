import React from "react";

const Tab = ({ selectedTab, setSelectedTab, selectedProducts }) => {
  return (
    <div>
      <div className="sectionTab border-2 rounded-full flex flex-row justify-center items-center w-50 py-2 mx-auto shadow-2xl">
        <button
          onClick={() => setSelectedTab("products")}
          className={`btn ${selectedTab === "products" ? "btn-primary" : ""} rounded-full border-0`}
        >
          Products
        </button>
        <button
          onClick={() => setSelectedTab("cart")}
          className={`btn rounded-full border-0 ${selectedTab === "cart" ? "btn-primary" : ""}`}
        >
          Cart({selectedProducts.length})
        </button>
      </div>
    </div>
  );
};

export default Tab;

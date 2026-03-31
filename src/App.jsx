import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import ActiveUser from "./components/sections/ActiveUser";
import DigitalProducts from "./components/ui/DigitalProducts";
import Steps from "./components/sections/Steps";
import Transparent from "./components/transparents-pricing/Transparent";
import CartProducts from "./components/ui/CartProducts";
import Tab from "./components/ui/Tab";
import { ToastContainer } from "react-toastify";

const fetchProducts = async () => {
  const res = await fetch("/digitalToolsData.json");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

function App() {
  const promiseProducts = fetchProducts();
  const [selectedTab, setSelectedTab] = useState("products");
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
      {/* Navbar Components  */}
      <Navbar selectedProducts={selectedProducts} />
      {/* Banner Components  */}
      <Banner />
      {/* Active User Section  */}
      <ActiveUser />
      {/* Digital Tools Section  */}
      <section>
        <div className="my-14">
          <div className="sectionHeader w-sm md:w-2xl font-bold mx-auto mt-8 mb-4 ">
            <h1>Premium Digital Tools</h1>
            <p>
              Choose from our curated collection of premium digital products
              designed <br /> to boost your productivity and creativity.
            </p>
          </div>
          <Tab
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            selectedProducts={selectedProducts}
          />
          {selectedTab === "products" ? (
            <div className="productsSection my-8">
              <Suspense
                fallback={
                  <span className="loading loading-spinner text-primary"></span>
                }
              >
                <DigitalProducts
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                  promiseProducts={promiseProducts}
                />
              </Suspense>
            </div>
          ) : (
            <div>
              <CartProducts
                setSelectedTab={setSelectedTab}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            </div>
          )}
        </div>
      </section>

      {/* Steps Section  */}
      <Steps />
      {/* Transparents Pricing Section  */}
      <Transparent />

      {/* React Toastify  */}
      <ToastContainer />
    </>
  );
}

export default App;

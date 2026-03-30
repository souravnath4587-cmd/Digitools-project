import { Suspense } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import ActiveUser from "./components/sections/ActiveUser";
import DigitalProducts from "./components/sections/DigitalProducts";
import Steps from "./components/sections/Steps";
import Transparent from "./components/transparents-pricing/Transparent";

const fetchProducts = async () => {
  const res = await fetch("/digitalToolsData.json");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

function App() {
  const promiseProducts = fetchProducts();

  return (
    <>
      {/* Navbar Components  */}
      <Navbar />
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
          <div className="sectionTab py-2 px-4 rounded-full flex flex-row justify-center items-center w-44 mx-auto shadow-2xl">
            <button className="btn btn-primary rounded-full border-0">
              Products
            </button>
            <button className="btn rounded-full border-0">Cart</button>
          </div>
          <div className="productsSection my-8">
            <Suspense fallback={"Product data is loading"}>
              <DigitalProducts promiseProducts={promiseProducts} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Steps Section  */}
      <Steps />
      {/* Transparents Pricing Section  */}
      <Transparent />
    </>
  );
}

export default App;

import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import ActiveUser from "./components/sections/ActiveUser";
import Steps from "./components/sections/Steps";
import Transparent from "./components/transparents-pricing/Transparent";

function App() {
  return (
    <>
      {/* Navbar Components  */}
      <Navbar />
      {/* Banner Components  */}
      <Banner />
      {/* Active User Section  */}
      <ActiveUser />

      {/* Steps Section  */}
      <Steps />
      {/* Transparents Pricing Section  */}
      <Transparent />
    </>
  );
}

export default App;

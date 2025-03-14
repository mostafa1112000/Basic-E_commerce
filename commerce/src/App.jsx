import Navbar from "./commponents/Navbar";
import Slider from "./commponents/Slider";
import { Routes, Route } from "react-router";
import About from "./commponents/about";
import ProductDetails from "./commponents/ProductDetails";
import ProudctsList from "./commponents/ProudctsList";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProudctsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

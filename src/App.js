import logo from "./logo.svg";
import "./App.css";
import TopNav from "./Components/TopNav";
import CatNav from "./Components/CatNav";
import MainComponent from "./Components/MainComponent";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      
      </Routes>
    </div>
  );
}

export default App;

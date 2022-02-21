import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Route } from "react-router-dom";
import { Products } from "./components/Products";
import { ProductDetail } from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;

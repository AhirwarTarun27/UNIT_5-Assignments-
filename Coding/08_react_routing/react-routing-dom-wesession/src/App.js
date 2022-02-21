import { About } from "./components/About";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

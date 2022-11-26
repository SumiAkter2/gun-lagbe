import "./Css/Style.css";
import React, { createContext, useState } from "react";
import Cards from "./Component/Cards";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./Component/Contact";
import About from "./Component/About";

export const CartContext = createContext();
function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <CartContext.Provider value={[guns, setGuns, cart, setCart]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;

import "./Css/Style.css";
import React, { createContext, useState } from "react";
import Cards from "./Component/Cards";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

export const CartContext = createContext();
function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[guns, setGuns, cart, setCart]}>
      <div>
        <Navbar />
        <Cards />
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;

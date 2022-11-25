import React, { useContext, useEffect } from "react";
import Card from "./Card";

import { CartContext } from "../App";
const Cards = () => {
  const [guns, setGuns] = useContext(CartContext);
  const [cart, setCart] = useContext(CartContext);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  const handleToCart = (gun) => {
    setCart([...cart, gun]);
  };

  return (
    <div>
      <div className="cards">
        {guns.map((gun) => (
          <Card gun={gun} key={gun.id} handleToCart={handleToCart} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

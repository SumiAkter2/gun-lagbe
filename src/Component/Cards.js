import React from "react";
import useHook from "../useHook";
import Card from "./Card";
import Navbar from "./Navbar";

const Cards = () => {
  // const [guns] = useHook();
  // const [cart, setCart] = useHook();
  // const handleToCard = (gun) => {
  //   const newCart = [...cart,gun];
  //   setCart(newCart);
  //   console.log(newCart);
  // };
  return (
    <div>
      <Navbar  />
      {/* <div className="cards">
        {guns.map((gun) => (
          <Card gun={gun} key={gun.id} handleToCard={handleToCard} />
        ))}
      </div> */}
    </div>
  );
};

export default Cards;

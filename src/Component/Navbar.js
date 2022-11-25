import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { GiAntiAircraftGun } from "react-icons/gi";
import { CartContext } from "../App";
const Navbar = () => {
  const [cart] = useContext(CartContext);
  return (
    <div className="nav-content">
      <h1>
        <GiAntiAircraftGun size={40} /> GUN LAGBE
      </h1>
      <ul>
        <li>
          <span>{cart.length}</span>
          <BsCart size={40} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

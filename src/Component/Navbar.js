import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { GiAntiAircraftGun } from "react-icons/gi";
import { CartContext } from "../App";


const Navbar = ({openModal}) => {
  const [cart] = useContext(CartContext);
  return (
    <div className="nav-content">
      <h1>
        <GiAntiAircraftGun size={40} /> GUN LAGBE
      </h1>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>
          <span>{cart.length}</span>
          <BsCart size={40} className='cart-logo' onClick={openModal}/>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

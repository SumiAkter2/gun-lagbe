import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { GiAntiAircraftGun } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { CartContext } from "../App";

const Navbar = ({ openModal }) => {
  const [cart] = useContext(CartContext);

  return (
    <div className="nav-content">
      <h1>
        <GiAntiAircraftGun size={40} /> GUN LAGBE
      </h1>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "Link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "Link")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "Link")}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "Link")}
        >
          LogIn
        </NavLink>
        <NavLink className="cart-logo">
          <span>{cart.length}</span>
          <BsCart size={40} onClick={openModal} />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;

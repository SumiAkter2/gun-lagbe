import React from "react";
import { BsCart } from "react-icons/bs";
import { GiAntiAircraftGun } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="nav-content">
      <h1>
        <GiAntiAircraftGun size={40} /> GUN LAGBE
      </h1>
      <ul>
        <li>
          <span>0</span>
          <BsCart size={40} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./header.css";
import basket from "#/basket.svg";
import logo from "#/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav >
        <ul className="ff2">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
        <div className="divBasket">
          <img src={basket} alt="" />
          <p className="ff1">Cart</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;

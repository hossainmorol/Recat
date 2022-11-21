import React from "react";
import "./Header.css";
import logo from "../../imges/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/shop">Shope</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/about"> About</a>
      </div>
    </nav>
  );
};

export default Header;

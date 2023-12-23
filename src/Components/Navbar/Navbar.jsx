import React, { useContext, useState } from "react";
import "./Navbar.css";

// ! Importing the icons from the Assets folder
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  // ! below we have used "getTotalCartItems" function logic from shopcontext component for changing the number from 0 to number of items add
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo images" />
        </Link>

        <h3>SHOPPING</h3>
        <p>MakeYourChoice</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "lightseagreen" }}
            to="/"
          >
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "lightseagreen" }}
            to="/mens"
          >
            Mens
          </Link>

          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          {" "}
          <Link
            style={{ textDecoration: "none", color: "lightseagreen" }}
            to="/womens"
          >
            {" "}
            Womens
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link
            style={{ textDecoration: "none", color: "lightseagreen" }}
            to="/kids"
          >
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

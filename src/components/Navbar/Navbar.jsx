import React, { useContext } from "react";

// use react-router Link or NavLink

import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css"

const Navbar = () => {
 const {isAuth,logout}=useContext(AuthContext)
 const {count}=useContext(CartContext)
 const handlelogout=()=>{

  logout()

}
  return (
    <div data-cy="navbar" className="yoyo">
      {!isAuth?<Link className="data" data-cy="navbar-home-link" to="/">Login</Link>:<Link className="data" data-cy="navbar-home-link" to="/products">Produts</Link>}
      <div className="car">
     <span data-cy="navbar-cart-items-count">Cart:{count}</span>
      <button data-cy="navbar-login-logout-button" className="but" onClick={handlelogout}>{isAuth?"Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;

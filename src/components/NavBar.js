import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import srlogo from "../images/srlogo-white.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img src={srlogo} alt="Surreal Estate logo" className="srlogo" />
      <h2 className="surreal-title">Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/add-property">
            Add A Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

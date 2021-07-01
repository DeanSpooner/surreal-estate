import React from "react";
import "../styles/NavBar.css";
import srlogo from "../images/srlogo-white.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img src={srlogo} alt="Surreal Estate logo" className="srlogo" />
      <h2 className="surreal-title">Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="/">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="/">Add A Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import "../styles/NavBar.css";
import srlogo from "../images/srlogo-white.png";

const NavBar = ({ onLogin, onLogout, userID }) => {
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
        <li className="navbar-links-item">
          {userID.id ? (
            <div className="facebook-container">
              <button
                className="facebook-login"
                type="button"
                onClick={onLogout}
              >
                Sign Out
              </button>
              <img src={userID.imgURL} alt="User" className="facebook-photo" />
            </div>
          ) : (
            <FacebookLogin
              appId="554621965721649"
              fields="name,email,picture"
              callback={onLogin}
              cssClass="facebook-login"
              textButton="Login"
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  userID: PropTypes.shape.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

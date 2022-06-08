import React from "react";
import "./navbar.scss";
import logo from "../../images/Aksu-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Navbar logo" /></Link>
      </div>
      <div className="links">
          <ul className="navbarNav">
              <li className="items">
                  <Link className="itemsLink" to="/">Asosiy</Link>
              </li>
              <li className="items">
                  <a className="itemsLink" href="#">Biz haqimizda</a>
              </li>
              <li className="items">
                  <a className="itemsLink" href="#">Menyu</a>
              </li>
              <li className="items">
                  <a className="itemsLink" href="#">Galareya</a>
              </li>
              <li className="items">
                  <Link className="itemsLink" to="/aloqa">Aloqa</Link>
              </li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;

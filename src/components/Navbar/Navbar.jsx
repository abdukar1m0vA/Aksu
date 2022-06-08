import React from "react";
import "./navbar.scss";
import logo from "../../images/Aksu-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
          <ul className="navbarNav">
              <li className="items">
                  <a className="itemsLink" href="#">Asosiy</a>
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
                  <a className="itemsLink" href="#">Aloqa</a>
              </li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;

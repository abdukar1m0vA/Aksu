import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../images/Aksu-logo.png";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { SideBar } from "./SideBar";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" activelink>
          <img src={logo} alt="Navbar logo" />
        </NavLink>
      </div>
      <div className="links">
        <ul className="navbarNav">
          <li className="items">
            <NavLink activestyle className="itemsLink" to="/">
              Asosiy
            </NavLink>
          </li>
          <li className="items">
            <NavLink activestyle className="itemsLink" to="/bizHaqimizda">
              Biz Haqimizda
            </NavLink>
          </li>
          <li className="items">
            <NavLink activestyle className="itemsLink" to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="items">
            <a className="itemsLink" href="#">
              Galareya
            </a>
          </li>
          <li className="items">
            <NavLink activestyle className="itemsLink" to="/aloqa">
              Aloqa
            </NavLink>
          </li>
          <li className="items" onClick={showSidebar}>
            <MenuIcon className="menuIcon" />
          </li>
        </ul>
      </div>
      <div className={sidebar ? "side-menu active" : "side-menu"}>
        <CloseIcon className="closeIcon" onClick={showSidebar} />
        <ul className="sideBarNav">
          {SideBar.map((item, index) => {
            return (
              <NavLink to={item.path}>
                <div key={index} className="sideBarLinks">
                  <h6>{item.title}</h6>
                </div>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Reveal } from "react-reveal";
import Footer from "../../components/Footer/Footer";
import "./header.scss";

const Header = () => {
  return (
    <>
    <div className="header">
      <Reveal effect="fadeInUp">
        <div className="textsArea">
          <h1 className="name">aksu restorani</h1>
          <p className="halalDesc">Halol milliy va yevropa taomlari</p>
          <button className="bandBtn">Band qilish</button>
        </div>
      </Reveal>
    </div>
    <Footer/>
    </>
  );
};

export default Header;

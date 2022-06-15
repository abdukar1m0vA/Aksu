import React from "react";
import { Reveal } from "react-reveal";
import Footer from "../../components/Footer/Footer";
import Menular from "../../components/MenuFoods/Menular";
import Navbar from "../../components/Navbar/Navbar";
import "./menu.scss"

const Menu = () => {
  return (
    <>
    <Navbar/>
      <div className="menu">
        <Reveal effect="fadeInUp">
          <div className="textsArea">
            <h1 className="name">taomlar menusi</h1>
            <p className="halalDesc">Milliy va yevropa taomlarini o’zingiz uchun kashf eting</p>
            <button className="bandBtn">Band qilish</button>
          </div>
        </Reveal>
      </div>
      <Menular/>
      <Footer />
    </>
  );
};

export default Menu;

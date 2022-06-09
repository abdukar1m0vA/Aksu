import React from "react";
import { Reveal } from "react-reveal";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./bizhaqimizda.scss"

const BizHaqimizda = () => {
  return (
    <>
        <Navbar/>
      <div className="bizhaqimizda">
        <Reveal effect="fadeInUp">
          <div className="textsArea">
            <h1 className="name">aksu restorani</h1>
            <p className="halalDesc">Halol milliy va yevropa taomlari</p>
            <button className="bandBtn">Band qilish</button>
          </div>
        </Reveal>
      </div>
      <Footer />
    </>
  );
};

export default BizHaqimizda;

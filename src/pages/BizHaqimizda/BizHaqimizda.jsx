import React from "react";
import { Reveal } from "react-reveal";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Haqida from "../../components/RestoranHaqida/Haqida";
import "./bizhaqimizda.scss";

const BizHaqimizda = () => {
  return (
    <>
      <Navbar />
      <div className="bizhaqimizda">
        <Reveal effect="fadeInUp">
          <div className="textsArea">
            <h1 className="name">aksu restorani haqida</h1>
            <p className="halalDesc">
              Restoranimiz haqida hammasini bilib oling
            </p>
            <button className="bandBtn">Band qilish</button>
          </div>
        </Reveal>
      </div>
      <Haqida/>
      <Footer />
    </>
  );
};

export default BizHaqimizda;

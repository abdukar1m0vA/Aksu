import React from "react";
import { Reveal } from "react-reveal";
import AloqaSection from "../../components/AloqaSection/AloqaSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./aloqa.scss";

const Aloqa = () => {
  return (
    <>
      <div className="aloqa">
        <Navbar />
        <Reveal effect="fadeInUp">
          <div className="textsArea">
            <h1 className="name">biz bilan aloqa</h1>
            <p className="halalDesc">
              Bizga murojaat qilib savollaringizga javob oling
            </p>
            <button className="bandBtn">Band qilish</button>
          </div>
        </Reveal>
      </div>
      <AloqaSection/>
      <Footer />
    </>
  );
};

export default Aloqa;

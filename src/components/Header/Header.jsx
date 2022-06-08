import React from "react";
import { Reveal } from "react-reveal";
import Section from "../AsosiySectionFirst/Section";
import "./header.scss";

const Header = () => {
  return (
    <div>
    <div className="header">
      <Reveal effect="fadeInUp">
        <div className="textsArea">
          <h1 className="name">aksu restorani</h1>
          <p className="halalDesc">Halol milliy va yevropa taomlari</p>
          <button className="bandBtn">Band qilish</button>
        </div>
      </Reveal>
    </div>
        <Section />
      </div>
  );
};

export default Header;

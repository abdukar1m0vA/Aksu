import React, { useState } from "react";
import { Reveal } from "react-reveal";
import RestoranHaqida from "../../components/AsosiySections/RestoranHaqida";
import Footer from "../../components/Footer/Footer";
import "./header.scss";
import items from "../../components/MenuFoods/allData";
import Button from "../../components/MenuFoods/Buttons";
import Menu from "../../components/MenuFoods/Menu";
import "../../components/MenuFoods/buttons.scss";
import BandQilish from "../../components/MenuFoods/BandQilish";
import { Link } from "react-router-dom";

const allCategories = [
  "Barchasi",
  ...new Set(items.map((item) => item.category)),
];

console.log(allCategories);

const Header = () => {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === "Barchasi") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };
  return (
    <>
      <div className="header">
        <Reveal effect="fadeInUp">
          <div className="textsArea">
            <h1 className="name">aksu restorani</h1>
            <p className="halalDesc">Halol milliy va yevropa taomlari</p>
            <Link to="bandQilish"><button className="bandBtn">Band qilish</button></Link>
          </div>
        </Reveal>
      </div>
      <RestoranHaqida />
      <div className="menular">
        <Button button={buttons} filter={filter} />
        <Menu menuItem={menuItem} />
      </div>
      <BandQilish/>
      <Footer />
    </>
  );
};

export default Header;

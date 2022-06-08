import React from "react";
import "./section.scss";
import section from "../../images/asosiysectionimg.png";

const Section = () => {
  return (
    <div className="section">
      <div className="section-left-side">
        <img src={section} alt="asosiysectionimg" />
      </div>
      <div className="section-right-side">
        <h1 className="section-right-side-title">Restoranimiz haqida</h1>
        <p className="section-right-side-description">
          Aksu bu halol milliy va yevropa taomlari restorani Bizda siz istagan
          taomingizni topishingiz mumkin. Stolni oldindan band qilish orqali siz
          uchrashuvni muvaffaqiyatli va ajoyib o’tkazishingiz mumkin.
        </p>
        <button className="section-right-side-btn">Band qilish</button>
      </div>
    </div>
  );
};

export default Section;

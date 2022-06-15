import React from "react";
import "./restoranHaqida.scss";
import image from "../../images/Asosiy-sect-image.png";
import { Link } from "react-router-dom";

const RestoranHaqida = () => {
  return (
    <div className="restoranHaqida">
      <div className="img">
        <img src={image} alt="Info_Image" />
      </div>
      <div className="desc">
        <h1>Restoranimiz haqida</h1>
        <p>
          Aksu bu halol milliy va yevropa taomlari restorani Bizda siz istagan
          taomingizni topishingiz mumkin. Stolni oldindan band qilish orqali siz
          uchrashuvni muvaffaqiyatli va ajoyib o’tkazishingiz mumkin.
        </p>
        <Link to="/bizHaqimizda">
          <button className="button">Batafsil</button>
        </Link>
      </div>
    </div>
  );
};

export default RestoranHaqida;

import React from "react";
import "./bandQilish.scss";
import image from "../../images/BandQilish-image.png";

const BandQilish = () => {
  return (
    <div id="bandQilish" className="band-qlish">
      <div className="texts">
        <h1>Stol band qilish</h1>
        <div className="long-inputs">
          <div className="first">
            <span>Ism</span>
            <input name="name" type="name" placeholder="Ismingizni yozing" />
          </div>
          <div className="first">
            <span>Tel:</span>
            <input
              name="phone"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="+998(__) ___-__-__"
            />
          </div>
        </div>
        <div className="short-inputs">
          <div className="descs">
            <label>Sana</label>
            <input
              type="date"
              id="start"
              name="trip-start"
              min="2022-01-01"
              max="2022-12-31"
              placeholder="2022-10-03"
            />
          </div>
          <div className="descs">
            <label>Vaqt</label>
            <input
              type="time"
              name="time"
              placeholder="19.00"
            />
          </div>
          <div className="desc">
            <label>Mehmonlar</label>
            <input
              type="count"
              name="count"
              placeholder="4 Kishi"
            />
          </div>
        </div>
        <button className="btna btn-outline-light">Band Qilish</button>
      </div>
      <div className="img">
        <img src={image} alt="Band_Qilish" />
      </div>
    </div>
  );
};

export default BandQilish;

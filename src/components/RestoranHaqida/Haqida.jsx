import React from "react";
import "./haqida.scss";
import { Player } from "video-react";
import Chustiy from "../../images/Chustiy-pic.png";
import pic from "../../images/Haqida-pic.png";
import { Reveal } from "react-reveal";

const Haqida = () => {
  return (
    <div className="haqida">
      <Reveal effect="fadeinup">
        <div className="texts">
          <h1>Restoranimiz haqida</h1>
          <div className="desc">
            <p className="haqidaDesc">
              Aksu Shedevr filialimizda o’zingizning yoki farzandlaringizni
              tug’ilgan kunini tantanali va esda qolarli o’tkazish uchun ajoyib
              imkoniyat!
            </p>
            <p className="haqidaDesc">
              Aksu restoranlarining barcha filiallari o’zida milliylikni aks
              etgan bejirim va chiroyli interyer dizaynga ega!
            </p>
          </div>
        </div>
      </Reveal>
      <Player
        className="player"
        autoPlay="true"
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
      <div className="ender">
        <div className="img">
          <img src={Chustiy} alt="" />
        </div>
        <div className="texts-img">
          <h1>Bizning jamoa</h1>
          <p>
            Bizda ko’p yillik tajribaga ega oshpazlar jamoasi ishlashadi.
            Dunyodagi eng ko’p oshni tayyorlab Ginnes rekordlar kitobiga kirgan
            Baxriddin Chustiy oshpazlar jamosiga boshchilik qiladi.
          </p>
          <img src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Haqida;

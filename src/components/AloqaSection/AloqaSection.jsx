import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import "./aloqaSection.scss";
import { Reveal } from "react-reveal";

const AloqaSection = () => {
  return (
    <div className="aloqaSection">
      <Reveal effect="fadeInUp">
        <div className="aloqaInfo">
          <h1>Aloqa</h1>
          <div className="mt-5 location">
            <LocationOnOutlinedIcon />
            <p>
              Toshkent shahri Yunusobod tumani <br /> Shota Rustaveli ko’chasi
              30-uy
            </p>
          </div>
          <div className="phone">
            <LocalPhoneOutlinedIcon />
            <p>
             <a href="tel: +998 99 801 01 02"> +998 99 801 01 02</a> <br />
              <a href="tel: +998 99 801 01 02">+998 99 801 01 02</a>
            </p>
          </div>
          <div className="cklock">
            <AccessTimeOutlinedIcon />
            <p className="ms-2"> Dushanba-Shanba: 09:00 - 23:00</p>
          </div>
        </div>
      </Reveal>
      <div className="aloqaMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.5341787031152!2d69.21371951468616!3d41.29724150954296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba0e6a03275%3A0xe466670d37a6aff0!2z0JrQsNGE0LUgQUtTVQ!5e0!3m2!1sru!2s!4v1654763772092!5m2!1sru!2s"
          loading="leazy"
        ></iframe>
      </div>
    </div>
  );
};

export default AloqaSection;

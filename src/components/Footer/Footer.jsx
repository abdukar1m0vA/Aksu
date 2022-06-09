import React from 'react'
import logo from "../../images/Aksu-logo.png"
import "./footer.scss"
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo">
            <img src={logo} alt="Footer Logo" />
        </div>
        <div className="text">
            <p>Barcha huquqlar himoyalangan <br /> @2021 Aksu by chustiy</p>
        </div>
        <div className="icons">
          <button><TelegramIcon className='icons'/></button>
          <button><InstagramIcon className='icons'/></button>
          <button><FacebookIcon className='icons'/></button>
        </div>
    </div>
  )
}

export default Footer;
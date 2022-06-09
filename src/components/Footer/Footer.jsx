import React from 'react'
import logo from "../../images/Aksu-logo.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo">
            <img src={logo} alt="Footer Logo" />
        </div>
        <div className="text">
            <p>Barcha huquqlar himoyalangan <br /> @2021 Aksu by chustiy</p>
        </div>
    </div>
  )
}

export default Footer;
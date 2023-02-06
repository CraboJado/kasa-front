import React from 'react';
import logo from '../assets/images/footerLOGO.png'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer>
        <div className="footer-logo">
            <img src={logo} alt="logo"/>
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

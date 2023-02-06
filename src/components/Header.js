import React from 'react';
import logo from '../assets/images/LOGO.png'
import '../styles/Header.css'

export default function Header() {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="kasa logo"/>
        </div>
        <nav className="header-nav">
            <a>Accueil</a>
            <a>A Props</a>
        </nav>
    </header>
  )
}

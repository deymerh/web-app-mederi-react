import React from 'react';
import '../styles/universal.css';
import '../styles/header.css';
import logo from '../assets/1-logo-mederi.png';
import iconfb from '../assets/facebook-f-brands.svg';
import iconins from '../assets/instagram-brands.svg';

export const Header = ()=>{
  return (
    <div className="header">
       <div className="header__logo">
          <figure className="logo__img">
            <a href="index.html">
              <img src={logo} alt="mederi-logo" />
            </a>
          </figure>
        </div>
        <div className="header__menu">
            <nav>
                <ul>
                  <li><a href="quienes-somos.html">Conócenos</a></li>
                  <li><a href="servicios.html">Nuestros Servicios</a></li>
                  <li><a href="agenda.html">Agenda tu Cita</a></li>
                  <li><a href="contacto.html">Contáctanos</a></li>
                  <li><a href="/"><img src={iconfb} alt="facebook-icon" /></a></li>
                  <li><a href="/"><img src={iconins} alt="instagram-icon" /></a></li>
                  <li><a href="/"><i className="fas fa-search"></i></a></li>
                  <li><a href="/"><i className="fas fa-user-clock"></i></a></li>
                </ul>
            </nav>
        </div>
    </div>
  );
}
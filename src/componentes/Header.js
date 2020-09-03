import React from 'react';
import '../styles/header.css'
import logo from '../assets/1-logo-mederi.png';
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
                  <li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
                  <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="/"><i className="fas fa-search"></i></a></li>
                  <li><a href="/"><i className="fas fa-user-clock"></i></a></li>
                </ul>
            </nav>
        </div>
    </div>
  );
}
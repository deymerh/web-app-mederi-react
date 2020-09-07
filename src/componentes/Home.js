import React from 'react';
import '../styles/home.css';
import '../styles/universal.css';
import hero1 from '../assets/hero-1.jpg';
import equipoMedico from '../assets/equipo_medico.png';

const Home = ()=> {
  return (
    <div>
      <section className="hero">
        <img src={hero1} alt="heroimage" />
    </section>
    <section className="search">
        <div className="search__input">
            <input type="text" placeholder="Elige una especialidad ..." />
        </div>
        <div className="search__button">
            <button>Buscar</button>
        </div>
    </section>
    <section className="hero__content">
        <h2 className="hero__title">Nuestra Prioridad</h2>
        <p className="hero__subtitle">Es tu bienestar</p>
        <button className="hero__button"><a href="agenda.html">Conoce al Equipo Médico</a></button>
    </section>
    <section className="cards">
        <div className="cards__content intercaled">
            <div className="content__title">
                <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="content__subtitle">
                <h4>Línea Nacional de Emergencias</h4>
            </div>
            <div className="content__content">
                <p>Contamos con un servicio 24/7, cuando lo requieras, llámanos, nuestros asesores harán el tratamiento de tu emergencia de forma profesional, con protocolos de salud aplicados y rápidamente.</p>
            </div>
            <div className="content__button">
                <button>Conoce Más</button>
            </div>
        </div>
        <div className="cards__content">
            <div className="content__title">
                <i className="far fa-calendar-minus"></i>
            </div>
            <div className="content__subtitle">
                <h4>Agenda tu Cita</h4>
            </div>
            <div className="content__content">
                <p>Contamos con un diverso portafolio de servicios ajustado a diferents horarios con el fin de que no pierdas tu cita en ningún momento, también podemos reagendar tu cita en caso de que lo requieras.</p>
            </div>
            <div className="content__button">
                <button>Conoce Más</button>
            </div>
        </div>
        <div className="cards__content intercaled">
            <div className="content__title">
                <i className="fas fa-laptop-house"></i>
            </div>
            <div className="content__subtitle">
                <h4>Virtual o Presencial</h4>
            </div>
            <div className="content__content">
                <p>Puedes agendar tu cita y asistir de forma remota, con un computador, una conexión de internet, debes contar con cámara habilitada y micrófono, o si lo prefieres, puedes acercarte a una de nuestras sedes.</p>
            </div>
            <div className="content__button">
                <button>Conoce Más</button>
            </div>
        </div>
    </section>
    <section className="information">
        <div className="information__img">
            <figure className="img">
                <img src={equipoMedico} alt="equipo_medico" />
            </figure>
        </div>
        <div className="information__description">
            <h2 className="description__title">Nuestra calidad nos respalda</h2>
            <h4 className="description__subtitle">En Mederi trabajamos 24/7 por ti</h4>
            <p className="description__text">Nuestros profesionales están con la total disponibilidad para atender tus citas médicas a la hora que nos indiques, comienza ya y programa tu cita de inmediato, conoce y haz parte de la experiencia Mederi.</p>
            <ul className="description__list">
                <li>Consultas Médicas</li>
                <li>Análisis de Laboratorio</li>
                <li>Diagnóstico Clínico</li>
            </ul>
            <button className="description__button">Portafolio Servicios</button>
        </div>
    </section>
    </div>
  );
}
export default Home;
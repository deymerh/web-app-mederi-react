import React from 'react';
import '../styles/universal.css';
import '../styles/schedule.css';
import doctora from '../assets/doctora.png';

export const Schedule = ()=>{
    return (
        <div>
            <section className="doctor">
                <div className="doctor__description">
                    <div className="description">
                        <div className="description__img">
                            <figure>
                                <img src={doctora} alt="profile-doctor" />
                            </figure>
                        </div>
                        <div className="description__first">
                            <h3 className="description__first-name"><a href="/"><i className="fas fa-stethoscope"></i>Dra. Maria Luisa Polanco Cortés</a></h3>
                            <h4 className="description__first-ocupation">Medico General | Cardiologa</h4>
                            <div className="description__calification">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="doctor__services">
                        <h3 className="doctor__services-text">Servicios disponibles:</h3>
                        <ul>
                            <li>Medicina General</li>
                            <li>Ortopedia</li>
                            <li>Pediatría</li>
                            <li>Cardiología</li>
                        </ul>
                    </div>
                    <div className="doctor__channel">
                        <h3>Modalidades de atención:</h3>
                        <p><i className="fas fa-desktop"></i>En Línea</p>
                        <p><i className="far fa-building"></i>Presencial (Sede en Bogota)</p>
                    </div>
                    <div className="doctor__price">
                        <p>Consulta en línea: <strong>$55.000</strong></p>
                        <p>Consulta presencial: <strong>$65.000</strong></p>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="doctor__schedule">
                    <h3><i className="far fa-calendar-alt"></i>Horarios Disponible Citas</h3>
                    <button className="hero__button"><i className="fas fa-desktop"></i>Sep | 03 | 08:45</button>
                    <button className="hero__button"><i className="fas fa-desktop"></i>Sep | 08 | 14:30</button>
                    <button className="hero__button"><i className="fas fa-desktop"></i>Sep | 22 | 11:30</button>
                    <button className="hero__button"><i className="far fa-building"></i>Sep | 28 | 14:30</button>
                    <button className="hero__button"><i className="far fa-building"></i>Sep | 30 | 20:00</button>
                </div>
            </section>
            <hr className="hr"/>
        </div>
    );
}
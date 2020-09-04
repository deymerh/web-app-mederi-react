import React from 'react';
import '../styles/universal.css';
import '../styles/schedule.css';
import doctora from '../assets/doctora.png';

export const Schedule = ()=>{
    return (
        <div>
            <section class="doctor">
                <div class="doctor__description">
                    <div class="description">
                        <div class="description__img">
                            <figure>
                                <img src={doctora} alt="profile-doctor" />
                            </figure>
                        </div>
                        <div class="description__first">
                            <h3 class="description__first-name"><a href="/"><i class="fas fa-stethoscope"></i>Dra. Maria Luisa Polanco Cortés</a></h3>
                            <h4 class="description__first-ocupation">Medico General | Cardiologa</h4>
                            <div class="description__calification">
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="doctor__services">
                        <h3 class="doctor__services-text">Servicios disponibles:</h3>
                        <ul>
                            <li>Medicina General</li>
                            <li>Ortopedia</li>
                            <li>Pediatría</li>
                            <li>Cardiología</li>
                        </ul>
                    </div>
                    <div class="doctor__channel">
                        <h3>Modalidades de atención:</h3>
                        <p><i class="fas fa-desktop"></i>En Línea</p>
                        <p><i class="far fa-building"></i>Presencial (Sede en Bogota)</p>
                    </div>
                    <div class="doctor__price">
                        <p>Consulta en línea: <strong>$55.000</strong></p>
                        <p>Consulta presencial: <strong>$65.000</strong></p>
                    </div>
                </div>
                <hr class="hr"/>
                <div class="doctor__schedule">
                    <h3><i class="far fa-calendar-alt"></i>Horarios Disponible Citas</h3>
                    <button class="hero__button"><i class="fas fa-desktop"></i>Sep | 03 | 08:45</button>
                    <button class="hero__button"><i class="fas fa-desktop"></i>Sep | 08 | 14:30</button>
                    <button class="hero__button"><i class="fas fa-desktop"></i>Sep | 22 | 11:30</button>
                    <button class="hero__button"><i class="far fa-building"></i>Sep | 28 | 14:30</button>
                    <button class="hero__button"><i class="far fa-building"></i>Sep | 30 | 20:00</button>
                </div>
            </section>
            <hr class="hr"/>
        </div>
    );
}
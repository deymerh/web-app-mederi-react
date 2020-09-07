import React from 'react';
import '../styles/universal.css';
import '../styles/doctor.css';
import doctor from '../assets/doctor-luis.png';

export const Doctor = ()=>{
    return (
        <div>
         <section class="doctor__detail">
            <div class="doctor__detail-description">
                <div class="detail">
                    <div class="description__img">
                        <figure>
                            <img src={doctor} alt="profile-doctor" />
                        </figure>
                    </div>
                    <div class="description__first">
                        <h3 class="description__first-name"><i class="fas fa-stethoscope"></i>Dr. Luis Alfonso Mateus Osorio</h3>
                        <h4 class="description__first-ocupation">Medico General | Cardiologa | Neurólogo | Gastroenterólogo</h4>
                    </div>
                </div>
                <div class="work">
                    <div class="work__title">
                        <h2>Experiencia</h2>
                    </div>
                    <div class="work__text">
                        <h3><i class="far fa-address-card"></i>Sobre mi:</h3>
                        <p>Soy doctor egresado de la Universidad Nacional de Colombia, especialista en cardiología, neurología y gastroentrologia de la universidad de Michigan USA con una ocupación laboral de más de 15 años en el sector trabajando a nivel nacional
                            en ciudades principales de Colombia.</p>
                    </div>
                </div>
                <div class="work">
                    <div class="work__title">
                        <h3><i class="far fa-star"></i>Especialista en:</h3>
                    </div>
                    <div class="work__text">
                        <ul>
                            <li>Medicina General</li>
                            <li>Cardiología</li>
                            <li>Gastroenterología</li>
                            <li>Neurología</li>
                        </ul>
                    </div>
                </div>
                <div class="work">
                    <div class="work__title">
                        <h3><i class="fas fa-globe"></i>Idiomas:</h3>
                    </div>
                    <div class="work__text">
                        Español
                    </div>
                </div>
                <div class="work">
                    <div class="work__title">
                        <h3><i class="fas fa-university"></i>Universidades:</h3>
                    </div>
                    <div class="work__text">
                        <ul>
                            <li>Universidad Nacional de Colombia</li>
                            <li>Universidad de Michigan</li>
                        </ul>
                    </div>
                </div>
                <div class="work">
                    <div class="work__title">
                        <h3><i class="fas fa-user-md"></i>Experiencia Laboral:</h3>
                    </div>
                    <div class="work__text">
                        <ul>
                            <li>Hospital Santa Clara</li>
                            <li>Hospital Barranquilla</li>
                            <li>Hospital Mederi</li>
                            <li>Hospital Cardiovascular del Niño</li>
                            <li>Clínica Country</li>
                            <li>Hosital Lili del Valle</li>
                        </ul>
                    </div>
                </div>
                <div class="work">
                    <div class="work__title">
                        <h3><i class="fas fa-virus"></i>Enfermedades tratadas:</h3>
                    </div>
                    <div class="work__text">
                        <ul>
                            <li>Cardiovasculares</li>
                            <li>Renales</li>
                            <li>Respiratorias</li>
                            <li>Afecciones del colon</li>
                            <li>Diversas afecciones estomacales</li>
                            <li>Lesiones Neuronales</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="doctor__detail-schedule">
                <div class="doctor__schedule-detail">
                    <h3><i class="far fa-calendar-alt"></i>Horarios Disponible Citas</h3>
                    <button class="hero__button"><i class="far fa-building"></i>Sep | 01 | 09:30</button>
                    <button class="hero__button"><i class="far fa-building"></i>Sep | 10 | 12:30</button>
                    <button class="hero__button"><i class="far fa-building"></i>Sep | 22 | 07:00</button>
                </div>
            </div>
        </section>
        <section class="bottom">
            <button class="hero__button">Volver</button>
        </section>
    </div>
    );
}
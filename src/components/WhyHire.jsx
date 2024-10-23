import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import imgMERN from '../assets/yo-codeando.png'; 
import './WhyHire.css';

const WhyHire = () => {
    return (
        <div className="why-hire-section">
          <div className="text-content">
            <h2>¿Por Qué Contratar Mis Servicios?</h2>
            <p>
              <FontAwesomeIcon icon={faCode} size="lg" />
              <strong> Desarrollo Fullstack MERN:</strong> Manejo el stack MERN (MongoDB, Express, React, Node.js) para crear aplicaciones web robustas y eficientes, desarrollando tanto el frontend como el backend para una integración perfecta.
            </p>
            <p>
              <FontAwesomeIcon icon={faLightbulb} size="lg" />
              <strong> Animaciones Interactivas:</strong> Utilizo GSAP, AnimeJS y Framer Motion para crear animaciones que mejoran la experiencia del usuario, haciendo interfaces más atractivas y dinámicas.
            </p>
            <p>
              <FontAwesomeIcon icon={faDatabase} size="lg" />
              <strong> Experiencia en Backend:</strong> Manejo datos eficientemente y resuelvo problemas complejos de software, asegurando que tu aplicación funcione sin problemas.
            </p>
          </div>
          <div className="image-content">
            <img src={imgMERN} alt="MERN Stack" loading="lazy" />
          </div>
        </div>
      );      
};

export default WhyHire;

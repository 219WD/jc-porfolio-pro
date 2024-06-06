import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './About.css'
import Responsive from '../components/Responsive'
import Skills from '../components/Skills'
import WhyHire from '../components/WhyHire';
import Slider from '../components/Slider'
import AboutMe from '../components/AboutMe';

const About = () => {
  const reasons = [
    {
      icon: faLaptopCode,
      title: "Presencia Online",
      description: "Tener una página web te permite tener una presencia constante y accesible en línea, lo que mejora tu visibilidad y alcance.",
    },
    {
      icon: faChartLine,
      title: "Crecimiento del Negocio",
      description: "Una página web puede impulsar tu negocio, atrayendo nuevos clientes y facilitando la comunicación y las ventas.",
    },
    {
      icon: faMobileAlt,
      title: "Accesibilidad",
      description: "Una web bien diseñada es accesible desde cualquier dispositivo, permitiendo a los usuarios acceder a tu contenido en cualquier momento y lugar.",
    },
  ];

  return (
    <div className='page-content'>
      <Responsive />
      <Slider />
      <WhyHire />
      <div className='hero'>
        <div className="why-web-section">
          {reasons.map((reason, index) => (
            <div key={index} className="glass-card">
              <FontAwesomeIcon icon={reason.icon} size="3x" />
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Skills />
      <AboutMe />
    </div>
  )
}

export default About
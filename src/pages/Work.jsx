import React, { useEffect } from 'react';
import Marquee from "../components/Marquee";
import Proyects from "../components/Proyects"
import './Work.css'
import jsIcon from '../assets/javascript-1.svg';
import nodeJs from '../assets/nodejs-icon.svg';
import react from '../assets/react-2.svg';
import mongoDb from '../assets/mongodb-icon-1.svg';
import express from '../assets/express-js.png';

const Work = () => {
  const spans = ["—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"];
  const text = "¡Proyectos!";
  const skills = [
    { name: 'JS', image: jsIcon },
    { name: 'Node.js', image: nodeJs },
    { name: 'React', image: react },
    { name: 'MongoDb', image: mongoDb },
    { name: 'Express', image: express },
  ];

  useEffect(() => {
    const letters = document.querySelectorAll('.hero-title span');
    let delay = 0;
    letters.forEach((letter) => {
      if (letter.textContent === ' ') {
        letter.style.width = '0.5rem'; 
        return;
      }
      letter.style.animationDelay = `${delay}s`;
      delay += 0.05;
    });
  }, []);

  return (
    <div className='page-content'>
      <div className="hero-proyects">
        <h1 className="hero-title">
          {Array.from("Soy un programador Fullstack MERN").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
        <div className="skills-icons">
          {skills.map((skill, index) => (
            <img 
              key={index} 
              src={skill.image} 
              alt={skill.name} 
              className="skill-icon bounce"
            />
          ))}
        </div>
        <h2 className="fade-in">Conoce un poco más de mi trabajo</h2>
      </div>
      <Marquee text={text} spans={spans} />
      <Proyects />
    </div>
  );
};

export default Work;

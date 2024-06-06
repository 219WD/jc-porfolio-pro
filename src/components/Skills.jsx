import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { gsap } from 'gsap';
import htmlIcon from '../assets/html-1.svg';
import cssIcon from '../assets/css-3.svg';
import jsIcon from '../assets/javascript-1.svg';
import nodeJs from '../assets/nodejs-icon.svg';
import react from '../assets/react-2.svg';
import mongoDb from '../assets/mongodb-icon-1.svg';
import git from '../assets/git-icon.svg';
import bootstrap from '../assets/bootstrap-5-1.svg';
import gsapIcon from '../assets/gsap-greensock.svg';
import express from '../assets/express-js.png';

const Skills = () => {
  const skills = [
    { name: 'HTML', image: htmlIcon },
    { name: 'CSS', image: cssIcon },
    { name: 'JS', image: jsIcon },
    { name: 'Node.js', image: nodeJs },
    { name: 'React', image: react },
    { name: 'MongoDb', image: mongoDb },
    { name: 'Git', image: git },
    { name: 'Bootstrap', image: bootstrap },
    { name: 'Gsap', image: gsapIcon },
    { name: 'Express', image: express },
  ];

  const tl = useRef([]);

  useEffect(() => {
    tl.current.forEach((el, index) => {
      gsap.fromTo(el, 
        { strokeDashoffset: 1000 }, 
        { strokeDashoffset: 0, duration: 2, delay: index * 0.3, ease: 'power2.out' }
      );
    });
  }, []);

  return (
    <section className="skills-section">
      <div className="title-section">
        <h2>Habilidades</h2>
        <p>Estas son mis habilidades que aprendí a lo largo de todo mi proceso de aprendizaje.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
          >
            <img 
              src={skill.image} 
              alt={skill.name} 
              className="skill-icon" 
              ref={el => (tl.current[index] = el)} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
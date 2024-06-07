import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillRefs = useRef([]);
  const iconRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((el, index) => {
      if (el) {
        const tl4 = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 95%", 
            end: "bottom 5%", 
            toggleActions: "play none none reverse",
          }
        });

        tl4.fromTo(el, 
          { opacity: 0, y: 50 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: 'power2.out',
          }
        ).fromTo(iconRefs.current[index], 
          { opacity: 0, scale: 0.5 }, 
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.5, 
            ease: 'power2.out',
          }, 
          "-=0.5"
        );
      }
    });
  }, []);

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

  return (
    <section className="skills-section">
      <div className="title-section">
        <h2>Habilidades</h2>
        <p>Estas son mis habilidades, que adquiri a lo largo de todo mi proceso de aprendizaje.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card" 
            ref={el => (skillRefs.current[index] = el)}
          >
            <img 
              src={skill.image} 
              alt={skill.name} 
              className="skill-icon" 
              ref={el => (iconRefs.current[index] = el)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

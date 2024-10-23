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
import sql from '../assets/database-sql-svgrepo-com.png';
import aws from '../assets/aws-2.svg';
import wordpress from '../assets/wordpress-icon-1.svg';
import npm from '../assets/npm.svg';
import postman from '../assets/postman.svg';
import trello from '../assets/trello.svg';
import slack from '../assets/slack-new-logo.svg';
import ps from '../assets/photoshop-cc-4.svg';
import ai from '../assets/adobe-illustrator-cs6.svg';
import VSC from '../assets/visual-studio-code-1.svg';

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
    { name: 'Express', image: express },
    { name: 'SQL', image: sql },
    { name: 'AWS', image: aws },
    { name: 'Postman', image: postman },
    { name: 'Gsap', image: gsapIcon },
    { name: 'Bootstrap', image: bootstrap },
    { name: 'Wordpress', image: wordpress },
    { name: 'npm', image: npm },
    { name: 'Git', image: git },
    { name: 'Trello', image: trello },
    { name: 'Slack', image: slack },
    { name: 'PS', image: ps },
    { name: 'AI', image: ai },
    { name: 'VSC', image: VSC },
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
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

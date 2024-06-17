import React, { useEffect, useRef } from 'react';
import './Proyects.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import proyecto1 from '../assets/Captura de pantalla_2-6-2024_185612_stockmanager-oficial.vercel.app.jpeg';
import proyecto2 from '../assets/Captura de pantalla_2-6-2024_185319_mr-contables.vercel.app.jpeg';
import proyecto3 from '../assets/Captura de pantalla_2-6-2024_185527_ntesteticaysalud.vercel.app.jpeg';
import proyecto4 from '../assets/Captura de pantalla_2-6-2024_19043_jlslmovies.netlify.app.jpeg';
import proyecto5 from '../assets/Captura de pantalla_2-6-2024_1927_localdecomida.netlify.app.jpeg';
import proyecto6 from '../assets/Captura de pantalla_2-6-2024_19519_doncanepabarbershop.netlify.app.jpeg';
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef([]);

  useEffect(() => {
    projectsRef.current.forEach((el, index) => {
      gsap.fromTo(el,
        { y: 30, opacity: 0.5 },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "bottom 5%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  const projects = [
    { title: 'Proyecto 1', image: proyecto1, link: 'https://stockmanager-oficial.vercel.app/' },
    { title: 'Proyecto 2', image: proyecto2, link: 'https://mr-contables.vercel.app/' },
    { title: 'Proyecto 3', image: proyecto3, link: 'https://ntesteticaysalud.vercel.app/' },
    { title: 'Proyecto 4', image: proyecto4, link: 'https://jlslmovies.netlify.app/' },
    { title: 'Proyecto 5', image: proyecto5, link: 'https://localdecomida.netlify.app/' },
    { title: 'Proyecto 6', image: proyecto6, link: 'https://doncanepabarbershop.netlify.app/' }
  ];

  return (
    <section className="projects-section">
      <div className="title-section">
        <h2>Mis Proyectos</h2>
        <p className='parrafo'>Realice estos proyectos para practicar en diferentes etapas de mi proceso como desarrollador full stack.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            ref={el => projectsRef.current[index] = el}
          >
            <div className="project-image-container">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="project-image" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom">
        <a href="/work" className='button-proyects'>Projects</a>
        <div className="icons">
          <img src={icon2} alt="" className='icon-brutalism' />
          <img src={icon1} alt="" className='icon-brutalism' />
          <img src={icon3} alt="" className='icon-brutalism' />
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import './Projects.css';
import proyecto1 from '../assets/Captura de pantalla_2-6-2024_185612_stockmanager-oficial.vercel.app.jpeg';
import proyecto2 from '../assets/Captura de pantalla_2-6-2024_185319_mr-contables.vercel.app.jpeg';
import proyecto3 from '../assets/Captura de pantalla_2-6-2024_185527_ntesteticaysalud.vercel.app.jpeg';
import proyecto4 from '../assets/Captura de pantalla_2-6-2024_19043_jlslmovies.netlify.app.jpeg';
import proyecto5 from '../assets/Captura de pantalla_2-6-2024_1927_localdecomida.netlify.app.jpeg';
import proyecto6 from '../assets/Captura de pantalla_2-6-2024_19519_doncanepabarbershop.netlify.app.jpeg';

const Projects = () => {
  const projects = [
    { title: 'Proyecto 1', image: proyecto1, link: 'https://stockmanager-oficial.vercel.app/' },
    { title: 'Proyecto 2', image: proyecto2, link: 'https://mr-contables.vercel.app/' },
    { title: 'Proyecto 3', image: proyecto3, link: 'https://ntesteticaysalud.vercel.app/' },
    { title: 'Proyecto 4', image: proyecto4, link: 'https://jlslmovies.netlify.app/' },
    { title: 'Proyecto 5', image: proyecto5, link: 'https://localdecomida.netlify.app/' },
    { title: 'Proyecto 6', image: proyecto6, link: 'https://doncanepabarbershop.netlify.app/' }
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;

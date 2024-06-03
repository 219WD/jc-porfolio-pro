import React from 'react';
import './Proyects.css';

const Projects = () => {
    const projects = [
        { title: 'Proyecto 1', image: '/src/assets/Captura de pantalla_2-6-2024_185612_stockmanager-oficial.vercel.app.jpeg', link: 'https://stockmanager-oficial.vercel.app/' },
        { title: 'Proyecto 2', image: '/src/assets/Captura de pantalla_2-6-2024_185319_mr-contables.vercel.app.jpeg', link: 'https://mr-contables.vercel.app/' },
        { title: 'Proyecto 3', image: '/src/assets/Captura de pantalla_2-6-2024_185527_ntesteticaysalud.vercel.app.jpeg', link: 'https://ntesteticaysalud.vercel.app/' },
        { title: 'Proyecto 4', image: '/src/assets/Captura de pantalla_2-6-2024_19043_jlslmovies.netlify.app.jpeg', link: 'https://jlslmovies.netlify.app/' },
        { title: 'Proyecto 5', image: '/src/assets/Captura de pantalla_2-6-2024_1927_localdecomida.netlify.app.jpeg', link: 'https://localdecomida.netlify.app/' },
        { title: 'Proyecto 6', image: '/src/assets/Captura de pantalla_2-6-2024_19519_doncanepabarbershop.netlify.app.jpeg', link: 'https://doncanepabarbershop.netlify.app/' }
    ];

    return (
        <section className="projects-section">
            <div className="title-section">
            <h2>Mis Proyectos</h2>
            <p className='parrafo'>Realice estos proyectos para practicar en diferentes etapas de mi proceso como desarrollador full stack.</p>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image-container">
                            <a href={project.link} target="_blank"><img src={project.image} alt={project.title} className="project-image" /></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

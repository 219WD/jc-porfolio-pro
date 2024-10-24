import React from 'react';
import './ProjectCard.css';
import htmlIcon from '../assets/html-1.svg';
import cssIcon from '../assets/css-3.svg';
import jsIcon from '../assets/javascript-1.svg';
import nodeJs from '../assets/nodejs-icon.svg';
import reactIcon from '../assets/react-2.svg';
import mongoDb from '../assets/mongodb-icon-1.svg';
import git from '../assets/git-icon.svg';
import bootstrap from '../assets/bootstrap-5-1.svg';
import gsapIcon from '../assets/gsap-greensock.svg';
import express from '../assets/express-js.png';
import proyecto1 from '../assets/Captura de pantalla_2-6-2024_185612_stockmanager-oficial.vercel.app.jpeg';
import proyecto2 from '../assets/Captura de pantalla_2-6-2024_185319_mr-contables.vercel.app.jpeg';
import proyecto3 from '../assets/Captura de pantalla_2-6-2024_185527_ntesteticaysalud.vercel.app.jpeg';
import proyecto4 from '../assets/Captura de pantalla_2-6-2024_19043_jlslmovies.netlify.app.jpeg';
import proyecto5 from '../assets/landing-muebles.png';
import proyecto6 from '../assets/Captura de pantalla_20-6-2024_183145_mentalpeace-mkt.vercel.app.jpeg';
import proyecto7 from '../assets/Captura de pantalla_17-10-2024_18181_127.0.0.1.png'
import proyecto8 from '../assets/Captura de pantalla_23-10-2024_162855_219labs.vercel.app.jpeg'
import proyecto9 from '../assets/Captura de pantalla_17-10-2024_181626_ktfcrew.vercel.app.jpeg'
import proyecto10 from '../assets/Captura de pantalla_17-10-2024_181252_magnoly.vercel.app.png'



const projects = [
    {
        image: proyecto1,
        title: 'Stock Manager',
        description: 'Solucion a problema de control de vencimiento de stock para empresas. Surgio de una necesidad real que observé mientras trabajaba en la distribuidora de alimentos Fiducia. Noté que tenían dificultades en el control de vencimiento de sus productos. Dedicí intervenir desarrollando una app responsive para controlar el vencimiento de los productos desde la comodidad de un celular o una computadora de escritorio.',
        technologies: [
            { name: 'MongoDB', icon: mongoDb },
            { name: 'Express', icon: express },
            { name: 'React', icon: reactIcon },
            { name: 'NodeJS', icon: nodeJs },
            { name: 'Javascript', icon: jsIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'GitHub', icon: git },
        ],
        link: 'https://stockmanager-oficial.vercel.app/'
    },
    {
        image: proyecto6,
        title: 'Mental Peace',
        description: 'Landing page con boton a whatsapp, redes de contacto, videos y testimonios reales. Animaciones con GSAP para mejorar la experiencia del usuario.',
        technologies: [
            { name: 'React', icon: reactIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'Javascript', icon: jsIcon },
            { name: 'GSAP', icon: gsapIcon },
        ],
        link: 'https://mentalpeace-mkt.vercel.app/'
    },
    {
        image: proyecto5,
        title: 'Diseñador de Muebles',
        description: 'Landing page moderna con animaciones de Scrolltrigger para diseñador de muebles, con breve historia, descripcion de productos, portafolio de trabajos y redes sociales.',
        technologies: [
            { name: 'React', icon: reactIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'Javascript', icon: jsIcon },
            { name: 'GSAP', icon: gsapIcon},
        ],
        link: 'https://landingpage-muebles.vercel.app/'
    },
    {
        image: proyecto2,
        title: 'MR Contables',
        description: 'Landing page con boton a whatsapp y redes de contacto para mejorar la presencia online del cliente. Acompañado de una campaña publicitaria logramos aumentar las leads y la visibilidad en linea.',
        technologies: [
            { name: 'HTML', icon: htmlIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'Javascript', icon: jsIcon },
        ],
        link: 'https://mr-contables.vercel.app/'
    },
    {
        image: proyecto3,
        title: 'NT Estetica y Salud',
        description: 'Landing page con boton a whatsapp, redes de contacto, promocion y descripcion de un servicio. Acompañado de una campaña publicitaria logramos incrementar las ventas de este nuevo servicio promocionado.',
        technologies: [
            { name: 'HTML', icon: htmlIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'Javascript', icon: jsIcon },
        ],
        link: 'https://ntesteticaysalud.vercel.app/'
    },
    {
        image: proyecto4,
        title: 'JLSL Movies',
        description: 'Proyecto grupal en el que fui Scrum Master y diseñe el preload, animaciones, login, register y homescreen. Me inspire en la interfaz de Netflix y utilice swipper para los slider peliculas destacadas.',
        technologies: [
            { name: 'React', icon: reactIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'Javascript', icon: jsIcon },
            { name: 'GSAP', icon: gsapIcon },
        ],
        link: 'https://jlslmovies.netlify.app/'
    },
    {
        image: proyecto7,
        title: 'Hurricane',
        description: 'Proyecto landingpage responsive full animada con GSAP, Scrolltrigger, Lenis, Timeline, creacion y animacion de SVG para el logo.',
        technologies: [
            { name: 'HTML', icon: htmlIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'Javascript', icon: jsIcon },
            { name: 'GSAP', icon: gsapIcon },
        ],
        link: 'https://hurricane-one.vercel.app/'
    },
    {
        image: proyecto8,
        title: '219LABS',
        description: 'Proyecto landingpage para mi agencia de desarrollo y marketing, responsive full animada con GSAP, Scrolltrigger, Lenis.',
        technologies: [
            { name: 'HTML', icon: htmlIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'Javascript', icon: jsIcon },
            { name: 'GSAP', icon: gsapIcon },
        ],
        link: 'https://219labs.vercel.app/'
    },
    {
        image: proyecto9,
        title: 'KTFCREW',
        description: 'Proyecto de pagina indexada multiseccion, galeria de arte callejero.',
        technologies: [
            { name: 'HTML', icon: htmlIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'Javascript', icon: jsIcon },
            { name: 'GSAP', icon: gsapIcon },
        ],
        link: 'https://ktfcrew.vercel.app/'
    },
    {
        image: proyecto10,
        title: 'Magnoly',
        description: 'Proyecto para pasteleria artesanal Magnoly, desarrollada con React JS, utilice GSAP, Scrolltrigger, Lenis y Swipper.',
        technologies: [
            { name: 'React', icon: reactIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'Javascript', icon: jsIcon },
            { name: 'GSAP', icon: gsapIcon },
        ],
        link: 'https://magnoly.vercel.app/'
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card-container-2">
            <div className="image-card-2">
                <img src={project.image} alt={project.title} className="scrollable-image-2" loading="lazy" />
            </div>
            <div className="project-details-2">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies-2">
                    {project.technologies.map((tech, index) => (
                        <img key={index} src={tech.icon} alt={tech.name} title={tech.name} className="technology-icon-2" loading="lazy" />
                    ))}
                </div>
                <a href={project.link} className="project-link-2" target="_blank" rel="noopener noreferrer">Abrir Proyecto</a>
            </div>
        </div>
    );
};

const ProjectsGrid = () => {
    return (
        <div className="projects-grid-2">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default ProjectsGrid;

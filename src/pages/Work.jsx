import React from 'react';
import Marquee from "../components/Marquee";
import Proyects from "../components/Proyects"
import './Work.css'

const Work = () => {
  const spans = ["—", "—", "—", "—"];
  const text = "¡Explora mis proyectos y descubre lo que he creado!";
  return (
    <div className='page-content'>
      <div className="hero-proyects">
      </div>
      <Marquee text={text} spans={spans} />
      <Proyects />
    </div>
  );
};

export default Work;

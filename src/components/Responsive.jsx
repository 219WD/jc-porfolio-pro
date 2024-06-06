import React, { useRef, useEffect } from 'react';
import img3 from '../assets/img-2-2.png'
import img4 from '../assets/img-4.png'
import './Responsive.css'
import { gsap } from "gsap";

const Responsive = () => {
    const tl2 = useRef();

    useEffect(() => {
      gsap.set(".imgs, .txt", { opacity: 0 });
  
      tl2.current = gsap.timeline({ paused: true })
        .to(".imgs, .txt", {
          opacity: 1,
          delay: 0.5,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
        });
  
      tl2.current.play();
    }, []);
    return (
        <div className="hero-responsive">
            <div className="imgs">
                <img className="img-hero-desktop" src={img4} alt="nt desktop" />
                <img className="img-hero-mobile" src={img3} alt="nt mobile" />
            </div>
            <div className="txt">
                <h2>Diseños Responsivos</h2>
                <p>Soy un experto en crear diseños completamente responsivos, asegurando que el contenido se adapte perfectamente a todo tipo de pantallas, desde móviles hasta monitores de escritorio.</p>

                <p>Utilizo técnicas avanzadas de CSS y frameworks modernos para garantizar una experiencia de usuario óptima en cualquier dispositivo.</p>

                <p>Además, me enfoco en la accesibilidad, cumpliendo con los estándares web para que tu contenido sea accesible para todos.</p>

                <p>Mi objetivo es ofrecer una experiencia de navegación uniforme y de alta calidad, sin importar dónde o cómo se visualice tu contenido.</p>
            </div>
        </div>
    )
}

export default Responsive
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./Marquee.css";

const Marquee = ({ text, spans }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Animación de entrada desde abajo con máscara
    gsap.set(".marquee-content, .marquee-container", { y: 75, opacity: 0 });
    gsap.to(".marquee-content, .marquee-container", {
      x: 150,
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.1,
      delay: 2
    });
  
    // Animación de desplazamiento continuo
    gsap.to(marqueeRef.current, {
      xPercent: -100,
      repeat: -1, // Repetir indefinidamente
      duration: 25, // Ajustar la duración para que sea más rápido
      ease: 'linear',
      delay: 2
    });
  }, []);
  

  return (
    <div className="marquee-container">
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee-content">
          {spans.map((span, index) => (
            <React.Fragment key={index}>
              <span>{span}</span>
              {index !== spans.length - 1 && <React.Fragment> {text} </React.Fragment>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;

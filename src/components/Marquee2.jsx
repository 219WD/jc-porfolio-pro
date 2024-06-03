import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./Marquee2.css";

const Marquee2 = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Animación de entrada desde abajo con máscara
    gsap.set(".marquee-content, .marquee-container2", { y: 75, opacity: 0 });
    gsap.to(".marquee-content, .marquee-container2", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.1,
      delay: 0.5
    });

    // Animación de desplazamiento continuo
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: 'linear',
      delay: 2
    });
  }, []);

  return (
    <div className="marquee-container2">
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee-content">
          <span>—</span> ¡Soy un desarrollador FullStack! Estas son mis habilidades principales. <span>—</span> ¡Soy un desarrollador FullStack! Estas son mis habilidades principales.  <span>—</span> ¡Soy un desarrollador FullStack! Estas son mis habilidades principales.  <span>—</span> ¡Soy un desarrollador FullStack! Estas son mis habilidades principales. <span>—</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee2;

import React, { useRef, useEffect } from 'react';
import SinFondo from "../assets/yo-sin-fondo.png";
import "../pages/HomeScreen.css";
import { gsap } from "gsap";
import Marquee from '../components/Marquee';
import Proyects from "../components/Proyects"
import Skills from '../components/Skills';
import Marquee2 from '../components/Marquee2';

const HomeScreen = () => {
  const spans = ["—", "—", "—", "—"];
  const text = "¡Bienvenido!";
  const tl = useRef(null);

  useEffect(() => {
    gsap.set(".img, .text", { y: 75, opacity: 0 });

    tl.current = gsap.timeline({ paused: true })
      .to(".img, .text", {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
      });

    tl.current.play();
  }, []);

  return (
    <div className='page-content'>
      <div className='hero'>
        <div className="img">
          <img className='foto' src={SinFondo} alt="Juan Cánepa" />
          <div className="color"></div>
          <div className="color2"></div>
          <div className="color3"></div>
        </div>
        <div className="text">
          <h1 className='title'>Juan Cánepa</h1>
          <h2>Fullstack Developer</h2>
          <div className="buttons">
            <a className='button-github' href="https://github.com/219WD/" target="_blank" rel="noopener noreferrer">
              <div className="button-icon">
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="#222229"
                    ></path>
                  </svg>
                </div>
                <div className="cube">
                  <span className="side front">hover me</span>
                  <span className="side top">check it on github</span>
                </div>
              </div>
            </a>
            <button>
              <a className='button-cv' href="https://drive.google.com/file/d/1-wqORNNpFRssxFP94Us0E8mBCC14eoIL/view" target="_blank" rel="noopener noreferrer"><span>DOWNLOAD CV</span></a>
            </button>
          </div>
        </div>
      </div>
      <Marquee text={text} spans={spans} />

      <section>
        <Proyects />
      </section>  
            
      <section>
        <Marquee2 />
      </section>    

      <section>
        <Skills />
      </section>
    </div>
  );
}

export default HomeScreen;

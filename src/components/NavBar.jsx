import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/JC-b.png';
import Arrow from '../assets/arrowW.png';

const NavBar = () => {
  const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Work' },
  ];
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    gsap.set('.menu-link-item-holder', { y: 75 });

    tl.current = gsap.timeline({ paused: true }).to('.menu-overlay', {
      duration: 1.25,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'power4.inOut',
    }).to(
      '.menu-link-item-holder',
      {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.inOut',
        delay: -0.75,
      },
    );
  }, { scope: container });

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false); // Close the menu when the location changes
  }, [location.pathname]); // Listen for changes in the pathname

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link to="/"><img className="Logo" src={Logo} alt="" /></Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p><FontAwesomeIcon icon={faBars} /></p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link to="/"><img className="Logo" src={Logo} alt="" /></Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
          <p>&#x2715;</p>
          </div>
        </div>
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link to={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="https://www.instagram.com/219labs/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
              <a href="https://www.linkedin.com/in/juan-c%C3%A1nepa-970559b9/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> Linkedin</a>
              <a href="https://github.com/219WD/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
              <a href="https://drive.google.com/file/d/1U0oaEJuY4rjUOajNQyXNbPONGyuYrHCJ/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} /> CV</a>
            </div>
            <div className="menu-info-col">
              <p><FontAwesomeIcon icon={faEnvelope} /> jcanepa.web@gmail.com</p>
              <p><FontAwesomeIcon icon={faWhatsapp} /> +54 381 6 671 884</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <img src={Arrow} alt="" />
          <p>219LABS</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

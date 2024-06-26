import React from 'react'
import Logo from '../assets/JC-b.png'
import Arrow from "../assets/arrowW.png"
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-info">
                <div className="footer-info-col left-col">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="footer-info-col">
                    <a href="https://www.instagram.com/canepadev/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} /> Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/juan-c%C3%A1nepa-970559b9/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} /> Linkedin
                    </a>
                    <a href="https://github.com/219WD/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} /> Github
                    </a>
                    <a href="https://drive.google.com/file/d/1U0oaEJuY4rjUOajNQyXNbPONGyuYrHCJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileAlt} /> CV
                    </a>
                </div>
                <div className="footer-info-col">
                    <p><FontAwesomeIcon icon={faEnvelope} /> jcanepa.web@gmail.com</p>
                    <p><FontAwesomeIcon icon={faWhatsapp} /> +54 381 6 671 884</p>
                </div>
                <div className="footer-info-col right-col">
                    <img src={Arrow} alt="Arrow" />
                    <p>219LABS</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

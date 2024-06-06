import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faUsers, faLightbulb, faMusic, faUtensils, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css';
import bg8 from '../assets/bg8.jpg'; // Asegúrate de que la imagen esté en el lugar correcto

const AboutMe = () => {
  return (
    <div className='aboutMe-container'>
      <h1>Un poco más sobre mí</h1>
      <div className='aboutMe-content'>
        <div className='aboutMe-professional'>
          <h2>Profesionalmente</h2>
          <p>¡Hola! Soy Juan Cánepa, un programador fullstack de Tucumán, Argentina, con muchas ganas de seguir aprendiendo y creciendo en el mundo del desarrollo web. Me encanta tanto el frontend como el backend y manejo tecnologías como HTML, CSS, JavaScript, React, Node.js, Express y MongoDB. Disfruto trabajando en equipo y utilizo herramientas como Git, GitHub y Trello para mantener todo en orden. Como Scrum Master, me aseguro de que el equipo fluya y se mantenga enfocado.</p>
          <p>Soy un tipo curioso que siempre está buscando nuevos desafíos. Me adapto rápido y quiero ser una pieza fundamental en cualquier equipo. Además de programar, me encanta el diseño gráfico y manejo Photoshop e Illustrator. También edito videos con Adobe Premiere y CapCut, y me he metido en el mundo del marketing digital.</p>
          <div className='aboutMe-icons'>
            <div className='icon-card'>
              <FontAwesomeIcon icon={faLaptopCode} size="2x" />
              <FontAwesomeIcon icon={faUsers} size="2x" />
              <FontAwesomeIcon icon={faLightbulb} size="2x" />
            </div>
          </div>
        </div>
        <div className='aboutMe-personal'>
          <h2>Personalmente</h2>
          <p>Soy un verdadero melómano, amante de la música y todos sus géneros, me paso el día entero escuchando música y hablando de música con mis amigos. También soy rapero y cuento con 3 discos escritos y grabados por mí y mi hermano, que es mi productor.</p>
          <p>Por otra parte, también llevo una vida fitness, con comida saludable, no consumo gaseosas ni dulces, soy bastante disciplinado con las comidas libres. Mi sueño es llegar a ganar un torneo de culturismo tarde o temprano.</p>
          <p>Otra de mis cualidades ocultas es que me gusta mucho la cocina, sé cocinar todo tipo de comidas tanto nacionales como del mundo. Soy un gran asador, pero también como soy italiano cocino pastas caseras. La comida mexicana es mi especialidad y soy un verdadero enamorado del picante.</p>
          <div className='aboutMe-icons'>
            <div className='icon-card'>
              <FontAwesomeIcon icon={faMusic} size="2x" />
              <FontAwesomeIcon icon={faUtensils} size="2x" />
              <FontAwesomeIcon icon={faDumbbell} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

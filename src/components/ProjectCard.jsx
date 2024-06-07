import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, image, link, technologies, description }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="project-image" />
        </a>
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">Tecnologías utilizadas: {technologies}</p>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

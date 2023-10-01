import React from 'react';
import './project.css';

function Project({ title, description, projectLink, githubLink, imageUrl }) {
    return (
      <div className="project">
        <div className="project-image-container">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              alt={`Screenshot of ${title}`}
              className="project-image"
            />
          </a>
          <div className="project-overlay">
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn-primary mr-2">Deployed Website</a> ---
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
          </div>
        </div>
        <div className="mt-2">
          {/* <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn-primary mr-2">Project</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a> */}
        </div>
      </div>
    );
  }
  
  export default Project;
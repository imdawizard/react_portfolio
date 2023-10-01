import React from 'react';

function Project({ title, description, technologies, projectLink, githubLink }) {
    return (
      <div className="project">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Technologies used:</strong> {technologies}</p>
        <div className="project-links">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">Project</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    );
  }
  
  export default Project;
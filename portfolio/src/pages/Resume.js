import React from 'react';
import './Resume.css'; // Import the CSS file

function Resume() {
  return (
    <div className="resume">
      {/* Link to download resume */}
      <p>
        Download my Resume{' '}
        <a
          href="../../src/assets/resume/NateKesterResume.pdf"
          target="_blank"
          download="NateKesterResume.pdf"
          rel="noopener noreferrer"
          className="download-link"
        >
          here
        </a>
      </p>


      <h2 className="section-heading">My Proficiencies</h2>
      <div className="proficiency-container">
        <div className="proficiency-category">
          <h3>Front-end Technologies:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Handlebars</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="proficiency-category">
          <h3>Back-end Technologies:</h3>
          <ul>
            <li>mySQL</li>
            <li>noSQL</li>
            <li>Version Control: Git, GitHub</li>
            <li>MangoDB, Mangoose</li>
            <li>Express</li>
            <li>Express Sessions</li>
            <li>Node</li>
            <li>API's</li>
            <li>Bcrypt</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
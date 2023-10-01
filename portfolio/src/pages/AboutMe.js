import React from 'react';
import './AboutMe.css'; // Import the CSS file
import portfolioPic from '../assets/images/Smiling_in_London.jpg';
import 'tailwindcss/tailwind.css';


function AboutMe() {
  return <section className="about-me">
  <div className="about-me-image">
  <img src={portfolioPic} class='nate-pic' alt='person selfie in front of building'></img>
  </div>
  <div className="about-me-content">
    <h2>About Me</h2>
    <p>
      Hi there! My name is Nate Kester, and I'm a passionate web developer. I recently completed a full-stack web development certification program offered by Utah University and edX. My journey in the world of coding has been an exciting one, and I'm eager to continue learning and growing.
    </p>
    <p>
      My next goal is to attend Utah Valley University <a href="https://www.uvu.edu/" target="_blank" rel="noopener noreferrer">(UVU)</a> starting next spring semester to pursue a bachelor's degree in computer science. I believe that a strong educational foundation combined with practical experience will help me excel in the ever-evolving field of web development.
    </p>
    <p>
      Outside of coding, I love spending time in the great outdoors. Camping, hiking, and enjoying the beauty of nature are some of my favorite pastimes. Whether it's writing code or exploring the wilderness, I'm always up for an adventure!
    </p>
  </div>
</section>
}
export default AboutMe;
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

<head>
<script src="https://kit.fontawesome.com/8e315c219c.js" crossorigin="anonymous"></script>
</head>

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/imdawizard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nate-kester-7788071a0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> LinkedIn
        </a>
        <a
          href="https://instagram.com/nuori_mies?igshid=NGVhN2U2NjQ0Yg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> Instagram
        </a>
      </div>
    </footer>
    
  );
}

export default Footer;

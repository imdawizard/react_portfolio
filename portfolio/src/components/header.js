// Header.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <header>
      <h1>
        <NavLink exact to="/" onClick={() => handleLinkClick('/')}>
          Welcome to my Website!
        </NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className={`nav-link ${activeLink === '/' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/')}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/portfolio"
              className={`nav-link ${activeLink === '/portfolio' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/portfolio')}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contact"
              className={`nav-link ${activeLink === '/contact' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/contact')}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/resume"
              className={`nav-link ${activeLink === '/resume' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/resume')}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



// src/components/Header.js
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <Parallax speed={-10}>
        <h1>My Portfolio</h1>
      </Parallax>
      <Parallax speed={5}>
        <p>Creative Developer</p>
      </Parallax>
      <Link to="about" smooth={true} duration={500}>
        <button>Learn More</button>
      </Link>
    </header>
  );
};

export default Header;

// src/Main.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './sections/Home';
import Interns from './sections/Interns';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Blog from './sections/Blog';
import './App.css';

const Main = () => {
  return (
    <div className="main-container">
      <nav className="top-bar">
        <Link to="/home">Home</Link>
        <Link to="/interns">Interns</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/interns" element={<Interns />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;

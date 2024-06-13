// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './sections/Home';
import Interns from './sections/Interns';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Blog from './sections/Blog';
import './App.css';


function App() {
  return (
    <Router>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap" rel="stylesheet"></link>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
            <div className="top-bar">
            <a href="/home">Home</a>
            <a href="/interns">Interns</a>
            <a href="/education">Education</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
            </div>
            <div className='routing'>
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
        </div>
    </Router>
  );
}

export default App;

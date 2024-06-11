import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

const Main = () => {
  return (
    <div className="main-content">
    <Parallax pages={6} style={{ top: '10', left: '10' }} >
        <ParallaxLayer offset={0} speed={-5}>
            <section id="home">
            <h1>Home</h1>
            <p>Welcome to my portfolio website!</p>
            </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-4}>
            <section id="interns">
            <h1>Interns</h1>
            <p>Details about my internships...</p>
            </section>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-3}>
            <section id="education">
            <h1>Education</h1>
            <p>Information about my educational background...</p>
            </section>
            </ParallaxLayer>
        <ParallaxLayer offset={3} speed={-2}>
            <section id="projects">
            <h1>Projects</h1>
            <p>Descriptions of my projects...</p>
            </section>
            </ParallaxLayer>
        <ParallaxLayer offset={4} speed={-1}>
            <section id="contact">
            <h1>Contact</h1>
            <p>How to contact me...</p>
            </section>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0}>
            <section id="blog">
            <h1>Blog</h1>
            <p>Links to my blog posts...</p>
            </section>
        </ParallaxLayer>
    </Parallax>
      </div>
  );
};
export default Main;
// src/components/About.js
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const About = () => {
  return (
    <section className="about">
      <Parallax speed={-5}>
        <h2>About Me</h2>
      </Parallax>
      <Parallax speed={2}>
        <p>
          I am a passionate developer with experience in creating dynamic web applications...
        </p>
      </Parallax>
    </section>
  );
};

export default About;

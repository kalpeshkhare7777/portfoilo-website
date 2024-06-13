// src/Side.js
import React from 'react';
import './App.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img src="profile.JPG" alt="Profile" className="profile-image" />
      <div className="info-section">
        <h2>Kalpesh Khare</h2>
        <p>Third Year B.Tech <br /> IIT Bombay</p>
      </div>
      <div className="languages-section">
        <h3>Languages & Frameworks</h3>
        <div className="icon">
          <img src="c++.png" alt="C++" />
          <img src="python.png" alt="Python" />
          <img src="html.png" alt="HTML" />
          <img src="css.png" alt="CSS" />
          <img src="Js.png" alt="JavaScript" />
        </div>
      </div>
      <div className="contact-info">
        <h3>Contact</h3>
        <div className="icon">
          <img src="linkedin.png" alt="LinkedIn" />
          <img src="github.png" alt="GitHub" />
          <img src="email.png" alt="Email" />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
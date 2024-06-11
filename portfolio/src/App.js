// src/App.js
import React from 'react';
import Sidebar from './Sidebar';
import Main from './main';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

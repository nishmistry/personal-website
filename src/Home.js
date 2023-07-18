import React from 'react';
import './App.css';

function Home() {
  return (
    <div id="home" className="hero-text">
      <h1>Hey, I'm Nish Mistry.</h1>
      <h1 className="highlighted-hero-text">I like solving <span className="highlighted">problems</span>.</h1>
      <a className="about-button" href="#about">get to know me</a>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
    </div>
  );
}

export default Home;
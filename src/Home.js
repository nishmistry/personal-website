import React from 'react';
import './App.css';

function Home() {
  return (
    <div id="home" className="hero-text">
      <h1>Hi, I'm Nish Mistry.</h1>
      <h1 className="highlighted-hero-text">I like solving <span className="highlighted">problems</span>.</h1>
      <a className="about-button" href="#about">get to know me</a>
    </div>
  );
}

export default Home;

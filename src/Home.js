import React from 'react';
import './App.css';

function Home() {
  return (
    <div id="home" className="hero-text">
      <h1>Hey, I'm <span class="highlighted">Nish Mistry</span>.</h1>
      <p>I'm passionate about engineering solutions to difficult and <span class="highlighted-secondary">quantitative</span> problems.</p>
      <p className="margin-below">My interests lie in the fields of <span class="highlighted-secondary">software engineering</span>, <span class="highlighted-secondary">quantitative finance</span>, <span class="highlighted-secondary">machine learning</span>, <span class="highlighted-secondary">low-latency systems</span>, and the intersection between them.</p>
      <a className="about-button" href="#about">get to know me</a>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
    </div>
  );
}

export default Home;
import React from 'react';
import './App.css';

function About() {
  return (
    <div id="about">
      <h2 className="about-header">about me</h2>
      <p>I’m an Honors Student at Northeastern University, studying Computer Science and Economics.</p>
      <p>From a young age, I’ve loved to tinker with computers. Now, I build full-stack applications to solve interesting problems.</p>
      <h3>technologies i work with</h3>
      <div>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>Racket</li>
          <li>JavaScript</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>IntelliJ</li>
        </ul>
      </div>
    </div>
  );
}

export default About;

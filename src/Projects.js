import React from 'react';
import './App.css';
import projectsData from "./ProjectsData"

function Projects() {
  return (
    <div id="projects">
      <h2 className="projects-header">projects</h2>
      <div className="projects-container">
      {projectsData.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-img">
              <img src={project.imageSrc} alt={project.altText} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
    </div>
  );
}

export default Projects;

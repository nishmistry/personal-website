import React from 'react';
import './App.css';
import projectsData from "./ProjectsData"

function Projects() {
  return (
    <div id="projects">
      <h2>projects</h2>
      <div className="project-container">
      {projectsData.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.imageSrc} alt={project.altText} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              View Live
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

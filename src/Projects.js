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
              <em className="project-stack">{project.stack}</em>
              <p>{project.description}</p>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button">
                  {project.liveLinkText}
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-button">
                  GitHub
                </a>
              )}
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

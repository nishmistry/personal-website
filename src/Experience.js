import React from 'react';
import './App.css';

const experiences = [
  {
    company: "Chewy",
    role: "AI Engineer Intern, Unbound Program",
    dates: "June 2025 – Present",
    description: "Building an agentic customer segmentation and insights platform, leveraging LLMs, knowledge graphs, and traditional machine learning models -- providing a more customized, nuanced experience for each customer."
  },
  {
    company: "Northeastern University Systematic Alpha",
    role: "Executive Vice President",
    dates: "Jan 2025 – Present",
    description: "Leading a team of quantitative researchers and developers to find alpha using statistical methods and alternative data, build models, and engineer performant systems. Leading lectures, guiding research, and actively building out our Quantitative Development track."
  },
  {
    company: "Wellington Management Company",
    role: "Software Engineer Co-op, Portfolio Construction",
    dates: "Jan 2025 – May 2025",
    description: "Rearchitected release engineering platform to automate release workflows, reducing manual efforts and improving stability of all Portfolio Construction releases."
  },
  {
    company: "Optum",
    role: "Software Engineer Intern, Enterprise External Data Management",
    dates: "Jun 2024 – Aug 2024",
    description: "Automated ETL pipelines using custom classification models to reduce manual workflows, processing times, and costs."
  },
  {
    company: "National Internet Observatory",
    role: "Software Engineer Co-op",
    dates: "Jan 2024 – May 2024",
    description: "Built new scrapers and improved existing infrastruction to improve data quality for our researchers. Improved accessibility through adding multi-language support."
  }
];

function Experience() {
  return (
    <div id="experience">
      <h2 className="experience-header">experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div className="experience-item" key={idx}>
            <div className="experience-header-row">
              <span className="experience-company">{exp.company}</span>
              <span className="experience-dates">{exp.dates}</span>
            </div>
            <div className="experience-role">{exp.role}</div>
            <div className="experience-description">{exp.description}</div>
          </div>
        ))}
      </div>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
    </div>
  );
}

export default Experience;

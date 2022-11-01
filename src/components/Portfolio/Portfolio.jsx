import React from "react";

import { Projects } from "../../data/ProjectsData";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <span className="heading-s">
        Some <span className="stroke-text"> Major </span> Projects
      </span>
      <div className="projects">
        {Projects.map((project) => (
          <div className="project">
            <div className="project-title">
              <span>{project.title}</span>
            </div>
            <img src={project.ss} alt=" " className="screenshot" />
            <div className="btn-container-p">
              <button className="btn portfolio-btn">
                <a target="_blank" rel="noreferrer" href={project.link}>
                  Visit Site
                </a>
              </button>
              <button className="btn portfolio-btn">
                <a target="_blank" rel="noreferrer" href={project.sourceCode}>
                  Source Code
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

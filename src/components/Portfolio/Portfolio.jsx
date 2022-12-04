import React from "react";

import { Projects } from "../../data/ProjectsData";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <span className="heading-s">
        Some <span className="stroke-text"> Major </span> Projects
      </span>
      <div className="projects">
        {Projects.map((project) => (
          <div className="project">
            <img src={project.ss} alt=" " className="screenshot" />
            <div className="technologies">
              {project.techs.map((t) => (
                <i className="tech-bubble">{t}</i>
              ))}
            </div>
            <div className="card-body">
              <div className="project-title">
                <span>{project.title}</span>
              </div>
              <div className="btn-container-p">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.link}
                  className="portfolio-btn-link"
                >
                  <button className="btn portfolio-btn">Visit Site</button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.sourceCode}
                  className="portfolio-btn-link"
                >
                  <button className="btn portfolio-btn">Source Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";

import { SkillsData } from "../../data/skillsData";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <span className="heading-s">
        My <span className="stroke-text">Skills</span>
      </span>
      <div className="skills-container">
        {SkillsData.map((skill) => (
          <div className="skill">
            <img src={skill.image} alt=" " />
            <hr />

            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

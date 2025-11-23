import React from "react";

const SkillList = ({ skills, deleteSkill }) => {
  return (
    <ul id="skill-list">
      {skills.map((skill, idx) => (
          <li key={idx} id={`skill-number-${idx}`} onClick={deleteSkill}>
            {skill}
          </li>
      ))}
    </ul>
  );
};

export default SkillList;

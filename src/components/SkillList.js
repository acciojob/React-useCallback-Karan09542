import React from "react";

const SkillList = ({ skills, deleteSkill }) => {
  return (
    <ul>
      {skills.map((skill, idx) => (
        <li
          key={idx}
          id={`skill-number-${idx}`}
        >
          {skill}
          <button id="skill-delete-btn" onClick={() => deleteSkill(idx)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;

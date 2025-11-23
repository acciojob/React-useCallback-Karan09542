import React from "react";

const SkillList = ({ skills, deleteSkill }) => {
  return (
    <ul id="skill-list">
      {skills.map((skill, idx) => (
        <div>
          <li key={idx} id={`skill-number-${idx}`}>
            {skill}
          </li>
          <button onClick={() => deleteSkill(idx)}>
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};

export default SkillList;

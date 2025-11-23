import React from "react";

const SkillList = ({ skills, deleteSkill }) => {
  return (
    <ul id="skill-list">
      {skills.map((skill, idx) => (
        <div key={idx} >
          <li id={`skill-number-${idx}`}>
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

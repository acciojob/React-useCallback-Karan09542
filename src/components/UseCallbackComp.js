import React, { useCallback, useState } from "react";
import SkillList from "./SkillList";

const UseCallbackComp = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const [skill, setSkill] = useState("");

  const addSkill = useCallback(() => {
    setSkills([...skills, skill]);
    setSkill("");
  }, [skills, skill]);

  const deleteSkill = useCallback((id) => {
    setSkills(skills.filter((skill, index) => index !== id));
  }, [skills, skill]);
  return (
    <div>
      <h1 id="heading">Skill</h1>
      <input
        onChange={(e) => {
          const val = e.target.value;
          setSkill(val);
        }}
        value={skill}
        id="skill-input"
        type="text"
        placeholder="type skill"
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} deleteSkill={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;

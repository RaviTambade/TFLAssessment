import React from 'react';

function SkillHealthCard() {
  const skills = [
    { name: 'C#', value: 80 },
    { name: 'OOP', value: 65 },
    { name: 'ASP.NET', value: 55 },
    { name: 'SQL', value: 75 },
    { name: 'Cloud Basics', value: 40 }
  ];

  return (
    <div className="card mb-3">
      <div className="card-header">Skill Health</div>
      <div className="card-body">
        {skills.map((skill, idx) => (
          <div key={idx} className="mb-2">
            <strong>{skill.name}</strong>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${skill.value}%` }}
              >{skill.value}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillHealthCard;
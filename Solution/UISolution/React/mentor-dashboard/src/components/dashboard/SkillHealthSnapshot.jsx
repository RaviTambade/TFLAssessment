import React from "react";

function SkillHealthCard() {
  const skills = [
    { level: "Strong", topic: "Programming Basics", percent: 85 },
    { level: "Average", topic: "Web Architecture", percent: 55 },
    { level: "Weak", topic: "Dependency Injection, LINQ", percent: 30 },
  ];

  return (
    <div className="card mb-2">
      <div className="card-header">Skill Health</div>

      <div className="card-body">
        {skills.map((skill, idx) => (
          <div key={idx} className="mb-3">
        
            <div className="d-flex justify-content-between">
              <strong>{skill.level}:</strong>
              <span>{skill.topic}</span>
            </div>

            <div className="d-flex align-items-center gap-2 mt-1">
              <span style={{ width: "35px" }}>
                {skill.percent}%
              </span>

              <div className="progress flex-grow-1" style={{ height: "6px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillHealthCard;

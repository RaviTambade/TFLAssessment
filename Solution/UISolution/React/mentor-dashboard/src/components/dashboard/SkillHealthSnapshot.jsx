import React from 'react';

function SkillHealthCard() {
  const skills = [
    { name:"strong:", value: "Programming Basics"},
     {   name:"average:",value: "Web Architecture"},
      {  name:"weak:", value: "Dependency Injection, LINQ"} 
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



// import "../layout/Sidebar";

// function SkillHealthSnapshot(){

//     //hard coded list data
//     const skillHealth={
//         strong:"Programming Basics",
//         average: "Web Architecture",
//         weak: "Dependency Injection, LINQ" 

//     };

//     return (
//         <div className="SkillHealth-container">
        
//         <div className="SkillHealth-title">
//              📊 Skill Health Snapshot
//             </div>

//         <div className="SkillHealth-list">
//             <div className="skill strong">
//             • <strong>Strong:</strong> {skillHealth.strong}
//         </div>

//         <div className="skill average">
//            • <strong>Average:</strong>{skillHealth.average}
//             </div>

//             <div className="skill Weak">
//            • <strong>Weak:</strong>{skillHealth.weak}
//             </div>

//         </div>
//         </div>
            
//     );
// }
// export default SkillHealthSnapshot;
            
    
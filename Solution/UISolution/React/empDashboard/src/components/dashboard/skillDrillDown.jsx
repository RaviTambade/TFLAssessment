// import React from 'react';

// const skill={
//     skillBreakdown: ".NET Developer",
//     cSharpFundamentals :"(Microsoft Learn)",
//     OOPPrinciples:"(Applied)",
//     LINQ:"(Hands-on)" ,
//     ASPdotnet:"(Project-based)" ,
//     azureBasics:"(Project-based)"
// }

// function SkillDrillDown() {
//     return (
//     <div className="card mb-3">
//         <div className="card-header bg-dark text-white">
//             <h5>Skill Drill Down: {skill.skillBreakdown}</h5>
//         </div>
//         <ul className="list-group list-group-flush">
//             <li className="list-group-item">✔ C# Fundamentals : {skill.cSharpFundamentals}</li>
//             <li className="list-group-item">✔ OOP Principles : {skill.OOPPrinciples}</li>
//             <li className="list-group-item">✔ LINQ : {skill.LINQ}</li>
//             <li className="list-group-item">✔ ASP.NET Core Web API : {skill.ASPdotnet}</li>
//             <li className="list-group-item">✔ Azure Basics: {skill.azureBasics}</li>
//         </ul>
//     </div>
//    ); 
// }

// export default SkillDrillDown;

import React, { useEffect, useState } from "react";

function SkillDrillDown() {

  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/dashboard/drilldown")
      .then(response => response.json())
      .then(data => {
        setSkill(data);
      })
      .catch(error => {
        console.error("Error fetching skill data:", error);
      });
  }, []);

  if (!skill) {
    return <div>Loading skill data...</div>;
  }

  return (
    <div className="card mb-3">
      <div className="card-header bg-dark text-white">
        <h5>Skill Drill Down: {skill.skillBreakdown}</h5>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">✔ C# Fundamentals : {skill.cSharpFundamentals}</li>
        <li className="list-group-item">✔ OOP Principles : {skill.OOPPrinciples}</li>
        <li className="list-group-item">✔ LINQ : {skill.LINQ}</li>
        <li className="list-group-item">✔ ASP.NET Core Web API : {skill.ASPdotnet}</li>
        <li className="list-group-item">✔ Azure Basics : {skill.azureBasics}</li>
      </ul>
    </div>
  );
}

export default SkillDrillDown;

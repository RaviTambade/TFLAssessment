import React from "react";


const skillsData = [
  { skill: "C#", ready: 4, nearReady: 2 },
  { skill: "ASP.NET Core", ready: 3, nearReady: 3 },
  { skill: "React", ready: 2, nearReady: 4 },
  { skill: "SQL", ready: 4, nearReady: 3 },
  { skill: "Azure", ready: 2, nearReady: 3 }
];

const HeatBlocks = ({ count, color }) => {
  return (
    <div className="d-flex gap-1">
      {[...Array(count)].map((_, i) => (
        <span key={i} className={`heat-box ${color}`}></span>
      ))}
    </div>
  );
};

function SkillsAnalytics() {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white fw-bold">
        Skills Analytics – Organization View
      </div>

      <div className="card-body">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th className="text-start">Skill</th>
              <th>Ready</th>
              <th>Near </th>
                <th>Learning </th>

            </tr>
          </thead>

          <tbody>
            {skillsData.map((item, index) => (
              <tr key={index}>
                <td className="text-start fw-semibold">{item.skill}</td>
                <td>
                  <HeatBlocks count={item.ready} color="heat-ready" />
                </td>
                <td>
                  <HeatBlocks count={item.nearReady} color="heat-near" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-3 text-muted">
          <strong>Purpose:</strong> Workforce readiness intelligence for planning
        </p>
      </div>
    </div>
  );
}

export default SkillsAnalytics;

import React, { useEffect, useState } from "react";
import { getLearnerSkill } from "/src/service/LearningSkillAnalyticsService";

function LearnerSkillAnalytics() {

  const [learnerData, setLernerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLearnerSkill().then((data) => {
      setLernerData(data);
      setLoading(false);
    });
  }, []);

  const getStatusBadge = (status) => {
    if (status === "strong") {
      return <span className="badge bg-success">Strong</span>;
    }
    if (status === "stable") {
      return <span className="badge bg-primary">Stable</span>;
    }
    return <span className="badge bg-warning text-dark">Needs Support</span>;
  };

  if (loading) return <p>Loading...</p>;
  if (!learnerData) return <p>No data available.</p>;
  return (
    <div className="card mb-4 shadow-sm">
      {/* Header */}
      <div className="card-header bg-dark text-white">
        Learner Skill Analytics
      </div>

      {/* Body */}
      <div className="card-body">
        {/* Learner Info */}
        <div className="row mb-3">
          <div className="col-md-6">
            <strong>Learner:</strong> {learnerData.learnerName}
          </div>
          <div className="col-md-6">
            <strong>Layer:</strong> {learnerData.layer}
          </div>
        </div>

        {/* Skills Table */}
        <div className="table-responsive mb-3">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-secondary">
              <tr>
                <th>Skill</th>
                <th>Mastery</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {learnerData.skills.map((skill, index) => (
                <tr key={index}>
                  <td>{skill.skillName}</td>
                  <td>{skill.mastery}</td>
                  <td>{getStatusBadge(skill.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Insights */}
        <div>
          <h6 className="fw-bold">AI Insights</h6>
          <ul className="list-group list-group-flush">
            {learnerData.insights.map((point, index) => (
              <li key={index} className="list-group-item">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LearnerSkillAnalytics;

import React from "react";

function CandidateScorecardView() {
  return (
    <div className="card shadow-sm" style={{ maxWidth: "500px" }}>
      <div className="card-header fw-bold bg-dark text-white">
        Candidate: Nirjala Naik
      </div>

      <div className="card-body">
        <p className="mb-1"><strong>Overall Readiness:</strong> 82%</p>
        <p className="mb-3"><strong>Role Fit:</strong> Junior .NET Developer</p>

        <div className="mb-2">
          <small>Skill Depth</small>
          <div className="progress">
            <div className="progress-bar" style={{ width: "80%" }} />
          </div>
        </div>

        <div className="mb-2">
          <small>Project Quality</small>
          <div className="progress">
            <div className="progress-bar" style={{ width: "70%" }} />
          </div>
        </div>

        <div className="mb-2">
          <small>Problem Solving</small>
          <div className="progress">
            <div className="progress-bar" style={{ width: "80%" }} />
          </div>
        </div>

        <div>
          <small>Learning Consistency</small>
          <div className="progress">
            <div className="progress-bar" style={{ width: "90%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateScorecardView;

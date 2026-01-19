import React from 'react';

function AssessmentSummary() {
  const assessment = { title: 'Web API', score: 72, feedback: 'Good REST knowledge, improve error handling' };

  return (
    <div className="card mb-3">
      <div className="card-header">Assessment Summary</div>
      <div className="card-body">
        <p><strong>{assessment.title}</strong></p>
        <p>Score: {assessment.score}%</p>
        <p>Feedback: {assessment.feedback}</p>
      </div>
    </div>
  );
}

export default AssessmentSummary;
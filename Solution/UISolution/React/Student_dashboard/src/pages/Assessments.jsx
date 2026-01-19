import React from 'react';
import Header from '../components/layout/Header';

function Assessments() {
  const assessments = [
    {
      title: 'Web API',
      score: 72,
      feedback: 'Good REST knowledge, improve error handling',
    },
    {
      title: 'OOP Concepts',
      score: 70,
      feedback: 'Focus on inheritance and polymorphism',
    },
  ];

  return (
    <div>
      <Header/>
      <h3>Assessments</h3>
      {assessments.map((assessment, idx) => (
        <div key={idx} className="card mb-3">
          <div className="card-header">{assessment.title}</div>
          <div className="card-body">
            <p>Score: {assessment.score}%</p>
            <p>Feedback: {assessment.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Assessments;
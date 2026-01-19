import React from 'react';
import Header from '../components/layout/Header';

function MentorFeedback() {
  const feedbacks = [
    {
      comment: 'Good understanding of OOP',
      tasks: ['Complete Exception Handling Lab', 'Push code to GitHub'],
    },
    {
      comment: 'Need to improve API error handling',
      tasks: ['Refactor APIs', 'Review Middleware'],
    },
  ];

  return (
    <div>
      <Header/>
      <h3>Mentor Feedback</h3>
      {feedbacks.map((feedback, idx) => (
        <div key={idx} className="card mb-3">
          <div className="card-header">Feedback #{idx + 1}</div>
          <div className="card-body">
            <p>{feedback.comment}</p>
            <strong>Actionable Tasks:</strong>
            <ul>
              {feedback.tasks.map((task, tIdx) => (
                <li key={tIdx}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MentorFeedback;
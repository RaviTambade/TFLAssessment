import React from 'react';

function ConfidenceMeter() {
  const metrics = [
    { name: 'Concept Understanding', value: 70 },
    { name: 'Coding Comfort', value: 60 },
    { name: 'Debugging Skills', value: 65 },
    { name: 'Interview Readiness', value: 40 },
  ];

  return (
    <div className="card mb-3">
      <div className="card-header">Confidence Meter</div>
      <div className="card-body">
        {metrics.map((metric, idx) => (
          <div key={idx} className="mb-2">
            <strong>{metric.name}</strong>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                style={{ width: `${metric.value}%` }}
              >{metric.value}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConfidenceMeter;
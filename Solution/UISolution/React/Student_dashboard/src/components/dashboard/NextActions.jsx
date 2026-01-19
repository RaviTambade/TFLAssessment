import React from 'react';

function NextActions() {
  const actions = [
    { task: 'Complete Exception Handling Lab', done: false },
    { task: 'Refactor APIs', done: true },
    { task: 'Practice Interview Questions', done: true },
    { task: 'Push Code to GitHub', done: true },
  ];

  return (
    <div className="card mb-3">
      <div className="card-header">Next Actions</div>
      <div className="card-body">
        <ul>
          {actions.map((action, idx) => (
            <li key={idx}>
              <input type="checkbox" checked={action.done} readOnly /> {action.task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NextActions;
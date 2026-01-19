import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-dark p-3 text-white" style={{ width: '220px', minHeight: '100vh' }}>
      <h5>Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/assessments">Assessments</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/mentor-feedback">Mentor Feedback</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/learning-path">Learning Path</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/skill-health">Skill Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/career-readiness">Career Readiness</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

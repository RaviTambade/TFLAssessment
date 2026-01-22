import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-dark p-3 text-white" style={{ width: '220px', minHeight: '100vh' }}>
      <h5>Student Dashboard</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/student/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/student/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/student/assessments">Assessments</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/student/mentor-feedback">Mentor Feedback</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/student/learning-path">Learning Path</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/student/skill-health">Skill Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/student/career-readiness">Career Readiness</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

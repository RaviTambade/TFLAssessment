import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-dark p-3 text-white" style={{ width: "220px", minHeight: "100vh" }}>
      <h5>Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/employer-dashboard">Employer Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/candidate-ranking">Candidate Ranking</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/candidate-skills">Candidate Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard-panel">Dashboard Panels</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/kpi-strip">KPI Strip</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/candidate-table">Candidate Table</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
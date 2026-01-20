import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="bg-dark p-3 text-white" style={{ width: '220px', minHeight: '100vh' }}>
            <h5>Menu</h5>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                    <Link className="nav-link text-white" to="/skills-analytics">Skills Analytics</Link>

                </li>
                <li><Link className="nav-link text-white" to="/employer-assist">Employer Assist</Link></li>
                <li><Link className='nav-link text-white' to="/employer-confidence">Employer Confidence</Link></li>

                <li className="nav-item">
                    <Link className="nav-link text-white" to="/skill-drill-down">Skill Drill Down</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link text-white" to="/project-evidence">Project Evidence</Link>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;

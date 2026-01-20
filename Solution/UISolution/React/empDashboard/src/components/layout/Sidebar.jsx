import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="bg-dark p-3 text-white" style={{ width: '220px', minHeight: '100vh' }}>
            <h5>Menu</h5>
            <ul className="nav flex-column">
                <li className="nav-item"><Link className="nav-link text-white" to="/LearningTimeline">LearningTimeline</Link></li>
                <li className="nav-item"> <Link className="nav-link text-white" to="/RecommendationView">RecommendationView</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/dashboard"> Dashboard </Link> </li>
                <li className="nav-item"><Link className="nav-link text-white" to="/employer-assist">Employer Assist</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/candidate-List-View">Candidate List </Link> </li>
                <li className="nav-item"><Link className="nav-link text-white" to="/candidate-Scorecard-View">Candidate Scorecard</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/employer-confidence"> Employer Confidence</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/skill-drill-down">Skill Drill Down</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/project-evidence">Project Evidence </Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/Employer Shortlist">Employer Shortlist</Link></li>

            </ul>
        </div>
    );
}

export default Sidebar;

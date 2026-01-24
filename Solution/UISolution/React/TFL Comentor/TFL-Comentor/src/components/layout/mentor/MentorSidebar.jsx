import { Link } from "react-router-dom";

function MentorSidebar() {
    return (
        <div className="bg-dark p-3 text-white" style={{ width: "220px", minHeight: "100vh" }}>
            <h5>Mentor Dashboard</h5>

            <ul className="nav flex-column">
                <li className="nav-item"><Link className="nav-link text-white" to="/dashboard">Dashboard</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/learner-skill-analytics">Learner Skill Analytics</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/test-data">Test Data</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/skill-health-snapshot">Skill Health Snapshot</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/publish-assessment">Publish Assessment</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/mentor-recommendation">Mentor Recommendation</Link> </li>
            </ul>
        </div>
    );
}

export default MentorSidebar;

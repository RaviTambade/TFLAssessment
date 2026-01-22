import React from 'react';
import { Link } from 'react-router-dom';

function MentorSidebar() {
    return(
        <div className="bg-dark p-3 text-white" style={{ width: '220px', minHeight: '100vh' }}>
            <h5>Mentor Dashboard</h5>
            <ul className='nav flex-column'>
                <li className='nav-item'><Link className='nav-link' to="/mentor/dashboard">Dashboard</Link></li>
                <li className='nav-item'> <Link className='nav-link' to="/mentor/learner-skill-analytics">Learner Skill Analytics</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/mentor/test-data">Test Data</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/mentor/skill-health-snapshot">Skill Health Snapshot</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/mentor/publish-assessment">Publish Assessment</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/mentor/mentor-recommendation">Mentor Recommendation</Link></li>
            </ul>
        </div>
    )
}

export default MentorSidebar;

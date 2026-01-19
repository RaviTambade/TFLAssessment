import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return(
        <div className="bg-dark p-3"  style={{width:'220px',minHeight:'100vh'}}>
            <h5>Menu</h5>
            <ul className='nav flex-column'>
                <li className='nav-item'><Link className='nav-link' to='/dashboard'>Dashboard</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/learner-skill-analytics'>Learner Skill Analytics</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/mentor-data'>Mentor Data</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/mentor-recommendation'>Mentor Recommendation</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/publish-assessment'>Publish Assessment</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/skill-health-snapshot'>Skill Health Snapshot</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/test-data'>Test Data</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;
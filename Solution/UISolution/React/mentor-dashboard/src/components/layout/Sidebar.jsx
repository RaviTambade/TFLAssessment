import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return(
        <div className="bg-dark p-3"  style={{width:'220px',minHeight:'100vh'}}>
            <h5>Menu</h5>
            <ul className='nav flex-column'>
                <li className='nav-item'><Link className='nav-link' to='/dashboard'>Dashboard</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/projects'>My Projects</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/assessments'>Assessments</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/mentorfeedback'>Mentor Feedback</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/learningpath'>Learning Path</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/portfolio'>Portfolio</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/skill-health'>Skill Health</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/careerreadiness'>Career Readiness</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;
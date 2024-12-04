import React from 'react';
import { useLocation } from 'react-router-dom';

function StudentDashboard() {
    const location = useLocation();
    const { employeeName, candidateId } = location.state || {};
    
    return (
        <div>
            {/* Main Content for Student */}
            <h1 className="text-3xl font-semibold">Welcome {employeeName || 'Student'}!</h1>
            <p className="mt-4 text-gray-700">
                Use the menu to access your courses, assessments, and grades.
            </p>
            <p className="mt-4 text-gray-700">
                Your Candidate ID is: {candidateId}
            </p>
        </div>
    );
}

export default StudentDashboard;

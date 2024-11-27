import React from 'react';
import { Link,useLocation } from 'react-router-dom';

function StudentDashboard() {
        const location = useLocation();
        const { employeeName,candidateId  } = location.state || {};
        console.log("Candidate ID:", candidateId);
        
    
    return (
        <div className="h-screen flex">
            {/* Sidebar */}
            <aside className="w-1/4 bg-blue-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
                <nav className="space-y-4">
                <Link to="/profile" state={{ candidateId }} className="block py-2 px-4 rounded hover:bg-blue-700">Candidate Profile</Link>
                <Link to="/profile/testAppear" state={{ candidateId }}  className="block py-2 px-4 rounded hover:bg-blue-700">Take Assessments</Link>
                <Link to="/candidatetestlist" className="block py-2 px-4 rounded hover:bg-blue-700">View Assesment List</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-100">
                <h1 className="text-3xl font-semibold">{employeeName || 'Student'}!</h1>
                <p className="mt-4 text-gray-700">
                    Use the menu to access your courses, assessments, and grades.
                </p>
            </main>
        </div>
    );
}

export default StudentDashboard;

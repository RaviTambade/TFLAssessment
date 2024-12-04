import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function StudentLayout() {
    const location = useLocation();
    const { employeeName, candidateId } = location.state || {};
    
    return (
        <div className="h-screen flex">
            {/* Sidebar */}
            <aside className="w-1/4 bg-blue-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
                <nav className="space-y-4">
                    <Link 
                        to="/profile" 
                        state={{ candidateId }} 
                        className="block py-2 px-4 rounded hover:bg-blue-700">
                        Candidate Profile
                    </Link>
                    <Link 
                        to="/profile/testAppear" 
                        state={{ candidateId }} 
                        className="block py-2 px-4 rounded hover:bg-blue-700">
                        Take Assessments
                    </Link>
                    <Link 
                        to="/candidatetestlist" 
                        state={{ candidateId }} 
                        className="block py-2 px-4 rounded hover:bg-blue-700">
                        View Assessment List
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-100">
                {/* Header */}
                <h1 className="text-3xl font-semibold">Welcome {employeeName || 'Student'}!</h1>

                {/* Dynamic Content */}
                <div className="mt-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default StudentLayout;

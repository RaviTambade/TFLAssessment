import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function TeacherDashboard() {
    const location = useLocation();
    const { employeeName } = location.state || {};

    return (
        <div className="h-screen flex">
            {/* Sidebar */}
            <aside className="w-1/4 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-4">Teacher Dashboard</h2>
                <nav className="space-y-4">
                    <Link to="/createTestComponent" className="block py-2 px-4 rounded hover:bg-gray-700">Create Assessment</Link>
                    <Link to="/insertQuestionsByTest" className="block py-2 px-4 rounded hover:bg-gray-700">Insert Questions By Test</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-100">
                <h1 className="text-3xl font-semibold">{employeeName || 'Teacher'}!</h1>
                <p className="mt-4 text-gray-700">
                    Use the menu to navigate through the available teacher tools and options.
                </p>
            </main>
        </div>
    );
}

export default TeacherDashboard;

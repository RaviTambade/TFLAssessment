import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function TeacherDashboard() {
    const location = useLocation();
    const { employeeName } = location.state || {};
    const [isManageOpen, setIsManageOpen] = useState(false);

    const toggleManageMenu = () => {
        setIsManageOpen(!isManageOpen);
    };

    return (
        <div className="h-screen flex">
            <aside className="w-1/4 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-4">Teacher Dashboard</h2>
                <nav className="space-y-4">
                    <Link to="/createTestComponent" className="block py-2 px-4 rounded hover:bg-gray-700"> Create Assessment </Link>

                    <div>
                        <button onClick={toggleManageMenu}className="block w-full py-2 px-4 rounded hover:bg-gray-700 text-left"> Manage Assessments</button>
                        {isManageOpen && (
                            <div className="ml-4 space-y-2">
                                <Link to="/rescheduleAssessment"className="block py-2 px-4 rounded hover:bg-gray-700">Reschedule Assessment</Link>
                                <Link to="/insertQuestionsByTest" className="block py-2 px-4 rounded hover:bg-gray-700">Insert Questions By Assessment</Link>
                                <Link to="/changeDuration"className="block py-2 px-4 rounded hover:bg-gray-700">Change Duration</Link>
                                <Link to="/testresultdetails" className="block py-2 px-4 rounded hover:bg-gray-700"> Assessment Details</Link>
                            </div>
                        )}
                    </div>
                </nav>
            </aside>

            <main className="flex-1 p-6 bg-gray-100">
                <h1 className="text-3xl font-semibold"> Welcome {employeeName || 'Teacher'}!</h1>
                <p className="mt-4 text-gray-700">
                    Use the menu to navigate through the available teacher tools and options.
                </p>
            </main>
        </div>
    );
}

export default TeacherDashboard;

import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function StudentLayout() {
    const location = useLocation();
    const { employeeName = "Student", candidateId } = location.state || {};
    
    // Check if we are on a route where the welcome message should be shown
    const showWelcomeMessage = location.pathname === "/student"; // Or other specific paths

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                {/* Sidebar Header */}
                <div className="py-6 text-center border-b border-gray-700">
                    <h2 className="text-2xl font-bold">Student Dashboard</h2>
                </div>

                {/* Sidebar Links */}
                <nav className="flex-1 px-4 py-6 space-y-4">
                    <Link
                        to="profile"
                        state={{ candidateId }}
                        className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                    >
                        Candidate Profile
                    </Link>
                    <Link
                        to="profile/testAppear"
                        state={{ candidateId }}
                        className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                    >
                        Start Assessment
                    </Link>
                    <Link
                        to="candidatetestlist"
                        state={{ candidateId }}
                        className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                    >
                        View Assessment List
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {/* Page Header */}
                <header className="mb-8">
                    {showWelcomeMessage && (
                        <h1 className="text-4xl font-bold text-gray-800">
                            Welcome, {employeeName}!
                        </h1>
                    )}
                </header>

                {/* Dynamic Content */}
                <section>
                    <Outlet />
                </section>
            </main>
        </div>
    );
}

export default StudentLayout;

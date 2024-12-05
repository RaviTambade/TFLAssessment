import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';


function StudentLayout() {
  const location = useLocation();
  const { employeeName = 'Student', candidateId } = location.state || {};

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-blue-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Student Dashboard
        </h2>
        <nav className="space-y-4">
          <Link
            to="profile"
            state={{ candidateId }}
            className="block py-2 px-4 rounded hover:bg-blue-700"
          >
            Candidate Profile
          </Link>
          <Link
            to="profile/testAppear"
            state={{ candidateId }}
            className="block py-2 px-4 rounded hover:bg-blue-700"
          >
            Take Assessments
          </Link>
          <Link
            to="candidatetestlist"
            state={{ candidateId }}
            className="block py-2 px-4 rounded hover:bg-blue-700"
          >
            View Assessment List
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold">
          Welcome {employeeName}!
        </h1>


        {/* Default Dashboard Content */}
        {!location.pathname.includes("profile") &&
          !location.pathname.includes("candidatetestlist") &&
          !location.pathname.includes("testAppear") && (
            <div className="mt-4 text-gray-700">
              <p>
                Use the menu to access your courses, assessments, and grades.
              </p>
              <p className="mt-4">
                Your Candidate ID is: {candidateId || 'Not Available'}
              </p>
            </div>
          )}

        {/* Dynamic Content via Outlet */}
        <div className="mt-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default StudentLayout;

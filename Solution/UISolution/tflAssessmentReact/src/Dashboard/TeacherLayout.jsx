import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function TeacherLayout() {
  const location = useLocation();
  const { employeeName = 'Teacher' } = location.state || {};
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Teacher Dashboard</h2>
        <nav className="space-y-4">
          <Link
            to="createTestComponent"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Create Assessment
          </Link>
          <div>
            <button
              onClick={toggleDropdown}
              className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700"
            >
              Manage Assessments
            </button>
            {isDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="insertQuestionsByTest"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Insert Questions
                </Link>
                <Link
                  to="rescheduleAssessment"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Reschedule Assessment
                </Link>
                <Link
                  to="changeDuration"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Change Duration
                </Link>
                <Link
                  to="assessmentlist"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Assessment List
                </Link>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold">
          Welcome {employeeName}!
        </h1>

        {/* Default Dashboard Content */}
        {!location.pathname.includes("createTestComponent") &&
          !location.pathname.includes("insertQuestionsByTest") &&
          !location.pathname.includes("rescheduleAssessment") &&
          !location.pathname.includes("changeDuration") &&
          !location.pathname.includes("testresultdetails") && (
            <div className="mt-4 text-gray-700">
              <p>
                Use the menu to manage your courses, assessments, and grades.
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

export default TeacherLayout;

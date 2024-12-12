import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function TeacherLayout() {
  const location = useLocation();
  const { employeeName = "Teacher" } = location.state || {};
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const showWelcomeMessage = location.pathname === "/teacher";

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col overflow-y-auto">
        {/* Sidebar Header */}
        <div className="py-6 text-center border-b border-gray-700">
          <h2 className="text-2xl font-bold">Teacher Dashboard</h2>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-4">
          <Link
            to="assessmentlist"
            className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            Assessment List
          </Link>
          <Link
            to="createTestComponent"
            className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            Create Assessment
          </Link>

          <div>
            <button
              onClick={toggleDropdown}
              className="block w-full text-left py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              Manage Assessments
            </button>
            {isDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="insertQuestionsByTest"
                  className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                >
                  Insert Questions
                </Link>
                <Link
                  to="rescheduleAssessment"
                  className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                >
                  Reschedule Assessment
                </Link>
                <Link
                  to="changeDuration"
                  className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                >
                  Change Duration
                </Link>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8">
          {showWelcomeMessage && (
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome, {employeeName}!
            </h1>
          )}
        </header>

        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default TeacherLayout;

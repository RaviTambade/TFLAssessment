import React, { useState, useMemo } from "react";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";


type Assessment = {
  id: number;
  srNo: number;
  assessmentTitle: string;
  fullName: string;
  difficultyLevel: string;
  status: string;
  isActive: boolean;
};

const AllAssessment = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState(false);
  const [showAssessments, setShowAssessments] = useState(false);
  
  // Filter states
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [activeStatusFilter, setActiveStatusFilter] = useState("");
  const [studentSearch, setStudentSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const getAssessments = async () => {
    try {  
      setShowAssessments(true);
      setLoading(true);
      const response = await fetch(`${WEBAPI_DOTNET_URL}/Assessment/all`);
      const data = await response.json();
      setAssessments(data);
    } 
    catch (error) {
      console.log("Error:", error);
    } 
    finally {
      setLoading(false);
    }
  };

  // Soft Delete
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`${WEBAPI_DOTNET_URL}/Assessment/InActive/${id}`,{method: "DELETE"});
      if (response.ok) {
        const updatedData = assessments.map((item) =>
          item.id === id ? { ...item, isActive: false } : item
        );
        setAssessments(updatedData);
      }
      else {
        console.error("Failed to InActive assessment");
      }
    } 
    catch (error) {
      console.error("Error:", error);
    }
  };

  // Restore
  const handleRestore = async (id: number) => {
    try {
      const response = await fetch(
        `${WEBAPI_DOTNET_URL}/Assessment/restore/${id}`, { method: "POST" }
      );

      if (response.ok) {
        const updatedData = assessments.map((item) =>
          item.id === id ? { ...item, isActive: true } : item
        );
        setAssessments(updatedData);
      } else {
        console.error("Failed to restore assessment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Filter logic
  const filteredAssessments = useMemo(() => {
    return assessments.filter((assessment) => {
      const difficultyMatch = !difficultyFilter || assessment.difficultyLevel.toUpperCase() === difficultyFilter.toUpperCase();
      const statusMatch = !statusFilter || assessment.status.toUpperCase() === statusFilter.toUpperCase();
      const activeStatusMatch = !activeStatusFilter || (activeStatusFilter === 'ACTIVE' ? assessment.isActive : !assessment.isActive);
      const studentMatch = !studentSearch || assessment.fullName.toLowerCase().includes(studentSearch.toLowerCase());
      
      return difficultyMatch && statusMatch && activeStatusMatch && studentMatch;
    });
  }, [assessments, difficultyFilter, statusFilter, activeStatusFilter, studentSearch]);

  // Pagination
  const totalPages = Math.ceil(filteredAssessments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAssessments = filteredAssessments.slice(startIndex, startIndex + itemsPerPage);

  const handleReset = () => {
    setDifficultyFilter("");
    setStatusFilter("");
    setActiveStatusFilter("");
    setStudentSearch("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {!showAssessments ? (
          <div className="text-center mb-8">
            <button
              className="bg-[#E53935] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#D32F2F] transition"
              onClick={getAssessments}
            >
              All Assessments
            </button>
          </div>
        ) : (
          <>
            {/* Filter Section */}
            <div className="bg-white mb-8 p-6 rounded-lg border border-gray-200">
              <div className="grid grid-cols-5 gap-4 mb-4">
                {/* Difficulty Filter */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Difficulty</label>
                  <select
                    value={difficultyFilter}
                    onChange={(e) => {
                      setDifficultyFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  >
                    <option value="">Select Difficulty</option>
                    <option value="BEGINNER">BEGINNER</option>
                    <option value="INTERMEDIATE">INTERMEDIATE</option>
                    <option value="ADVANCE">ADVANCE</option>
                  </select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Status</label>
                  <select 
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  >
                    <option value="">Select Status</option>
                    <option value="ASSIGNED">ASSIGNED</option>
                    <option value="PENDING">PENDING</option>
                    <option value="COMPLETED">COMPLETED</option>
                  </select>
                </div>

                {/* Active Status Filter */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Active Status</label>
                  <select
                    value={activeStatusFilter}
                    onChange={(e) => {
                      setActiveStatusFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                  >
                    <option value="">Select Active Status</option>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>

                {/* Student Search */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Student</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by student name..."
                      value={studentSearch}
                      onChange={(e) => {
                        setStudentSearch(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                    />
                    <button className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 justify-end">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 border-2 border-gray-400 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    Reset
                  </button>
                  <button
                    className="px-6 py-2 bg-[#E53935] text-white rounded-lg font-semibold hover:bg-[#D32F2F] transition"
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>

            {/* All Assessments Button */}
            <div className="text-center mb-8">
              <button
                className="bg-[#E53935] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#D32F2F] transition"
                onClick={() => {
                  handleReset();
                  setShowAssessments(true);
                }}
              >
                All Assessments
              </button>
            </div>

            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              <>
                {/* Table */}
                <div className="overflow-x-auto bg-[#F8F9FA] rounded-xl shadow-sm border border-gray-100 mb-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 text-gray-400 font-bold text-lg uppercase tracking-wider">Sr No</th>
                        <th className="px-6 py-4 text-gray-400 font-bold text-lg uppercase tracking-wider">Title</th>
                        <th className="px-6 py-4 text-gray-400 font-bold text-lg uppercase tracking-wider text-center">Difficulty</th>
                        <th className="px-6 py-4 text-gray-400 font-bold text-lg uppercase tracking-wider text-center">Student</th>
                        <th className="px-6 py-4 text-gray-400 font-bold text-lg uppercase tracking-wider text-center">Status</th>
                        <th className="px-6 py-4 text-gray-400 font-bold text-lg uppercase tracking-wider text-center">Active Status</th>
                        <th className="px-6 py-4 text-gray-400 font-bold text-lg uppercase tracking-wider text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedAssessments.map((assessment) => (
                        <tr
                          key={assessment.id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition"
                        >
                          <td className="px-6 py-5 text-gray-600 font-medium text-center">{assessment.srNo}</td>
                          <td className="px-6 py-5 text-gray-400 font-medium text-lg">{assessment.assessmentTitle}</td>
                          <td className="px-6 py-5 text-center">
                            <span className="bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                              {assessment.difficultyLevel}
                            </span>
                          </td>
                          <td className="px-6 py-5 text-gray-400 font-medium text-lg text-center">{assessment.fullName}</td>
                          <td className="px-6 py-5 text-center">
                            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${assessment.status.toUpperCase() === 'COMPLETED' ? 'bg-[#C6F6D5] text-[#2F855A]' :
                                assessment.status.toUpperCase() === 'PENDING' ? 'bg-[#FEFCBF] text-[#975A16]' : 'bg-gray-200 text-gray-700'
                              }`}>
                              {assessment.status}
                            </span>
                          </td>
                          <td className="px-6 py-5 text-center">
                            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${assessment.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                              }`}>
                              {assessment.isActive ? 'ACTIVE' : 'INACTIVE'}
                            </span>
                          </td>
                          <td className="px-6 py-5 text-center">
                            {assessment.isActive ? (
                              <button
                                onClick={() => handleDelete(assessment.id)}
                                className="bg-[#E53935] hover:bg-[#D32F2F] text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm"
                              >
                                InActive
                              </button>
                            ) : (
                              <button
                                onClick={() => handleRestore(assessment.id)}
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm"
                              >
                                Restore
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between text-gray-600">
                  <p className="text-sm">
                    Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAssessments.length)} of {filteredAssessments.length} entries
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-lg font-semibold transition ${
                          currentPage === page
                            ? 'bg-[#E53935] text-white'
                            : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllAssessment;
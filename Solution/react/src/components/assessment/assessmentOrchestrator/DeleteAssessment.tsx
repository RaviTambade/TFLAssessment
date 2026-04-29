import React, { useState } from "react";


type Assessment = {
  id: number;
  srNo: number;
  assessmentTitle: string;
  fullName: string;
  difficultyLevel: string;
  status: string;
  isActive: boolean;
};

const DeleteAssessment = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState(false);
  const [showAssessments, setShowAssessments] = useState(false);

  const getAssessments = async () => {
    try {
      setShowAssessments(true);
      setLoading(true);
      const response = await fetch(
        "http://localhost:5201/api/Assessment/all"
      );

      const data = await response.json();

      setAssessments(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Soft Delete
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:5201/api/Assessment/InActive/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const updatedData = assessments.map((item) =>
          item.id === id ? { ...item, isActive: false } : item
        );
        setAssessments(updatedData);
      } else {
        console.error("Failed to InActive assessment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Restore
  const handleRestore = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:5201/api/Assessment/restore/${id}`,
        {
          method: "POST",
        }
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

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">

          <button
            className="bg-[#E53935] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#D32F2F] transition"
            onClick={getAssessments}
          >
            All Assessments
          </button>
        </div>

        {!showAssessments ? null : loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto bg-[#F8F9FA] rounded-xl shadow-sm border border-gray-100">
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
                {assessments.map((assessment) => (
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
                      <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${assessment.status === 'Completed' ? 'bg-[#C6F6D5] text-[#2F855A]' :
                          assessment.status === 'Pending' ? 'bg-[#FEFCBF] text-[#975A16]' : 'bg-gray-200 text-gray-700'
                        }`}>
                        {assessment.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${assessment.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                        {assessment.isActive ? 'Active' : 'InActive'}
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
        )}
      </div>
    </div>
  );
};

export default DeleteAssessment;
